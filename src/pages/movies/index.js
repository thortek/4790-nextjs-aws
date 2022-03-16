import * as React from 'react'
import Head from 'next/head'
import { Amplify, DataStore } from "aws-amplify"
import useSWR from "swr"
import { MovieData } from '../../models'
import config from "../../aws-exports"
import ResponsiveAppBar from "../../components/ResponsiveAppBar"
import { Box, Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

Amplify.configure(config)

// 2. Nextjs will execute this component function AFTER getStaticProps
const MovieList = () => {

    const [movieList, setMovieList] = React.useState([])


    const handleDeleteMovie = async (movie) => {
        try {
          const movieToDelete = await DataStore.query(MovieData, movie.id)
          await DataStore.delete(movieToDelete)
        } catch (err) {
          console.log("Save delete movie error: ", err)
        }
    }

    const fetcher = async () => {
      try {
        let tempList = await DataStore.query(MovieData)
        setMovieList(tempList)
      } catch (err) {
        console.log('Retrieve movie list error', err)
      }
      return movieList
    }

    const { data, error } = useSWR('/movies', fetcher, {refreshInterval: 500
    })

    if (error) return <div>Failed to load list of movies.</div>
    if (!data) return <div>Loading...</div>

    return (
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>Movie List</title>
        </Head>
            <ResponsiveAppBar />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {movieList && movieList.map((movie) => (
                    <Card key={movie.id} sx={{ minWidth: 200, m: 1 }}>
                    <CardMedia component='img' image={movie.poster} title={movie.title}  />
                    <CardContent >
                        <Box>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Year: {movie.year}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Rating: {movie.rated}
                            </Typography>
                            <Typography variant='subtitle2' color='textSecondary'>
                                Director: {movie.director}
                                </Typography>
                                {movie.ratings?.map((rating) => {
                                    <Typography variant='caption'>
                                        Rating Source: {rating?.source} Rating Value: {rating?.value}
                                    </Typography>
                                })}
                        </Box>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="delete" onClick={() => handleDeleteMovie(movie)}>
                            <DeleteIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
            </Box>
        </>
    )
}

export default MovieList
