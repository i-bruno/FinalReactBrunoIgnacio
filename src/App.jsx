import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";

import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

import Titulares from "./components/Titulares/Titulares";
import Alternativas from "./components/Alternativas/Alternativas";
import Jardin from "./components/Jardin/Jardin";
import Nanque from "./components/Nanque/Nanque";
import Unisport from "./components/Unisport/Unisport";
import Topper from "./components/Topper/Topper";
import Penalty from "./components/Penalty/Penalty";
import Umbro from "./components/Umbro/Umbro";
import NewBalance from "./components/NewBalance/NewBalance";
import Luanvi from "./components/Luanvi/Luanvi";
import Mebal from "./components/Mebal/Mebal";
import Siqnia from "./components/Siqnia/Siqnia";
import Lotto from "./components/Lotto/Lotto";
import Nike from "./components/Nike/Nike";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/titulares" element={<Titulares />}/>
            <Route path="/alternativas" element={<Alternativas />}/>
            <Route path="/jardin" element={<Jardin />}/>
            <Route path="/nanque" element={<Nanque />}/>
            <Route path="/unisport" element={<Unisport />}/>
            <Route path="/topper" element={<Topper />}/>
            <Route path="/penalty" element={<Penalty />}/>
            <Route path="/umbro" element={<Umbro />}/>
            <Route path="/newbalance" element={<NewBalance />}/>
            <Route path="/luanvi" element={<Luanvi />}/>
            <Route path="/mebal" element={<Mebal />}/>
            <Route path="/siqnia" element={<Siqnia />}/>
            <Route path="/lotto" element={<Lotto />}/>
            <Route path="/nike" element={<Nike />}/>
            <Route path="/camisetas/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}   />
            <Route path="/checkout" element={<Checkout/>}   />
            <Route path="*" element={<h2>Sitio en Construcción</h2>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
