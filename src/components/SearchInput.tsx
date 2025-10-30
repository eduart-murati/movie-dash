import { Input, InputGroup, Kbd } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <InputGroup
      flex="1"
      startElement={<LuSearch />}
      //   endElement={<Kbd>Ctrl+F</Kbd>}
    >
      <Input
        borderRadius="full"
        placeholder="Search Movies"
        variant={"outline"}
      />
    </InputGroup>
  );
};

export default SearchInput;
