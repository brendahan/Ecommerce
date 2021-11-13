import React from 'react'


const PAGE_CART = "cart";
const PAGE_PRODUCTS = "products";

function Cart() {
  // const [cart, setCart] = useState([]);
  // const [page, setPage] = useState("PAGE_CART");
    
  const renderCart = () => {
    console.log(cart)
  }
  const removeFromCart = (productToRemove) =>{
    setCart(cart.filter(product => product !== productToRemove))
    }
    const navigateTo = (nextPage) =>{
      setPage(nextPage);
  }

    return (
        <div><h1>Cart</h1>
        {cart?.map((product, idx) => (
          <div className="CartArea" key={idx}>
            <h3>{product.product}</h3>
            <h3>{product.price}</h3>
            <img src={product.image} alt={product.name} />
            <button className="InCart" onClick={() => removeFromCart(product)}>
            Remove
            </button>
            <button className="goproducts" onClick ={() => navigateTo(PAGE_PRODUCTS)}>VIEW Products</button>

            {page === PAGE_CART && renderCart()}; 
          </div>
        ))}
        </div>
    )
        }

export default Cart
