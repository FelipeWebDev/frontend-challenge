import styled from "styled-components";
import FilterByType from "./FilterByType";
import FilterByPriority from "./FilterByPriority";
import Pagination from "./Pagination";

const FilterWrapper = styled.div`
    width: 100%;
`

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`;

const FilterBar = () => {
  return (
    <FilterWrapper>
      <FilterContainer>
        <FilterByType />
        <FilterByPriority />
      </FilterContainer>
      <Pagination />
    </FilterWrapper>
  );
};

export default FilterBar;
