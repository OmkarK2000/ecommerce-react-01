import './Products.css'

const Products = ({ products, addToCart }) => {
  return (
    <div className="productContainer">
      {
        products.map((product, index) => (
          <div key={index} className='productItem'>
            <div className='productImgContainer'>
              <img src={product.url} alt="" />
            </div>
            <p>{product.name}</p>
            <p>{product.seller}</p>
            <div className='flex'><p>RS  {product.price} /-  </p> <button onClick={()=> addToCart(product)}>Add To Cart</button></div>
          </div>
        ))
      }

    </div>
  )
}

export default Products