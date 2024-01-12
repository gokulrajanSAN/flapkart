import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from './cartSlicer';

const Cart = () => {

    const cart = useSelector((state) => state.cart.item)

    const dispatch = useDispatch();
    return (
        <div>
            {cart}
            <button onClick={(e) => dispatch(removeFromCart(e.target.value))}>Delete from Cart</button>
        </div>
    )
}

export default Cart