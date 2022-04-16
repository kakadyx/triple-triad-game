
import logoPNG from '../../assets/png/logo.png'
import Container from "../Container";
import s from "./Header.module.css";

const MENU = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

const Header = () => {
  return (
    <header className={s.root}>
      <div className={s.header}>
        <Container>
          <div className={s.logo}><img src={logoPNG} alt="" /></div>
          <ul className={s.nav}>
            {MENU.map((item,i) => (
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
