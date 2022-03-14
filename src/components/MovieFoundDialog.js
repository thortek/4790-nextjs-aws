import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  Typography,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'

const MovieFoundDialog = (props) => {
  const { open, movie, onSaveMovie, onClose } = props

  return (
    <Dialog maxWidth="sm" open={open} onClose={onClose} scroll='paper'>
      <DialogContent sx={{ m: 0}}>
      <Card key={movie.id} sx={{ maxWidth: 300 }}>
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
      </Card>
      </DialogContent>
      <DialogActions>
          <IconButton aria-label="save movie" onClick={onSaveMovie}>
            <SaveIcon />
          </IconButton>
        </DialogActions>
    </Dialog>
  )
}

export default MovieFoundDialog
