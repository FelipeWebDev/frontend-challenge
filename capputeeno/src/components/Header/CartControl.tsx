import { styled } from "styled-components";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import CartIcon from "../Icons/CartIcon";
import { useRouter } from "next/navigation";

const CartContainer = styled.div`
    position: relative;
`

const CartButton = styled.button`
    cursor: pointer;
    border: none;
    background: transparent;
`

const CartCount = styled.span`
    position: absolute;
    right: -10px;
    top: 50%;
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
    const { value } = useLocalStorage("cart-items", []);

    const router = useRouter();

    const handleNavigate = () => {
        router.push("/cart");
    } 
    
    return (
        <CartContainer>
            <CartButton onClick={handleNavigate}>
                <CartIcon />
                {value.length > 0 && <CartCount>{ value.length }</CartCount>}
            </CartButton>
        </CartContainer>
    )
}

export default CartControl;