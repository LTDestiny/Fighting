import "./assets/Categories.css";

interface CategoriesProps {
  clicked: string;
  imgName: string;
  text: string;
  onClick: () => void;
}

export default function Categories({
  clicked,
  imgName,
  text,
  onClick,
}: CategoriesProps) {
  return (
    <>
      <div
        onClick={onClick}
        className={`option sidebar__menu${text} ${
          clicked === text ? "sidebar__menuClicked" : ""
        }`}
      >
        {clicked === text && <div className="sidebar__menuRectangle"></div>}
        <img className="sidebar__menuHomeImg" src={imgName} alt="" />
        <div className="sidebar__menuHomeText">{text}</div>
      </div>
    </>
  );
}
