import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children: React.ReactNode
}

export const AppLayout = ({ children }: Props) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

