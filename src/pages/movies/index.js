import ResponsiveAppBar from "../../components/ResponsiveAppBar"
import { Box, Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { getMovieByTitle } from "../../utils/api-util"

// 2. Nextjs will execute this component function AFTER getStaticProps
const MovieList = (props) => {

    const { movie } = props

    const handleSaveMovie = () => {
        console.log("Gonna save this movie eventually")
    }

    const handleDeleteMovie = () => {
        console.log("Got to delete this movie")
    }

    return (
        <>
            <ResponsiveAppBar />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia component='img' image={movie.Poster} title={movie.Title} />
                    <CardContent>
                        <Box>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Year: {movie.Year}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Rating: {movie.Rated}
                            </Typography>
                            <Typography variant='subtitle2' color='textSecondary'>
                                Plot: {movie.Plot}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="save" onClick={handleSaveMovie}>
                            <SaveIcon/>
                        </IconButton>
                        <IconButton aria-label="delete" onClick={handleDeleteMovie}>
                            <DeleteIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

// 1. Nextjs will execute this function first.  It is never visible to the client!
export async function getStaticProps() {
    const fetchedMovie = await getMovieByTitle('Thor')

    return {
        props: {
            movie: fetchedMovie
        }
    }
}

export default MovieList
