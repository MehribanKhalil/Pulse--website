
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Detail from "./pages/Detail";
import Wishlist from "./pages/Wishlist";
import Basket from "./pages/Basket";


const helmetContext = {};

function App() {

  return (
    <HelmetProvider context={helmetContext}>
 <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>} >
          <Route path="/" element={<Home/>}  />
          <Route path="/admin" element={<Admin/>}  />
          <Route path="/:id" element={<Detail/>}  />
          <Route path="/wishlist" element={<Wishlist/>}  />
          <Route path="/basket" element={<Basket/>}  />

        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
   
  )
}

export default App
