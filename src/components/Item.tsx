import "./assets/Item.css";
import { useState } from "react";

export default function Item() {
  const [quantity, setQuantity] = useState(1);
  const [quantityState, setQuantityState] = useState(false);
  const [price, setPrice] = useState("$50000");

  const handleQuantityState = () => {
    setQuantityState(!quantityState);
    setPrice(quantity > 1 ? "$" + 5 * quantity : "$5");
  };

  const handleSubstract = () => {
    if (quantity === 1) {
      setQuantityState(!quantityState);
      setPrice("$5");
      return;
    }
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    setPrice(newQuantity > 1 ? "$" + 5 * newQuantity : "$5");
  };

  const handleAdd = () => {
    const newQuantity = quantity + 1;
    setPrice("$" + 5 * newQuantity);
    setQuantity(newQuantity);
  };

  return (
    <div className="item">
      <div className="item__img"></div>
      <div className="item__text">Sắt</div>
      <div className="rectangle"></div>
      <div className="favourite"></div>
      <div className="item__price">{price}</div>
      <div className="item__addToCart">
        {quantityState ? (
          <div className="quantity__manage">
            <button className="button__substract" onClick={handleSubstract}>
              -
            </button>
            <div className="quantity">{quantity}</div>
            <button className="button__add" onClick={handleAdd}>
              +
            </button>
          </div>
        ) : (
          <button className="item__button" onClick={handleQuantityState}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
