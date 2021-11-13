import React, { useState } from "react";
// import reactDom from "react-dom";
import "./Shop.css";
import redcoat from "../Assets/products/redcoat.jpg"
import jegging from "../Assets/products/jegging.jpg"
import shirt from "../Assets/products/shirt.jpg"
import shirt3 from "../Assets/products/shirt3.jpg"
import redress from "../Assets/products/redress.jpg"
import dress from "../Assets/products/dress.jpg"
import HIPhop from "../Assets/products/HIPhop.jpg"
import { Link } from "react-router-dom";
import cart from "../Assets/images/kitenge/cart.jpg";


const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function Shop() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("PAGE_PRODUCTS");
  const [products] = useState([
    
    {
      
      id: 1,
      name: "shirt",
      image: redcoat,
      price: 5900,
    },

    {
    id: 2,
    name: "shirt",
    image: jegging,
    price: 8400,
  },

  {
    id: 3,
    name: "shirt",
    image: shirt,
    price: 7000,
  },

    {
      id: 4,
      name: "Shirt101",
      image: shirt3,
      price: 3400,
    },

    {
      id: 5,
      name: "Kitenge1 ",
      image: redress,
      price: 1850,
    },
    {
      id: 6,
      name: "kitenge2",
      image: HIPhop,
      price: 2000,
    },
    {
      id: 7,
      name: "KitengeDesign",
      image: dress,
      price: 5900,
    },
    
  ]);

  const addToCart = (products) => {
    console.log("we are in addToCart");
    setCart([...cart, {...products}]);
  };
const removeFromCart = (productToRemove) =>{
setCart(cart.filter(product => product !== productToRemove))
}
  const navigateTo = (nextPage) =>{
      setPage(nextPage);
  }
  const renderProducts = () => (
      <div className="allProducts"><h1 className="Pro-title">All Products</h1>
          {products.map((product, idx) => (
            <div className="ProductArea" key={idx}>
              <img className="small" src={product.image} alt={product.name} />
              <div><h3>{product.name}</h3>
              <h3>${product.price}</h3>
              <button className="click" onClick={() => addToCart(product)}>
                Add to cart
              </button></div>
            </div>
          ))}
          </div>
  );

// const itemsPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);
  const renderCart = () => {
    console.log(cart);
    return(
      <div><h1>Cart</h1>
      {cart.length === 0 && <div className="Empty"><h4>Your cart is empty</h4></div>}
         {cart?.map((product, idx) => (
          <div className="CartArea" key={idx}>
             <h3>{product.product}</h3>
             <h3>{product.price}</h3>
            <img src={product.image} alt={product.name} />
           <button className="InCart" onClick={() => removeFromCart(product)}>
             Remove
            </button>
          </div>
        ))}
        </div>
    )
  };
          return (
            <div>
              <header>
                <button className="gocart" onClick ={() => navigateTo(PAGE_CART)}>(<img className="cart" src={cart} alt="cart" />{cart.length})</button>
                <button className="goproducts" onClick ={() => navigateTo(PAGE_PRODUCTS)}>VIEW Products</button>
              </header>
              {page === PAGE_PRODUCTS && renderProducts()};
              {page === PAGE_CART && renderCart()}
              </div>
  );
}

export default Shop;
