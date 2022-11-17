import { AppBar, Button, styled } from '@mui/material'

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: 'unset',
  backgroundColor: theme.palette.background.default,
}))

export const StyledButton = styled(Button)(() => ({
  fontSize: '24px',
}))
