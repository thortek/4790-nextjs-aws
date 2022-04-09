import * as React from 'react'
import { DataStore } from 'aws-amplify'
import config from '../aws-exports'
import Link from 'next/link'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Snackbar from '@mui/material/Snackbar'
import SearchIcon from '@mui/icons-material/Search'
import MovieFoundDialog from './MovieFoundDialog'
import { MovieData } from '../models'
import { createTheme } from '@mui/material/styles'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const theme = createTheme({

})

const ResponsiveAppBar = ({user, signOut}) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [fetchedMovie, setFetchedMovie] = React.useState({})
  const [searchTerms, setSearchTerms] = React.useState("")
  const [dialog, setDialog] = React.useState({
    isOpen: false,
    movie: undefined,
  })
  const [open, setOpen] = React.useState(false)
  const [snackBarMessage, setSnackBarMessage] = React.useState('')
  const [snackBarSeverity, setSnackBarSeverity] = React.useState('')

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleSignOut = async () => {
    await DataStore.clear()
    signOut()
  }

  const handleChange = (event) => {
    setSearchTerms(event.target.value)
  }

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  const handleSearch = async () => {
    if (!searchTerms) return
    const omdbMovie = await fetch('/api/movie', {
      method: 'POST',
      body: JSON.stringify({ title: searchTerms }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    setFetchedMovie(await omdbMovie.json())

    setDialog({
      isOpen: true,
      movie: fetchedMovie,
    })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleToast = (message, severity) => {
    setSnackBarMessage(message)
    setSnackBarSeverity(severity)
    setOpen(true)
  }

  const handleSaveMovie = async () => {
    try {
      const ratingsArray = fetchedMovie.Ratings.map(rating => {
        return { value: rating.Value, source: rating.Source }
      })
      handleToast(`The movie "${fetchedMovie.Title}" was saved.`, 'success')
      await DataStore.save(
        new MovieData(
          {
            title: fetchedMovie.Title,
            year: fetchedMovie.Year,
            released: fetchedMovie.Released,
            runtime: fetchedMovie.Runtime,
            genre: fetchedMovie.Genre,
            director: fetchedMovie.Director,
            writer: fetchedMovie.Writer,
            actors: fetchedMovie.Actors,
            plot: fetchedMovie.Plot,
            poster: fetchedMovie.Poster,
            metascore: fetchedMovie.Metascore,
            dvd: fetchedMovie.DVD,
            boxOffice: fetchedMovie.BoxOffice,
            rated: fetchedMovie.Rated,
            ratings: ratingsArray,
          }
        )
      )
      console.log('Movie was saved!')
    } catch (err) {
      console.log("Save movie error ", err)
      handleToast(`Error: The movie "${fetchedMovie.Title}" was not saved.`, 'error')
    } finally {
      setDialog({
        isOpen: false
      })
    }
  }

  const handleCloseDialog = () => {
    setDialog({
      isOpen: false
    })
  }

  return (
    <>
      <AppBar position='static'>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box >
            <Tooltip title='Show Movies'>
              <Button variant="contained" color="primary" sx={{ my: 2, display: 'block' }}>
                <Link href="/movies">Movies</Link>
              </Button>
            </Tooltip>
          </Box>

          <Box >
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
            <TextField
              size="small"
              label="Search"
              variant="filled"
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              value={searchTerms}
              sx={{
                backgroundColor: 'white', mr: 1, width: '50ch', [theme.breakpoints.down('sm')]: {
                  width: '20ch',
                },
              }}
            />
          </Box>

          <Box >
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt='Thor Anderson'
                  src='ThorHeadShotCropped200.png'
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '50px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Account</MenuItem>
            <MenuItem onClick={handleSignOut}>Logout</MenuItem>
{/*               {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <MovieFoundDialog open={dialog.isOpen} movie={fetchedMovie} onClose={handleCloseDialog} onSaveMovie={handleSaveMovie} />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message={snackBarMessage} severity={snackBarSeverity}/>
    </>
  )
}
export default ResponsiveAppBar
