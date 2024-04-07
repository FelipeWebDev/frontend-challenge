import { styled } from "styled-components";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import CartIcon from "./CartIcon";

const CartContainer = styled.div`
    position: relative;
`

const CartCount = styled.span`
    position: absolute;
    right: -10px;
    top: -50%;
    background-color: var(--delete-color);
    border-radius: 50%;
    color: white;
    width: 17px;
    height: 17px;
`

const CartControl = () => {
    const { value } = useLocalStorage("cart-items")
    
    return (
        <CartContainer>
            <CartIcon />
            {value.length && <CartCount>{ value.length }</CartCount>}
        </CartContainer>
    )
}

export default CartControl;