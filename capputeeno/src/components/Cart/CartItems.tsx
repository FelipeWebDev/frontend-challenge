import styled from "styled-components";
import { ProductInCart } from "@/types/Product";
import DeleteIcon from "@/components/Icons/DeleteIcon";
import FormatPrice from "@/utils/FormatPrice";
import { ChangeEvent } from "react";

interface CartItemsProps {
  product: ProductInCart;
  handleUpdateQuantity: (id: string, quantity: number) => void;
  handleDelete: (id: string) => void;
}

const CartItem = styled.li`
  display: flex;
  gap: 7px;
  border-radius: 8px;
  background-color: white;
  width: 100%;
  position: relative;

  > button {
    background: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 24px;
    top: 16px;
  }

  > img {
    width: 256px;
    border-radius: 8px 0 0 8px;
    object-fit: cover;
  }

  > div {
    padding: 16px 24px;
    color: var(--text-dark-2);
    line-height: 150%;

    > h4 {
      font-size: 20px;
      font-weight: 300;
      /*line-height: 150%;*/
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    > p {
      margin: 12px 0;
      font-size: 12px;
      font-weight: 400;
      max-height: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    > div {
      margin-top: 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > select {
        border: 1px solid #a8a8b3;
        color: var(--text-dark);
        border-radius: 8px;
        padding: 8px 12px;
      }

      > strong {
        color: var(--shapes-dark);
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
      }
    }
  }
`;

const CartItems = ({
  product,
  handleUpdateQuantity,
  handleDelete,
}: CartItemsProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(product.id, Number(e.target.value));
  };

  return (
    <CartItem>
      <button onClick={() => handleDelete(product.id)} aria-label="Deletar">
        <DeleteIcon />
      </button>
      <img src={product.image_url} />
      <div>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div>
          <select
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <strong>{FormatPrice(product.price_in_cents)}</strong>
        </div>
      </div>
    </CartItem>
  );
};

export default CartItems;
