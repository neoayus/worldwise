import {BrowserRouter, Routes, Route} from "react-router-dom";

import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";

export default function App(){
  return(
    <>
      <h2>this that React Router!</h2>
      <BrowserRouter> 
        <Routes> 
          <Route path="/" element={<Homepage/>} />
          <Route path="product" element={<Product/>} />
          <Route path="pricing" element={<Pricing/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}