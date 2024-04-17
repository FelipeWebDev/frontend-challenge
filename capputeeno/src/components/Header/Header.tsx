"use client";

import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputWSearchIcon } from "./PrimaryInput"
import CartControl from "./CartControl";
import { useFilter } from "@/hooks/useFilter";

interface HeaderProps {}

const sairaStencil = Saira_Stencil_One({
    weight: ["400"],
    subsets: ["latin"]
})

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 20px 160px;
  }
`;

const Logo = styled.a`
    color: var(--logo-color);
    line-height: 158%;
    font-size: 20px;

    @media (min-width: ${props => props.theme.tabletBreakpoint}) {
      font-size: 24px;
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
      font-size: 40px;
    }
`

const Header = (props: HeaderProps) => {
  const { search, setSearch } = useFilter();

  return (
    <TagHeader>
      <Logo href="/" className={sairaStencil.className}>
        capputeeno
      </Logo>
      <PrimaryInputWSearchIcon 
        value={search}
        handleChange={setSearch}
        placeholder="Procurando por algo específico?" />
      <CartControl />
    </TagHeader>
  );
};

export default Header;
