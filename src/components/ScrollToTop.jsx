import { useState, useEffect } from "react";

import { FaAngleDoubleUp } from "react-icons/fa";

import "../styles/ScrollToTop.css";

const ScrollToTop = ({ top }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowScrollButton(window.scrollY > 300);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  };

  return showScrollButton ? (
    <div className="icon-container">
      <FaAngleDoubleUp
        className="button-position button-style"
        onClick={scrollToTop}
      />
    </div>
  ) : null;
};

export default ScrollToTop;
