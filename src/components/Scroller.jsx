import { useRef } from "react";
import ScrollToTop from "../components/ScrollToTop";

import WebPage from "../pages/WebPage";

import "../styles/Scroller.css";

const Scroller = () => {
  const navbarRef = useRef();
  const serviceRef = useRef();
  const blogsRef = useRef();
  const contactsRef = useRef();
  const aboutRef = useRef();

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="Scroller">
      <ScrollToTop top={navbarRef?.current?.offsetTop ?? 0} />

      <ul ref={navbarRef} className="navigation-bar">
        <li
          onClick={() => scrollToSection(serviceRef)}
          className="link"
          ref={serviceRef}
        >
          Services
        </li>
        <li
          onClick={() => scrollToSection(blogsRef)}
          className="link"
          ref={blogsRef}
        >
          Blogs
        </li>
        <li
          onClick={() => scrollToSection(contactsRef)}
          className="link"
          ref={contactsRef}
        >
          Contact
        </li>
        <li
          onClick={() => scrollToSection(aboutRef)}
          className="link"
          ref={aboutRef}
        >
          About
        </li>
      </ul>

      <WebPage ref={serviceRef} className="services" title="Services" />
      <WebPage ref={blogsRef} className="blogs" title="Blogs" />
      <WebPage ref={contactsRef} className="contacts" title="Contact" />
      <WebPage ref={aboutRef} className="about" title="About" />
    </div>
  );
};

export default Scroller;
