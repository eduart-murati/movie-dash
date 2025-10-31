import { HStack, Image, Button } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import logo from "../assets/logo-512.png";
import { FaMoon, FaSun } from "react-icons/fa";
// import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  searchText: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: (value: string) => void;
}

const NavBar = ({ searchText, onSearchChange, onSearchSubmit }: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <HStack justifyContent="space-between">
      <Image src={logo} width="55px" height="40px" />

      <SearchInput
        searchText={searchText}
        onSearchChange={onSearchChange}
        onSearchSubmit={onSearchSubmit}
      />

      <HStack gap="4">
        {/* <ColorModeSwitch theme={theme} setTheme={setTheme} /> */}
        <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </Button>
      </HStack>
    </HStack>
  );
};

export default NavBar;
