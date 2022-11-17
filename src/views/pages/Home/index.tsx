import { Button, Stack, Typography } from '@mui/material'

import { BannerContainer, FruitBanner, Root } from './components'

const Content = () => {
  return (
    <Stack gap={4} flex="1 1 0px">
      <Typography variant="h2" color="primary" fontWeight={700}>
        Fruit <br />
        Tracker
      </Typography>
      <Typography variant="h4" color="primary" fontWeight={700}>
        3 Type of fruits
      </Typography>
      <Button variant="contained" color="primary" size="large" sx={{ maxWidth: 160 }}>
        Start
      </Button>
    </Stack>
  )
}

const Banner = () => {
  return (
    <BannerContainer>
      <FruitBanner src="/static/images/fruit-banner.svg" width="100%" />
    </BannerContainer>
  )
}

export const Home = () => {
  return (
    <Root>
      <Stack direction="row" height="100%" alignItems="center" justifyContent="center">
        <Content />
        <Banner />
      </Stack>
    </Root>
  )
}
