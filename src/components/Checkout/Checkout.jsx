import { useState, useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { db } from '../../services/firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import './Checkout.css'

const Checkout = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor complete todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        const orden = {
            items: carrito.map((camisetas) => ({
                id: camisetas.item.id,
                nombre: camisetas.item.nombre,
                cantidad: camisetas.cantidad,
            })),
            total: carrito.reduce((total, camisetas) => total + camisetas.item.precio * camisetas.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        };


        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch((error) => {
                console.error("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden, vuelva más tarde");
            })
    }

    return (
        <div className='checkout'>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                {carrito.map((camisetas) => (
                    <div key={camisetas.item.id}>
                        <p>
                            {camisetas.item.nombre} x {camisetas.cantidad}
                        </p>
                        <p>Precio $: {camisetas.item.precio} </p>
                        <hr />
                    </div>
                ))
                }
                <hr />
                <div className='input'>
                    <label htmlFor="" className='etiquetaInput'>Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className='input'>
                    <label htmlFor="" className='etiquetaInput'>Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className='input'>
                    <label htmlFor="" className='etiquetaInput'>Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className='input'>
                    <label htmlFor="" className='etiquetaInput'>Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='input'>
                    <label htmlFor="" className='etiquetaInput'>Email Confirmación</label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>
                {error && <p style={{ color: "red" }}> {error} </p>}
                <button type='submit' className='btnProducto'>Finalizar Compra</button>
            </form>
            {
                ordenId && (
                    <strong>¡Gracias por tu compra! Tu número de orden es {ordenId}. Nos pondremos en contacto para coordinar el envío. </strong>
                )
            }

        </div>
    )
}

export default Checkout