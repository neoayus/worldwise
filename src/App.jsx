import {BrowserRouter, Routes, Route} from "react-router-dom";

import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from './pages/Login';

export default function App(){
  return(
    <>
      <BrowserRouter> 
        <Routes> 
          <Route index element={<Homepage/>} />
          <Route path="product" element={<Product/>} />
          <Route path="pricing" element={<Pricing/>} />
          <Route path="/login" element={<Login/>} />

          {/* nested route here! */}
          <Route path="app" element={<AppLayout/>}>
            <Route index path="cities" element={<p> List of Cities </p>}/>
            <Route path="countries" element={<p> Counteries </p>}/>
            <Route path="form" element={<p> Form </p>}/>
    
          </Route> 
          {/* if the url dosen't match anything from above  */}
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}