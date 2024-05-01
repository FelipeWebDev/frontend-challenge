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
  gap: 32px;

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
  min-width: 325px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  gap: 30px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: none;

    li a {
      color: var(--text-dark);
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      text-transform: uppercase;
      text-decoration: underline;
    }
  }
`;

const TotalTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    color: var(--text-dark-2);
    text-transform: uppercase;
  }
`;

const TotalsContainer = styled.div`
  margin-top: 29px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Totals = styled.div<{ isBold: boolean }>`
    display: flex;
    justify-content: space-between;
    border-top: ${props => props.isBold ? 'solid 1px var(--shapes-2)' : 'none'};
    margin-top: ${props => props.isBold ? '12px' : '0'};
    padding-top: ${props => props.isBold ? '8px' : '0'};

    span {
      font-size: 16px;
      font-weight: ${props => props.isBold ? '600' : '400'};
      color: var(--text-dark-2);
      line-height: 24px;
    }
`

const CheckoutButton = styled.button`
  background-color: var(--others-green);
  color: var(--shapes-light);
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  mix-blend-mode: multiply;
  border-radius: 4px;
  padding: 8px 0;
  margin-top: 40px;
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

  const subtotal = calcTotal(value);
  const shipping = subtotal > 90000 ? 0 : 4000;
  const total = subtotal + shipping;

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
  };

  return (
    <DefaultPageLayout>
      <CartContainer>
        <CartListingContainer>
          <BackButton navigate="/" />
          <h3>seu carrinho</h3>
          <span>
            Total ({value.length} {value.length === 1 ? "produto" : "produtos"})
            <strong>{FormatPrice(subtotal)}</strong>
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
          <TotalTable>
            <h3>resumo do pedido</h3>
            <TotalsContainer>
              <Totals isBold={false}>
                <span>Subtotal de Produtos</span>
                <span>{FormatPrice(subtotal)}</span>
              </Totals>
              <Totals isBold={false}>
                <span>Entrega</span>
                <span>{FormatPrice(shipping)}</span>
              </Totals>
              <Totals isBold>
                <span>Total</span>
                <span>{FormatPrice(total)}</span>
              </Totals>
            </TotalsContainer>
            <CheckoutButton>finalizar compra</CheckoutButton>
          </TotalTable>
          <ul>
            <li>
              <a href="#">ajuda</a>
            </li>
            <li>
              <a href="#">reembolsos</a>
            </li>
            <li>
              <a href="#">entregas e frete</a>
            </li>
            <li>
              <a href="#">trocas e devoluções</a>
            </li>
          </ul>
        </OrderInfo>
      </CartContainer>
    </DefaultPageLayout>
  );
};

export default CartPage;
