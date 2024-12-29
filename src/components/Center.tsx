import Homepage from "./assets/img/Homepage.png";
import "./assets/Center.css";

export default function Center() {
  return (
    <div className="container__center">
      <div className="container__center__header">
        <span className="text__one">SUPER </span>
        <span className="text__two">MARKET</span>
      </div>
      <img className="container__center__img" src={Homepage} alt="" />
      <div className="container__center__text">STORE</div>
      <button className="container__center__button">Xem Thị Trường</button>
      <div className="container__center__rectangle"></div>
    </div>
  );
}
