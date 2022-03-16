import * as React from 'react'
import { DataStore } from 'aws-amplify'
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
import SearchIcon from '@mui/icons-material/Search'
import MovieFoundDialog from './MovieFoundDialog'
import { MovieData } from '../models'
import { createTheme } from '@mui/material/styles'


const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const theme = createTheme({

})

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [fetchedMovie, setFetchedMovie] = React.useState({})
  const [searchTerms, setSearchTerms] = React.useState("")
  const [dialog, setDialog] = React.useState({
    isOpen: false,
    movie: undefined,
  })

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
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

  const handleSaveMovie = async () => {
    try {
      const ratingsArray = fetchedMovie.Ratings.map(rating => {
        return { value: rating.Value, source: rating.Source }
      })
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
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <MovieFoundDialog open={dialog.isOpen} movie={fetchedMovie} onClose={handleCloseDialog} onSaveMovie={handleSaveMovie} />
    </>
  )
}
export default ResponsiveAppBar
