"use client";

import { DefaultPageLayout } from "@/components/Commons/DefaultPageLayout";
import styled from "styled-components";
import BackButton from "@/components/Commons/BackButton";
import { useProductRequest } from "@/hooks/useProductRequest";
import FormatPrice from "@/utils/FormatPrice";
import CartIcon from "@/components/Icons/CartIcon";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ProductDisplay = styled.section`
  margin-top: 22px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  > img {
    max-width: 640px;
    width: 100%;
    border-radius: 4px;
  }

  @media (min-width: ${(props) => props.theme.tabletBreakpoint}) {
    flex-direction: row;

    img {
      width: 50%;
    }
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    > span {
      color: var(--text-dark-2);
      text-transform: capitalize;
    }

    > h2 {
      color: var(--text-dark-2);
      font-weight: 300;
      margin-top: 12px;

      @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
        font-size: 32px;
        line-height: 48px;
      }
    }

    > strong {
      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
      color: var(--shapes-dark);
    }

    > p {
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: var(--text-dark-2);
      margin-top: 24px;
    }

    > h3 {
      margin-top: 58px;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: var(--text-dark);
      text-transform: uppercase;
    }

    > p:nth-of-type(2) {
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      color: var(--text-dark-2);
      margin-top: 8px;
      min-height: 130px;
    }
  }

  > button {
    background: var(--brand-blue);
    color: var(--shapes-light);
    mix-blend-mode: multiply;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    padding: 10px;
    gap: 12px;
    width: 100%;

    svg path {
      stroke: var(--shapes-light);
    }
  }
`;

const ProductPage = ({ searchParams }: { searchParams: { id: string } }) => {
  const { data } = useProductRequest(searchParams.id);

  const category = () => {
    if (data?.category === "mugs") return "Canecas";
    if (data?.category === "t-shirts") return "Camisetas";
    return "";
  };

  const handleAddToCart = () => {
    let cartItems = localStorage.getItem("cart-items");

    if (cartItems) {
      const arrayItems = JSON.parse(cartItems);
      let existingProductsIndex = arrayItems.findIndex(
        (item: { id: string }) => item.id === searchParams.id
      );

      if (existingProductsIndex != -1) {
        arrayItems[existingProductsIndex].quantity += 1;
      } else {
        arrayItems.push({ ...data, id: searchParams.id, quantity: 1 });
      }

      localStorage.setItem("cart-items", JSON.stringify(arrayItems));
    } else {
      const newCart = JSON.stringify([
        {
          ...data,
          id: searchParams.id,
          quantity: 1,
        },
      ]);

      localStorage.setItem("cart-items", newCart);
    }
  };

  return (
    <DefaultPageLayout>
      <ProductContainer>
        <BackButton navigate="/" />
        <ProductDisplay>
          <img src={data?.image_url} />
          <ProductInfo>
            <div>
              <span>{category()}</span>
              <h2>{data?.name}</h2>
              <strong>{FormatPrice(data?.price_in_cents ?? 0)}</strong>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>
              <h3>descrição</h3>
              <p>{data?.description}</p>
            </div>
            <button onClick={handleAddToCart}>
              <CartIcon />
              adicionar ao carrinho
            </button>
          </ProductInfo>
        </ProductDisplay>
      </ProductContainer>
    </DefaultPageLayout>
  );
};

export default ProductPage;
