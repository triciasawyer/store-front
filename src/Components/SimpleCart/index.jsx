import { useDispatch, useSelector } from "react-redux";
import { When } from 'react-if';
import { removeFromCart } from '../../store/cart';
import { incrementInventoryOnRemove } from '../../store/products';
import './styles.scss';

function SimpleCart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const removeDispatcher = (product) => {
        dispatch(removeFromCart(product));
        dispatch(incrementInventoryOnRemove(product));
    }

    return (
        <>
            <When condition={cart.length > 0}>
                <div className="simple-cart">
                    <ul>
                        {
                            cart.map((product, index) => (
                                <li className="item" key={`simpleCart-${index}`}>
                                    {product.name}
                                    <span
                                        className="remove"
                                        onClick={() => removeDispatcher(product)}>X
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </When>
        </>
    )
}

export default SimpleCart;