import { HStack, Switch, Text } from "@chakra-ui/react";

interface ColorModeSwitchProps {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}

const ColorModeSwitch = ({ theme, setTheme }: ColorModeSwitchProps) => {
  return (
    <HStack>
      <Switch.Root
        colorPalette="green"
        checked={theme === "dark"}
        onCheckedChange={(e) => setTheme(e.checked ? "dark" : "light")}
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label />
      </Switch.Root>

      <Text whiteSpace={"nowrap"}>
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
