import * as React from 'react'
import Head from 'next/head'
import { Amplify, DataStore, AuthModeStrategyType } from "aws-amplify"
import useSWR from "swr"
import { MovieData } from '../../models'
import config from "../../aws-exports"
import { Box, Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

// Amplify.configure(config)
Amplify.configure({
  ...config,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
  }
})

// 2. Nextjs will execute this component function AFTER getStaticProps
const MovieList = () => {
  const [movieList, setMovieList] = React.useState([])

  const handleEditMovie = async (movie) => {
    /* Models in DataStore are immutable. To update a record you must use the copyOf function
   to apply updates to the item’s fields rather than mutating the instance directly */
    await DataStore.save(MovieData.copyOf(movie, item => {
      // Update the values on {item} variable to update DataStore entry
      console.log("Here is where we would edit movie data.")
    }))
  }
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

  const { data, error } = useSWR('/movies', fetcher, {
    refreshInterval: 500
  })

  if (error) return <div>Failed to load list of movies.</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Movie List</title>
      </Head>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {movieList && movieList.map((movie) => (
          <Card key={movie.id} sx={{ maxWidth: 300, m: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

            <CardMedia component='img' image={movie.poster} title={movie.title} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent>
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
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="edit" onClick={() => handleEditMovie(movie)}>
                  <EditIcon />
                </IconButton>
              </CardActions>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  )
}

export default MovieList
