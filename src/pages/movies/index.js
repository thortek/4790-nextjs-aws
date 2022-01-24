import { Box, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import ResponsiveAppBar from '../../components/ResponsiveAppBar'
import { getMovieByTitle } from '../../utils/api-util'

// 2. Nextjs will execute this component function AFTER getStaticProps to provide the props needed
const MovieList = (props) => {
  const { movie } = props

  const handleClickSaveMovie = (movie) => {
    console.log("Gonna save this movie eventually")
  }

  const handleClickDeleteMovie = (movie) => {
    console.log("Got to delete this movie")
  }
  
  return (
    <>
      <ResponsiveAppBar />
      <Box component="form" sx={{display: 'flex', justifyContent: 'center'}}>
        <Card sx={{ maxWidth: 400}}>
          <CardMedia component='img' image={movie.Poster} title={movie.Title} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {movie.Title}
            </Typography>
            <Box>
                  <Typography variant='subtitle1' color='textSecondary'>
                    Year: {movie.Year}
                  </Typography>
                  <Typography variant='subtitle1' color='textSecondary'>
                    Rating: {movie.Rated}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                    Plot: {movie.Plot}
                  </Typography>
                </Box>
          </CardContent>
          <CardActions>
            <IconButton aria-label='save' onClick={() => handleClickSaveMovie({ movie })}>
              <SaveIcon/>
            </IconButton>
            <IconButton aria-label='delete' onClick={() => handleClickDeleteMovie({ movie })}>
              <DeleteIcon/>
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </>
  )
}

// 1. Nextjs will execute this function first when found. Never visible on the client side!
export async function getStaticProps() {
  const fetchedMovie = await getMovieByTitle('Thor')
  console.log(fetchedMovie)

  return {
    props: {
      movie: fetchedMovie,
    },
  }
}

export default MovieList
