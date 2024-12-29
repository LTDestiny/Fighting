import Logo from "./assets/img/Logo.png";
import Logout from "./assets/img/Logout.png";
import Categories from "./Categories";
import Home from "./assets/img/Home.png";
import General from "./assets/img/General.png";
import Food from "./assets/img/Food.png";
import Drink from "./assets/img/Drink.png";
import Tool from "./assets/img/Tool.png";
import Health from "./assets/img/Health.png";
import "./assets/SideBar.css";

interface SideBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function SideBar({
  activeCategory,
  onCategoryChange,
}: SideBarProps) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img className="logo" src={Logo} alt="" />
        <div className="sidebar__storeName">STORE</div>
      </div>
      <div className="sidebar__menu">
        <Categories
          clicked={activeCategory}
          imgName={Home}
          text="Home"
          onClick={() => onCategoryChange("Home")}
        />
        <Categories
          clicked={activeCategory}
          imgName={General}
          text="General"
          onClick={() => onCategoryChange("General")}
        />
        <Categories
          clicked={activeCategory}
          imgName={Food}
          text="Food"
          onClick={() => onCategoryChange("Food")}
        />
        <Categories
          clicked={activeCategory}
          imgName={Drink}
          text="Drink"
          onClick={() => onCategoryChange("Drink")}
        />
        <Categories
          clicked={activeCategory}
          imgName={Tool}
          text="Tool"
          onClick={() => onCategoryChange("Tool")}
        />
        <Categories
          clicked={activeCategory}
          imgName={Health}
          text="Health"
          onClick={() => onCategoryChange("Health")}
        />
      </div>
      <div className="sidebar__footer">
        <img src={Logout} alt="" />
        <div className="sidebar__footerLogout">Exit</div>
      </div>
    </div>
  );
}
