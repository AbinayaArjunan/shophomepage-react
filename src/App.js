import './App.css';
import { data } from "./ProductData";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { SiShopify } from "react-icons/si";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
</style>;

function App() {

  const [cartValue, setcartValue] = useState(0);

  return (
    <div className="App">

      <div className="heading">
        <strong>
          <span>SHOP IN STYLE <SiShopify className='bag' /> </span>
          <b className="shop">
            &mdash; With this shop hompeage template &mdash;
          </b>
        </strong>
      </div>

      {/* //? mapping the data... */}

      {data.map((item, index) => (
        <Shopstyle
          key={index}
          index={index}
          cartValue={cartValue}
          setcartValue={setcartValue}
          img_size={item.img_size}
          sale_badge={item.sale_badge}
          product_name={item.product_name}
          product_rating={item.product_rating}
          product_price={item.product_price}
          current_price={item.current_price}
          button_value={item.button_value}
        />
      ))}

      <div className="footer">Copyrights © Your Website 2023</div>

    </div>
  );
}

export default App;



//functional component

export function Shopstyle({
  index,
  cartValue,
  setcartValue,
  img_size,
  sale_badge,
  product_name,
  product_rating,
  product_price,
  current_price,
  button_value,
}) {
  

  const [view_options, Setview_options] = useState(true);


  const show_cards = () => {
    Setview_options(!view_options);
  };

  

  function addCart() {
    setcartValue(cartValue + 1);
  }
  

  function removeCart() {
    setcartValue(cartValue - 1);
    show_cards();
  }

  
  return (
    <div className="container">

      <span className="cart ">
        <FaCartPlus className="cart-icon" /><span className="count">{cartValue}</span>
      </span>

      <div className="cards ">
        <div className="img-area">
          <img src={img_size} className="img-size" alt="404" />
          <span className="sale">{sale_badge}</span>
        </div>
        <hr></hr>


        <div className="content">
          {view_options ? (<h2 className="product-name">{product_name}</h2>) : ("")}
          {view_options ? (<b className="product-rating">{product_rating}</b>) : ("")}
          {view_options ? (<h5 className="product-price">{product_price} {current_price} </h5>) : ("")}
        </div>

        <button type="button" className="custom-btn btn" onClick={() => { show_cards(addCart()) }}>
          <span className="add-btn">
            {view_options ? (button_value) : (<option disabled className="disable-btn">Disabled</option>)}
          </span>
        </button>

        <button
          type="button"
          className="custom-btn btn remove-btn"
          style={{ display: view_options ? "none" : "block" }}
          onClick={() => removeCart()}>
          <span className="remove">{view_options ? "" : "⛔ Remove Cart"}</span>
        </button>

      </div>

      
    </div>
  );
}