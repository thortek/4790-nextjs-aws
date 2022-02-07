import * as React from 'react'
import Link from 'next/link'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import { getMovieByTitle } from "../utils/api-util"

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [fetchedMovie, setFetchedMovie] = React.useState({})
  const [searchTerms, setSearchTerms] = React.useState("")

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleChange = (event) => {
    setSearchTerms(event.target.value)
  }

  const handleSearch = async () => {
    const omdbMovie = await getMovieByTitle(searchTerms)
    setFetchedMovie(omdbMovie)
    console.log(omdbMovie)
  }

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title='Show Movies'>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link href="/movies">Movies</Link>
              </Button>
            </Tooltip>
          </Box>

          <Box>
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          <TextField
            size="small"
            label="Search"
            variant="outlined"
              onChange={handleChange}
              value={searchTerms}
            sx={{ backgroundColor: 'white', flexGrow: 2, mr: 20}}
            />
          </Box>
          
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt='Thor Anderson'
                  src='/static/images/ThorHeadShotCropped200.png'
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
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
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
