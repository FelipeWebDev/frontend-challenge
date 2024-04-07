"use client";

import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputWSearchIcon } from "./PrimaryInput"
import CartControl from "./CartControl";

interface HeaderProps {}

const sairaStencil = Saira_Stencil_One({
    weight: ["400"],
    subsets: ["latin"]
})

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
`;

const Logo = styled.a`
    color: var(--logo-color);
    font-size: 40px;
    line-height: 158%;
`

const Header = (props: HeaderProps) => {
  return (
    <TagHeader>
      <Logo href="/" className={sairaStencil.className}>
        capputeeno
      </Logo>
      <PrimaryInputWSearchIcon placeholder="Procurando por algo específico?" />
      <CartControl />
    </TagHeader>
  );
};

export default Header;
