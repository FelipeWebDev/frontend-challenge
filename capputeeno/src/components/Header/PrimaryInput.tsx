"use client";

import { styled } from "styled-components";
import SearchIcon from "./SearchIcon";
import { InputHTMLAttributes } from "react";

const PrimaryInput = styled.input`
  width: 352px;
  border-radius: 8px;
  border: none;
  background-color: var(--bg-secondary);
  padding: 9px 16px;
  color: var(--text-dark);
  font-family: inherit;
  font-style: noraml;
  font-weight: 400px;
  font-size: 14px;
  line-height: 22px;
`;

const InputContainer = styled.div`
    position: relative;
    width: 325px;
    svg {
        position: absolute;
        right: 4px;
        top: 50%;
        transform: translateY(-50%);
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const PrimaryInputWSearchIcon = (props: InputProps) => {
    return (
        <InputContainer>
            <PrimaryInput {...props} />
            <SearchIcon />
        </InputContainer>
    )
}
