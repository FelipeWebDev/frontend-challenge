"use client";

import { styled } from "styled-components";
import SearchIcon from "../Icons/SearchIcon";
import { InputHTMLAttributes } from "react";

const PrimaryInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  background-color: var(--bg-secondary);
  padding: 9px 16px;
  color: var(--text-dark);
  font-family: inherit;
  font-style: noraml;
  font-weight: 400px;
  font-size: 12px;
  line-height: 20px;

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 14px;
    line-height: 22px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 250px;
  svg {
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    width: 325px;
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export const PrimaryInputWSearchIcon = (props: InputProps) => {
  return (
    <InputContainer>
      <PrimaryInput
        onChange={(e) => props.handleChange(e.target.value)}
        {...props}
      />
      <SearchIcon />
    </InputContainer>
  );
};
