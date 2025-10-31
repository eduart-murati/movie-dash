import { Input, InputGroup, Kbd } from "@chakra-ui/react";
import { useRef } from "react";
import type { ChangeEvent } from "react";
import { LuSearch } from "react-icons/lu";

interface Props {
  searchText: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: (value: string) => void;
}

const SearchInput = ({ searchText, onSearchChange, onSearchSubmit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearchSubmit(ref.current.value);
      }}
      style={{ width: "100%" }}
    >
      <InputGroup
        flex="1"
        startElement={<LuSearch />}
        //   endElement={<Kbd>Ctrl+F</Kbd>}
      >
        <Input
          value={searchText ?? ""}
          ref={ref}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onSearchChange(e.target.value)
          }
          borderRadius="full"
          placeholder="Search Movies"
          variant={"outline"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
