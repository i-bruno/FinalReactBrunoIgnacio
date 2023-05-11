import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({ camisetas }) => {
    return (
        <div className="contenedorProductos">
            {
                camisetas.map(prod => {
                    return <Item key={prod.id}  {...prod} />
                })
            }


        </div>

    )
}

export default ItemList