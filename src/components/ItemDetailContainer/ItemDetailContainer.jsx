import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/config";
import { getDoc, doc} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [camisetas, setCamisetas] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const nuevoDoc = doc(db, "camisetas", id);

        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data();
                const nuevoCamiseta = { id: res.id, ...data }
                setCamisetas(nuevoCamiseta);
            })
            .catch(error => console.log(error))

    }, [id])

    return (
        <div>
            <ItemDetail {...camisetas} />
        </div>
    )
}

export default ItemDetailContainer