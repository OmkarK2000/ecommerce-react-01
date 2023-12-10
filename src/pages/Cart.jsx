import { useEffect, useState } from "react"


const Cart = ({cart}) => {

  const [newCart, setNewCart] = useState([])

  useEffect(()=>{
    setNewCart(cart)
  },[cart])

  return (
    <div>
      {
        newCart.map((item, index)=>(
          <div key={index} >
            <img src={item.url} width={40} />
            <span> {item.name} </span>
            <button onClick={()=>{
              const _newCart = newCart.map((newItem, newIndex)=>{
                return index === newIndex ? { ...newItem, quantity : newItem.quantity > 0 ? newItem.quantity - 1 : 0} : newItem;
              })
              setNewCart(_newCart)
            }}> - </button>
            <span> {item.quantity} </span>
            <button onClick={()=> {
              const _newCart = newCart.map((newItem, newIndex)=>{
                return index === newIndex ? {...newItem, quantity : newItem.quantity + 1} : newItem
              })
              setNewCart(_newCart)
            }}> + </button>
            <span> {item.price * item.quantity}/- </span>
          </div>
        ))
      }
      {
        newCart.map(item=> item.price * item.quantity).reduce((total, value)=> total + value, 0)
      }
    </div>
  )
}

export default Cart