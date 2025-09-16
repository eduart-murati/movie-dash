import { HStack, Image,Text, Button } from '@chakra-ui/react'
import { useTheme } from "next-themes"  
import logo from '../../assets/logo-512.png'
import { FaMoon, FaSun } from 'react-icons/fa'

const NavBar = () => {

  const { theme, setTheme } = useTheme()  

  return (
    <HStack justifyContent="space-between"> 
        <Image src={logo} width='55px' height='40px' />
        <Text>NavBar</Text>
        <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </Button>
    </HStack>   
    
  )
}

export default NavBar