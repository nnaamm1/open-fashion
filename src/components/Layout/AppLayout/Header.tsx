import { Box, Center, Flex, Image, Spacer } from '@chakra-ui/react'
import logo from '@/assets/images/logo.png'
import burgerBar from '@/assets/icons/burger_bar.png'
import search from '@/assets/icons/search.png'
import shoppingBag from '@/assets/icons/shopping_bag.png'

type Props = {}

const Header = (props: Props) => {
  return (
    <Flex ml='16px' mr='24px' h='60px' position='relative' >
      <Center>
        <Image width='24px' objectFit='contain' src={burgerBar} alt='' />
      </Center>

      <Spacer />

      <Box position='absolute' left={0} right={0}  mx='auto' textAlign='center' width='80px' h='100%' >
        <Image objectFit='contain' src={logo} alt='' h='100%' />
      </Box>

      <Spacer />

      <Flex>
        <Image width='24px' objectFit='contain' src={search} alt='' mr='16px' />
        <Image width='24px' objectFit='contain' src={shoppingBag} alt='' />
      </Flex>
    </Flex>
  )
}

export default Header
