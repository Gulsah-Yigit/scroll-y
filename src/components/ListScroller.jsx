import { memo } from "react";
import "../styles/ListScroller.css";

const bigList = new Array(100).fill(0);

const handleButtonClick = (event) => {
  const liste = document.getElementById("liste");
  const { offsetHeight, scrollTop } = liste;

  liste.scrollTo({
    behavior: "smooth",
    top:
      event.target.name === "up"
        ? scrollTop - offsetHeight
        : scrollTop + offsetHeight,
  });
};

const ListScroller = () => (
  <div className="ListScroller">
    <div id="liste" className="liste">
      {bigList.map((_, index) => (
        <div className="item" key={index}>
          <h4 className="item-text"> {index}</h4>
        </div>
      ))}
    </div>

    <br />
    <button name="up" onClick={handleButtonClick}>
      Up
    </button>
    <button name="down" onClick={handleButtonClick}>
      Down
    </button>
  </div>
);

export default memo(ListScroller);
