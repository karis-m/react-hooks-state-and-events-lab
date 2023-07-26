import React, {useState} from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(true)
  const itemClass = addToCart ? "in-cart" : ""
  function handleClick(){
    if(addToCart === false){
      setAddToCart(true)
    }
    else{
      setAddToCart(false)
    } 
    
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={itemClass} onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
