import { Box, CardMedia, Dialog, Typography, Card, CardContent, CardActions, IconButton } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'

const MovieFoundDialog = (props) => {
    const { movie, onClose, open, onSaveMovie } = props
    return (
        <Dialog
            
            maxWidth="sm"
            onClose={onClose}
            open={open}>
             <Card sx={{ maxWidth: 300, m: 1 }}>
                    <CardMedia component='img' image={movie.Poster} title={movie.Title} />
                    <CardContent>
                        <Box>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Year: {movie.Year}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Rating: {movie.Rated}
                        </Typography>
                        <Typography variant='subtitle1' color='textSecondary'>
                                Director: {movie.Director}
                            </Typography>
                            <Typography variant='subtitle2' color='textSecondary'>
                                Plot: {movie.Plot}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="save" onClick={onSaveMovie}>
                            <SaveIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
        </Dialog>
    )
}

export default MovieFoundDialog