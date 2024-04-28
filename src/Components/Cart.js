import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { cleareCart } from "../RKT/cartSlice";
import { removeItem } from "../RKT/cartSlice";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const clearehandle = () => {
        dispatch(cleareCart())
    };
    const removehandle = () => {
        dispatch(removeItem())
    }
    return (
        <>
            <div>
                <button className="btn btn-dark mt-4 me-5" onClick={clearehandle}>Cleare Cart</button>
                <button className="btn btn-danger mt-4 ms-5" onClick={removehandle}>Remove Items</button>
                <Itemlist items={cartItems} ></Itemlist>

            </div>

        </>
    )
}
export default Cart;