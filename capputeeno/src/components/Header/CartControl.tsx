import { styled } from "styled-components";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import CartIcon from "./CartIcon";

const CartContainer = styled.div`
    position: relative;
`

const CartCount = styled.span`
    position: absolute;
    right: -10px;
    top: 60%;
    background-color: var(--delete-color);
    border-radius: 50%;
    color: white;
    width: 17px;
    height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
`

const CartControl = () => {
    const { value } = useLocalStorage("cart-items", [])
    
    return (
        <CartContainer>
            <CartIcon />
            {value.length > 0 && <CartCount>{ value.length }</CartCount>}
        </CartContainer>
    )
}

export default CartControl;