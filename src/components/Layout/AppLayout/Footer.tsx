import divider from '@/assets/images/divider.png'
import twitter from '@/assets/icons/twitter.png'
import instagram from '@/assets/icons/instagram.png'
import youtube from '@/assets/icons/youtube.png'
import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Flex direction='column' alignItems='center'>
      <Flex gap='48px' >
        <Image src={twitter} alt='' w='24px' />
        <Image src={instagram} alt='' w='24px' />
        <Image src={youtube} alt='' w='24px' />
      </Flex>

      <Box mt='24px' mb='32px'>
        <Center>
          <Image src={divider} alt='' w='128px' />
        </Center>
        <Box my='16px' textAlign='center'>
          <Text fontSize='md'>support@openui.design</Text>
          <Text fontSize='md'>+60 825 876</Text>
          <Text fontSize='md'>08:00 - 22:00 - Everyday</Text>
        </Box>
        <Center>
          <Image src={divider} alt='' w='128px' />
        </Center>
      </Box>

      <Flex gap='52px'>
        <Text fontSize='md'>About</Text>
        <Text fontSize='md'>Contact</Text>
        <Text fontSize='md'>Blog</Text>
      </Flex>

      <Center bg='grey.200' h='48px' w='100%' mt='24px'>
        <Text fontSize='xs'>Copyright© OpenUI All Rights Reserved.</Text>
      </Center>
    </Flex>
  )
}

export default Footer
