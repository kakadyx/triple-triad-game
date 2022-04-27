import logoPNG from "../../assets/png/logo.png";

import Container from "../Container";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import cn from "classnames";
import s from "./Header.module.scss";

const MENU = [
  { text: "Main", link: "#" },
  { text: "Characters", link: "characters" },
  { text: "Contacts", link: "contacts" },
  { text: "About", link: "about" },
];

const Header = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isSmall, setIsSmall] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateScrollHeight = () => {
      setScrollHeight(window.scrollY);
    };
    window.addEventListener("scroll", updateScrollHeight);
    return () => {
      window.removeEventListener("scroll", updateScrollHeight);
    };
  }, []);

  useEffect(() => {
    if (scrollHeight > 60) setIsSmall(true);
    else if (isSmall === true) setIsSmall(false);
  }, [isSmall, scrollHeight]);

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className={s.root}>
      <div className={cn(s.header, { [s.small]: isSmall })}>
        <Container>
          <div className={s.logo} onClick={handleLogoClick}>
            <img src={logoPNG} alt="" />
          </div>
          <ul className={s.nav}>
            {MENU.map((item, i) => (
              <li key={i}>
                <Link to={`/${item.link}`}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;
