import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelctor = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "popularity.desc", label: "Popularity (Most Popular)" },
    { value: "vote_average.desc", label: "Rating (Highest Rated)" },
    {
      value: "primary_release_date.desc",
      label: "Release Date - Newest First",
    },
    { value: "primary_release_date.asc", label: "Release Date - Oldest First" },
    { value: "vote_count.desc", label: "Rating- Most Voted" },
    { value: "vote_count.asc", label: "Rating- Less Voted" },
    { value: "title.asc", label: "Title (A-Z)" },
    { value: "revenue.desc", label: "Revenue (Highest Grossing)" },
    { value: "revenue.asc", label: "Revenue (Lowest Grossing)" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button as={Button} size="sm">
          Order by: {currentSortOrder?.label || "Popularity (Most Popular)"}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item
                key={order.value}
                onClick={() => onSelectSortOrder(order.value)}
                value={order.value}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelctor;
