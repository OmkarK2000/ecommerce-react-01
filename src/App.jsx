import Navbar from "./components/Navbar"
import "./App.css"
import { BrowserRouter, Routes, Route,  } from "react-router-dom"
import {Home,Products, About, Contact} from "./pages"

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>  
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/products" element={<Products/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Products/>} />
          <Route path="/cart" element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

