import './CartItem.css';

const CartItem = ({ item, cantidad }) => {
    
    return (
        <div className="cartItem">
            <div>
                <h4> 
                    {item.nombre} 
                </h4>
            </div>
            <div>
            <p>
                Cantidad: {cantidad} 
            </p>
            <p>
                Precio: $ {item.precio} 
            </p>
            </div>

        </div>
    )
}

export default CartItem