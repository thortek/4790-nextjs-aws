import * as React from 'react'
import Amplify from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import { MovieData } from '../../models'
import useSWR from 'swr'
import config from '../../aws-exports'

import ResponsiveAppBar from '../../components/ResponsiveAppBar'
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

Amplify.configure(config)

const MovieList = () => {
  const [movieList, setMovieList] = React.useState([])
  //const { movieList } = props

  //console.log(movieList)

  /*   const handleSaveMovie = async () => {
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
      rated: movie.Rated,
    }

    try {
      await DataStore.save(
        new MovieData({
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
          rated: movie.Rated,
        }),
      )
      console.log('Created a new movie')
      console.log(response)
    } catch (err) {
      console.log('Save movie error', err)
    }
  } */

  const handleDeleteMovie = async (movie) => {
    try {
      const movieToDelete = await DataStore.query(MovieData, movie.id)
      console.log(movieToDelete)
      await DataStore.delete(movieToDelete)
    } catch (err) {
      console.error('Delete movie error: ', err)
    }
    /*     try {
      const response = await API.graphql({
        query: deleteMovieData,
        variables: { input: { id: movie.id, _version: movie._version } },
        authMode: 'API_KEY',
      })
      console.log(response)
    } catch (err) {
      console.log('Save delete movie error: ', err)
    } */
  }

  const fetcher = async () => {
    try {
      let tempList = await DataStore.query(MovieData)
      setMovieList(JSON.parse(JSON.stringify(tempList)))
    } catch (err) {
      console.log('Retrieve movie list error', err)
    }
    return movieList
  }

  const { data, error } = useSWR('/movies', fetcher, { refreshInterval: 1000 })
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {movieList &&
          movieList.map((movie) => (
            <Card key={movie.id} sx={{ maxWidth: 200, m: 1 }}>
              <CardMedia
                component='img'
                image={movie.poster}
                title={movie.title}
                height='300'
              />
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
                </Box>
              </CardContent>
              <CardActions>
                <IconButton
                  aria-label='delete'
                  onClick={() => handleDeleteMovie(movie)}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
      </Box>
    </>
  )
}

// 1. Nextjs will execute this function first.  It is never visible to the client!
/* export async function getServerSideProps() {
  let movieList = []
  try {
      movieList = await DataStore.query(MovieData)
  } catch (err) {
    console.log('Retrieve movie list error', err)
  }
  return {
    props: {
      movieList: JSON.parse(JSON.stringify(movieList)),
    },
  }
} */

export default MovieList
