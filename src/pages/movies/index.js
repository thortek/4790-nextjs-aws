import Amplify, { API } from "aws-amplify"
import config from "../../aws-exports"
import ResponsiveAppBar from "../../components/ResponsiveAppBar"
import { Box, Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { listMovieData } from "../../graphql/queries"

Amplify.configure(config)

// 2. Nextjs will execute this component function AFTER getStaticProps
const MovieList = (props) => {

    const { movieList } = props

    console.log(movieList)

    const handleDeleteMovie = () => {
        console.log("Got to delete this movie")
    }

    return (
        <>
            <ResponsiveAppBar />
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {movieList.map((movie) => (
                    <Card key={movie.id} sx={{ maxWidth: 200, m: 1 }}>
                    <CardMedia component='img' image={movie.poster} title={movie.title} />
                    <CardContent>
                        <Box>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Year: {movie.year}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Director: {movie.director}
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
