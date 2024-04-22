"use client";

import { DefaultPageLayout } from "@/components/Commons/DefaultPageLayout";
import styled from "styled-components";
import BackButton from "@/components/Commons/BackButton";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/Product";
import FormatPrice from "@/utils/FormatPrice";
import CartItem from "@/components/Cart/CartItems";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    flex-direction: row;
  }
`;

const CartListingContainer = styled.div`
  > h3 {
    text-transform: uppercase;
    margin-top: 22px;
    color: var(--text-dark-2);
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
  }

  > span {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--text-dark-2);
  }
`;

const CartListing = styled.ul`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
`;

const OrderInfo = styled.div`
  margin-top: 16px;
  padding: 16px 24px;
  background-color: white;

  > h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    color: var(--text-dark-2);
    text-transform: uppercase;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

const CartPage = () => {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    "cart-items",
    []
  );

  const calcTotal = (value: ProductInCart[]) => {
    return value.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0
    );
  };

  const totals = calcTotal(value);
  const shipping = totals > 90000 ? 0 : 4000;

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map((item) => {
      if (item.id !== id) return item;
      return { ...item, quantity: quantity };
    });
    updateLocalStorage(newValue);
  };

  const deleteItem = (id: string) => {
    const newValue = value.filter((item) => {
        if (item.id !== id) return item;
      });
      updateLocalStorage(newValue);
  }

  return (
    <DefaultPageLayout>
      <CartContainer>
        <CartListingContainer>
          <BackButton navigate="/product" />
          <h3>seu carrinho</h3>
          <span>
            Total ({value.length} {value.length === 1 ? "produto" : "produtos"}){" "}
            <strong>{FormatPrice(totals)}</strong>
          </span>
          <CartListing>
            {value.map((item) => (
              <CartItem
                handleUpdateQuantity={handleUpdateQuantity}
                handleDelete={deleteItem}
                product={item}
                key={item.id}
              ></CartItem>
            ))}
          </CartListing>
        </CartListingContainer>
        <OrderInfo>
          <h3>resumo do pedido</h3>
          <table>
            <tr>
              <td>
                <span>Subtotal de produtos:</span>
              </td>
              <td>
                <span>{FormatPrice(totals)}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Entrega:</span>
              </td>
              <td>
                <span>{FormatPrice(shipping)}</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Total:</strong>
              </td>
              <td>
                <strong>{FormatPrice(totals + shipping)}</strong>
              </td>
            </tr>
          </table>
        </OrderInfo>
      </CartContainer>
    </DefaultPageLayout>
  );
};

export default CartPage;
