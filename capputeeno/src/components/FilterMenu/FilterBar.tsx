import styled from 'styled-components';
import FilterByType from './FilterByType';
import FilterByPriority from './FilterByPriority';

interface FilterBarProps {

}

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
`

const FilterBar = (props: FilterBarProps) => {
    return (
        <FilterContainer>
            <FilterByType />
            <FilterByPriority/>
        </FilterContainer>
    )
}

export default FilterBar;