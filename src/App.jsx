import {BrowserRouter, Routes, Route} from "react-router-dom";

import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import PageNav from "./components/PageNav";

export default function App(){
  return(
    <>
      <BrowserRouter> 
        <PageNav /> 
        <Routes> 
          <Route path="/" element={<Homepage/>} />
          <Route path="product" element={<Product/>} />
          <Route path="pricing" element={<Pricing/>} />
          {/* if the url dosen't match anything from above  */}
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}