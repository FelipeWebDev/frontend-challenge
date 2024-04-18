import styled from "styled-components";
import BackIcon from "../Icons/BackIcon";
import { useRouter } from "next/navigation";

interface BackButtonProps {
    navigate: string
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  cursor: pointer;
  gap: 8px;
  background: transparent;

  span {
    color: var(--secondary-text);
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
  }
`;

const BackButton = ({navigate}: BackButtonProps) => {
    const router = useRouter();

    const handleNavigate = () => {
        router.push(navigate)
    }

  return (
    <Button onClick={handleNavigate}>
      <BackIcon />
      <span>Voltar</span>
    </Button>
  );
};

export default BackButton;