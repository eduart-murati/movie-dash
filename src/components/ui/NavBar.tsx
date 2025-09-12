import { HStack, Image,Text } from '@chakra-ui/react'
import logo from '../../assets/logo-512.png'


const NavBar = () => {
  return (
    <HStack> 
        <Image src={logo} width='55px' height='40px' />
        <Text>NavBar</Text> 
    </HStack>   
    
  )
}

export default NavBar