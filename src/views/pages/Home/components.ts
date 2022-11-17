import { Box, styled } from '@mui/material'

export const Root = styled(Box)(({ theme }) => ({
  height: '100%',
  paddingLeft: theme.spacing(8),
}))

export const BannerContainer = styled(Box)(() => ({
  position: 'relative',
  flex: '1 1 0px',
  height: '100%',
}))

export const FruitBanner = styled('img')(() => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  zIndex: -1,
}))
