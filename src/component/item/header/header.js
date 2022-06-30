import React, { useState, useEffect } from "react";
import Navigation from "../navigation/navigation";
import "./header.css";

const Header = ({ animated }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { innerWidth: width, innerHeight: height } = window;
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active, setActive]);

  var color;
  if (animated) {
    if (height - scrollPosition < 300) {
      color = "header_animated";
    }
  } else {
    color = "header_colored";
  }

  return (
    <div className={"header " + color}>
      <Navigation />
    </div>
  );
};

export default Header;
