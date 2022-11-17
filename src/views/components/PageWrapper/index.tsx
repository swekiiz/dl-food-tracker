// import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { Navbar } from 'views/components/Navbar'

// import { ROUTES_CONFIG } from 'routes/config'
import { ContentWrapper, Screen } from './components'

type Props = {
  children: ReactNode
}

export const PageWrapper = ({ children }: Props) => {
  //   const router = useRouter()

  //   const route = useMemo(() => ROUTES_CONFIG.find((route) => router.pathname === route.path), [router.pathname])

  return (
    <Screen>
      <Navbar />
      <ContentWrapper>{children}</ContentWrapper>
    </Screen>
  )
}
