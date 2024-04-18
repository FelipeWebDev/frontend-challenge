import styled from "styled-components";
import FormatPrice from "@/utils/FormatPrice";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  id: string;
}

const Card = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: rgb(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  margin-bottom: 24px;
  cursor: pointer;

  img {
    width: 256px;
    height: 300px;
    gap: 0px;
    opacity: 0px;
  }

  h3 {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
    color: var(--text-dark-2);
  }

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    text-align: left;
    color: var(--shapes-dark);
  }

  > div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 12px;

    > div {
      width: 228px;
      height: 1px;
      margin: 8px 0;
      background: var(--shapes);
    }
  }
`;

const ProductCard = (props: ProductCardProps) => {
  const price = FormatPrice(props.price);

  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/product?id=${props.id}`);
  };

  return (
    <Card onClick={handleNavigate}>
      <img src={props.image}></img>
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{price}</p>
      </div>
    </Card>
  );
};

export default ProductCard;
