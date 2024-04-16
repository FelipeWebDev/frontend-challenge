import styled from "styled-components";
import ArrowIcon from "./ArrowIcon";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityType } from "@/types/PriorityTypes";

interface FilterByPriorityProps {}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    color: var(--text-dark);
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-left: 16px;
    }
  }
`;

const PriorityFilter = styled.ul`
  position: absolute;
  width: 250px;
  background: #fff;
  box-shadow: 0 4px 12px  rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 16px;
  list-style: none;
  font-family: inherit;
  top: 100%;

  li {
    color: var(--text-dark);
    font-size: 14px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`;

const FilterByPriority = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { setPriority } = useFilter()

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleUpdatePriority = (value: PriorityType) => {
    setPriority(value);
    setIsOpen(false)
  }

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por
        <ArrowIcon />
      </button>
      {isOpen && 
        <PriorityFilter>
            <li onClick={() => handleUpdatePriority(PriorityType.NEWEST)}>Novidades</li>
            <li onClick={() => handleUpdatePriority(PriorityType.DECRESCENT)}>Preço: Maior - menor</li>
            <li onClick={() => handleUpdatePriority(PriorityType.CRESCENT)}>Preço: Menor - maior</li>
            <li onClick={() => handleUpdatePriority(PriorityType.POPULARITY)}>Mais vendidos</li>
        </PriorityFilter>
      }
    </FilterContainer>
  );
};

export default FilterByPriority;
