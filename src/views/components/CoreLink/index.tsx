import { Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import { ReactNode } from 'react'

import { InternalLinkContainer } from './components'

type Props = {
  href?: string
  path?: string
  children: ReactNode
  download?: string
  className?: string
  isLinkStyle?: boolean
}

export const CoreLink = ({ href, path, children, download, className, isLinkStyle }: Props) => {
  if (path) {
    return (
      <Link href={path} passHref>
        <InternalLinkContainer isLinkStyle={isLinkStyle} className={className}>
          {children}
        </InternalLinkContainer>
      </Link>
    )
  }

  if (href) {
    return (
      <MuiLink
        className={className}
        href={href}
        target="_blank"
        rel="noopenner noreferrer"
        sx={{ display: 'contents' }}
        download={download}
      >
        {children}
      </MuiLink>
    )
  }

  return <>{children}</>
}
