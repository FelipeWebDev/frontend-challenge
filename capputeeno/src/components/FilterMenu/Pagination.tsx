import { useState } from "react";
import { useFilter } from "@/hooks/useFilter"
import styled from "styled-components";
import PaginationIcon from "../Icons/PaginationIcon";
import { productAmount } from "@/utils/ProductAmount";

const PaginationWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: end;
  margin-top: 24px;

  > div {
    display: flex;
    gap: 2px;
  }

  button {
    border-radius: 8px;
    cursor: pointer;
    width: 32px;
    height: 32px;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const PaginationItem = styled.button<{
  isSelected?: boolean;
  index?: number;
  onClick: () => void;
}>`
  background-color: ${(props) =>
    props.isSelected ? "var(--shapes-light)" : "var(--shapes-light-2)"};
  color: ${(props) =>
    props.isSelected ? "var(--orange-low)" : "var(--text-dark)"};
  font-weight: ${(props) => (props.isSelected ? "600" : "400")};
  border: 1px solid ${(props) =>
    props.isSelected ? "var(--orange-low)" : "var(--shapes-light-2)"};
  transition-duration: 0.5s;
  transition-timing-function: linear;
`;

const PaginationArrow = styled.button<{
  index?: number;
  active?: boolean;
  onClick: () => void;
}>`
  background-color: var(--shapes-light-2);
  color: var(--text-dark);
  border: 1px solid var(--shapes-light-2);
  font-weight: 400;
  opacity: ${props => props.active ? "1" : "0.5"};
`;

const Pagination = () => {
  const {page, setPage} = useFilter();
  const [prevActive, setPrevActive] = useState(false);
  const [nextActive, setNextActive] = useState(true);

  const productQuantity = Number(productAmount());
  const itemsPerPage = 12;
  const allPages = Math.ceil(productQuantity / itemsPerPage);

  const handleSelect = (index: number) => {
    setPage(index);
    if (index === 0) {
      setPrevActive(false);
      setNextActive(true);
    } else if (index === allPages - 1) {
      setPrevActive(true);
      setNextActive(false);
    } else {
      setPrevActive(true);
      setNextActive(true);
    }
  };

  const handleNavigation = (direction: string) => {
    if (direction === "prev") {
      if (page > 0) {
        const newIndex = page - 1;
        handleSelect(newIndex);
        setPage(newIndex);
      }
    } else {
      if (page < allPages - 1) {
        const newIndex = page + 1;
        handleSelect(newIndex);
        setPage(newIndex);
      }
    }
  };

  const pagesToShow = [];
  for (let i = 0; i < allPages; i++) {
    pagesToShow.push(i);
  }

  return (
    <PaginationWrapper>
      <div>
      {pagesToShow.map((i) => (
        <PaginationItem
          key={i}
          onClick={() => handleSelect(i)}
          index={i}
          isSelected={page === i}
        >
          {i + 1}
        </PaginationItem>
      ))}
      </div>
      <div>
      <PaginationArrow
        onClick={() => handleNavigation("prev")}
        active={prevActive}
      >
        <PaginationIcon right={false} />
      </PaginationArrow>

      <PaginationArrow
        onClick={() => handleNavigation("next")}
        active={nextActive}
      >
        <PaginationIcon right />
      </PaginationArrow>
      </div>
    </PaginationWrapper>
  );
};

export default Pagination;
