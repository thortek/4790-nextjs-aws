import * as React from 'react'
import Amplify, { DataStore } from "aws-amplify"
import useSWR from "swr"
import { MovieData } from '../../models'
import config from "../../aws-exports"
import ResponsiveAppBar from "../../components/ResponsiveAppBar"
import { Box, Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
// import { createMovieData, deleteMovieData } from "../../graphql/mutations"
// import { listMovieData } from "../../graphql/queries"

Amplify.configure(config)

// 2. Nextjs will execute this component function AFTER getStaticProps
const MovieList = () => {

    const [movieList, setMovieList] = React.useState([])

    //console.log(movieList)

/*     const handleSaveMovie = async () => {
      console.log(`Gonna save the movie ${movie.Title} now...`)
      const newMovieToSave = {
        title: movie.Title,
        year: movie.Year,
        released: movie.Released,
        runtime: movie.Runtime,
        genre: movie.Genre,
        director: movie.Director,
        writer: movie.Writer,
        actors: movie.Actors,
        plot: movie.Plot,
        poster: movie.Poster,
        metascore: movie.Metascore,
        dvd: movie.DVD,
        boxOffice: movie.BoxOffice,
        rated: movie.Rated
      }

      try {
        const response = await API.graphql({
          query: createMovieData,
          variables: { input: newMovieToSave },
          authMode: 'API_KEY'
        })
        console.log('Created a new movie')
        console.log(response)
      } catch (err) {
        console.log("Save movie error", err)
      }
    } */

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
            <ResponsiveAppBar />
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {movieList && movieList.map((movie) => (
                    <Card key={movie.id} sx={{ maxWidth: 200, m: 1 }}>
                    <CardMedia component='img' image={movie.poster} title={movie.title} height='300' />
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

// 1. Nextjs will execute this function first.  It is never visible to the client!
/* export async function getStaticProps() {
    let movieList = []
    try {
        const response = await API.graphql({
          query: listMovieData,
          authMode: 'API_KEY'
        })
        movieList = response.data.listMovieData.items

      } catch (err) {
        console.log("Retrieve movie list error", err)
    }
    return {
        props: {
            movieList: movieList
        },
        revalidate: 10
    }
} */

export default MovieList
