import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItem = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div>
            <h1>This is Cart page</h1>
            <button onClick={handleClearCart} className="border p-1 rounded-md bg-black text-white" >Clear Cart</button>
            {cartItem.length == 0 && (<h1>Cart is empty. Add Items to the Cart!</h1>)}
            <ItemList items={cartItem} />
        </div>
    )
}

export default Cart