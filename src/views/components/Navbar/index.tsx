import { AppBar, Box, Toolbar } from '@mui/material'

export const Navbar = () => {
  return (
    <AppBar position="relative">
      <Box px={5}>
        <Toolbar disableGutters>navbar</Toolbar>
      </Box>
    </AppBar>
  )
}
