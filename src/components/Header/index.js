import logoPNG from "../../assets/png/logo.png";
import Container from "../Container";
import { useEffect } from "react";
import { useState } from "react";
import cn from "classnames";
import s from "./Header.module.scss";

const MENU = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

const Header = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isSmall, setIsSmall] = useState(false);

  const updateScrollHeight = () => {
    setScrollHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollHeight);
    return () => {
      window.removeEventListener("scroll", updateScrollHeight);
    };
  });

  useEffect(() => {
    if (scrollHeight > 60) setIsSmall(true);
    else if (isSmall === true) setIsSmall(false);
  }, [isSmall, scrollHeight]);

  return (
    <header className={s.root}>
      <div className={cn(s.header, { [s.small]: isSmall })}>
        <Container>
          <div className={s.logo}>
            <img src={logoPNG} alt="" />
          </div>
          <ul className={s.nav}>
            {MENU.map((item, i) => (
              <li key={i}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;
