import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/FilterTypes";
import styled from "styled-components";

interface FilterItemProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  list-style: none;
`;

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  font-weight: ${(props) => (props.selected ? "600" : "400")};
  color: ${(props) => (props.selected ? "#41414D;" : "var(--text-dark)")};
  border-bottom: ${(props) =>
    props.selected ? "solid 4px var(--orange-low)" : "none"};

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const FilterByType = () => {
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterType) => {
    setType(value);
  };

  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
      >
        todos os produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handleChangeType(FilterType.SHIRT)}
      >
        camisetas
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}
      >
        canecas
      </FilterItem>
    </FilterList>
  );
};

export default FilterByType;
