import Amplify, { API } from "aws-amplify"
import config from "../../aws-exports"
import ResponsiveAppBar from "../../components/ResponsiveAppBar"
import { Box, Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { createMovieData } from "../../graphql/mutations"
import { listMovieData } from "../../graphql/queries"

Amplify.configure(config)

// 2. Nextjs will execute this component function AFTER getStaticProps
const MovieList = (props) => {

    const { movieList } = props

    console.log(movieList)

    const handleSaveMovie = async () => {
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
    }

    const handleDeleteMovie = () => {
        console.log("Got to delete this movie")
    }

    return (
        <>
            <ResponsiveAppBar />
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {movieList.map((movie) => (
                    <Card key={movie.id} sx={{ width: 400, m: 1 }}>
                    <CardMedia sx={{maxWidth: 400, maxHeight: 600}} component='img' image={movie.poster} title={movie.title} />
                    <CardContent>
                        <Box>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Year: {movie.year}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Rating: {movie.rated}
                            </Typography>
                            <Typography variant='subtitle2' color='textSecondary'>
                                Plot: {movie.plot}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="delete" onClick={handleDeleteMovie}>
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
export async function getStaticProps() {
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
}

export default MovieList
