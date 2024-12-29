import React, { useState } from "react";
import "./assets/App.css";
import SideBar from "./SideBar";
import Information from "./Information";
import Center from "./Center";
import ListItem from "./ListItem";

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Home");

  return (
    <div className="container">
      <SideBar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <Information />
      {activeCategory === "Home" && <Center />}
      <ListItem />
    </div>
  );
};

export default App;
