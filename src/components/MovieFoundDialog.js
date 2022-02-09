import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  Typography,
  CardActions,
  IconButton,
} from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'

const MovieFoundDialog = (props) => {
  const { open, movie, onSaveMovie, onClose } = props

  return (
    <Dialog maxWidth="sm" open={open} onClose={onClose}>
      <Card key={movie.id} sx={{ maxWidth: 300, m: 1 }}>
        <CardMedia component="img" image={movie.Poster} title={movie.Title} />
        <CardContent>
          <Box>
            <Typography variant="subtitle1" color="textSecondary">
              Year: {movie.Year}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Rating: {movie.Rated}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Plot: {movie.Plot}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <IconButton aria-label="save movie" onClick={onSaveMovie}>
            <SaveIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Dialog>
  )
}

export default MovieFoundDialog
