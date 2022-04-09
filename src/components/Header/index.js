import s from "./Header.module.css";

const MENU = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

const Header = () => {
  return (
    <header class={s.root}>
      <div class={s.header}>
        <div class={s.container}>
          <div class={s.logo}></div>
          <ul class={s.nav}>
            {MENU.map((item) => (
              <li>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
