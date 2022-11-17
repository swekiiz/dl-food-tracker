import { Box, Stack, Toolbar } from '@mui/material'
import { CoreLink } from 'views/components/CoreLink'

import { StyledAppBar, StyledButton } from './components'

export const Navbar = () => {
  return (
    <StyledAppBar position="relative">
      <Box pt={2}>
        <Toolbar disableGutters>
          <Stack direction="row" width="100%" justifyContent="center" alignItems="center" position="relative" gap={4}>
            <Stack position="absolute" pl={8} left={0} justifyContent="center" alignItems="center">
              <CoreLink href="#">
                <img src="/static/images/logo.svg" width={180} />
              </CoreLink>
            </Stack>
            <StyledButton variant="text" color="secondary">
              Home
            </StyledButton>
            <StyledButton variant="text" color="secondary">
              Fruits
            </StyledButton>
            <StyledButton variant="text" color="secondary">
              Tracker
            </StyledButton>
            <Stack position="absolute" right={0} justifyContent="center" alignItems="center">
              <CoreLink href="#">
                <img src="/static/images/question.svg" width={48} />
              </CoreLink>
            </Stack>
          </Stack>
        </Toolbar>
      </Box>
    </StyledAppBar>
  )
}
