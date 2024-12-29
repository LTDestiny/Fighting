import "./assets/Information.css";
import Cash from "./assets/img/Cash.png";
import Bank from "./assets/img/Bank.png";
import Job from "./assets/img/Job.png";
import ShoppingBag from "./assets/img/ShoppingBag.png";

export default function Information() {
  return (
    <div className="container__information">
      <div className="information__cash">
        <img className="information__cashImg" src={Cash} alt="" />
        <div className="information__cashText">1.350.000</div>
      </div>
      <div className="information__bank">
        <img className="information__bankImg" src={Bank} alt="" />
        <div className="information__bankText">4.150.000</div>
      </div>
      <div className="information__job">
        <img className="information__jobImg" src={Job} alt="" />
        <div className="information__jobText">Unemployed</div>
      </div>
      <div className="information__cart">
        <img className="information__cartImg" src={ShoppingBag} alt="" />
        <div className="information__cartCircle">
          <div className="information__cartText">1</div>
        </div>
      </div>
    </div>
  );
}
