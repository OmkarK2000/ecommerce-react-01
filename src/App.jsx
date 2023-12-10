import Navbar from "./components/Navbar"
import "./App.css"
import { BrowserRouter, Routes, Route,  } from "react-router-dom"
import {Home,Products, About, Contact, Login, SignUp, Cart} from "./pages"     
import Footer from "./components/Footer"
import { useState } from "react"


const productList = [
  {
    name : "Campus Shoes",
    url : "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=70",
    category : "Shoes",
    seller : "Campus Ltd",
    price : 1000
  },
  {
    name : "Nikon Camera",
    url : "https://rukminim2.flixcart.com/image/312/312/k5o7r0w0/dslr-camera/z/h/4/z-50-z-50-nikon-original-imafzasjz33kaa8k.jpeg?q=70",
    category : "Electronics",
    seller : "Nikon Ltd",
    price : 50000
  },
  {
    name : "Hp Printer",
    url : "https://rukminim2.flixcart.com/image/612/612/xif0q/printer/x/l/e/-original-imagnuwegzdxxdmq.jpeg?q=70",
    category : "Electronics",
    seller : "HP",
    price : 5000
  },
  {
    name : "Hair Trimmer",
    url : "https://rukminim2.flixcart.com/image/612/612/xif0q/trimmer/g/q/x/0-5-10-mm-bt3302-15-stainless-steel-cordless-philips-original-imagt55jvw5gjxtv.jpeg?q=70",
    category : "Electronics",
    seller : "Philipse",
    price : 2000
  },
  {
    name : "Batman Action Figure",
    url : "https://rukminim2.flixcart.com/image/612/612/xif0q/action-figure/v/5/c/3-action-figure-limited-edition-bobblehead-batman-kyop-10-original-imagg9sxwvukznhq.jpeg?q=70 ",
    category : "Toys",
    seller : "DC",
    price : 500
  },
  {
    name : "Cycle",
    url : "https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/k/t/b/-original-imagrzvjjvvxvwa2.jpeg?q=70",
    category : "Vehical",
    seller : "Hero",
    price : 15000
  },
  {
    name : "Mens Jacket",
    url : "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/k/l/j/xl-no-jkt-wind-c-usp-full-black-plus91-original-imagtxyekzz5hp8c.jpeg?q=70",
    category : "Cloths",
    seller : "Flipkart",
    price : 2000
  },
  {
    name : "California Almonds",
    url : "https://rukminim2.flixcart.com/image/612/612/kwv0djk0/nut-dry-fruit/m/q/p/-original-imag9fusyd4kfaz7.jpeg?q=70",
    category : "Food",
    seller : "Ftc",
    price : 200
  },
]

const App = () => {
  
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState(productList)

  const addToCart = (product) => {
    setCart([...cart, {...product, quantity: 1}])
  }

  return (
    <>
      <BrowserRouter>
      <Navbar count={cart.length} />
        <Routes>  
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/products" element={<Products products={products} addToCart={addToCart} />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/signUp" element={<SignUp/> } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

