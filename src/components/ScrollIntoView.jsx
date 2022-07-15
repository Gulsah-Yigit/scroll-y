import { useEffect } from "react";

import "../styles/ScrollToView.css";

// Burayı geliştir
const ScrollIntoView = () => {
  useEffect(() => {
    const item = document.querySelector(".active");
    item.scrollIntoView({
      inline: "center",
      behavior: "smooth",
    });
  }, []);

  return (
    <nav className="scrollToView">
      <ul className="scroll-navbar">
        <li>
          <a href="#">Section 1</a>
        </li>
        <li>
          <a href="#">Section 2</a>
        </li>
        <li>
          <a href="#">Section 3</a>
        </li>
        <li className="active">
          <a href="#">Section 4</a>
        </li>
        <li>
          <a href="#">Section 5</a>
        </li>
      </ul>
    </nav>
  );
};

export default ScrollIntoView;
