
import cn from "classnames";
import LogoImg from "../../assets/png/logo.png";
import { ReactComponent as PenIcon } from "../../assets/svg/icon-pen.svg";
import { useRef, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import s from "./Login.module.scss";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [currentForm, setCurrentForm] = useState("sign in");

  const handleInput = (e) => {
    setState((pS) => ({
      ...pS,
      [e.target.name]: e.target.value,
    }));
  };

  const toggle = useRef(null);
  const close = useRef(null);
  const container = useRef(null);
  const toggleHandler = () => {
    if (currentForm === "sign in") {
      setState({
        email: "",
        password: "",
        repeatPassword: "",
      });
      toggle.current.classList.add(s.active);
      container.current.classList.add(s.active);
      setCurrentForm("sign up");
    }
  };

  const closeHandler = () => {
    if (currentForm === "sign up") {
      setState({
        email: "",
        password: "",
        repeatPassword: "",
      });
      toggle.current.classList.remove(s.active);
      container.current.classList.remove(s.active);
      setCurrentForm("sign in");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentForm === "sign up") {
      if (state.password === state.repeatPassword) console.log(state);
    } else console.log(state);
  };

  return (
    <>
      <div className={s["header-logo"]}>
        <img src={LogoImg} alt="Logo" />
      </div>
      <div ref={container} className={s.container}>
        <div className={s.card}></div>
        <div className={s.card}>
          <h1 className={s.title}>Login</h1>
          <form onChange={handleInput} onSubmit={handleSubmit}>
            <div className={s["input-container"]}>
              <Input
                value={state.email}
                type="email"
                id="#email"
                name="email"
                required="required"
              />
              <label htmlFor="#email">Email</label>
              <div className={s.bar}></div>
            </div>
            <div className={s["input-container"]}>
              <Input
                value={state.password}
                type="password"
                id="#password"
                name="password"
                required="required"
              />
              <label htmlFor="#password">Password</label>
              <div className={s.bar}></div>
            </div>
            <div className={s["button-container"]}>
              <Button>
                <span>Go</span>
              </Button>
            </div>
          </form>
        </div>
        <div className={cn(s.card, s.alt)}>
          <div ref={toggle} onClick={toggleHandler} className={s.toggle}>
            <PenIcon />
          </div>
          <h1 className={s.title}>
            Register
            <div ref={close} onClick={closeHandler} className={s.close}></div>
          </h1>
          <form onChange={handleInput} onSubmit={handleSubmit}>
            <div className={s["input-container"]}>
              <Input
                value={state.email}
                type="email"
                id="#signup-email"
                name="email"
                required="required"
              />
              <label htmlFor="#signup-email">Email</label>
              <div className={s.bar}></div>
            </div>
            <div className={s["input-container"]}>
              <Input
                value={state.password}
                type="password"
                id="#signup-password"
                name="password"
                required="required"
              />
              <label htmlFor="#signup-password">Password</label>
              <div className={s.bar}></div>
            </div>
            <div className={s["input-container"]}>
              <Input
                value={state.repeatPassword}
                type="password"
                id="#signup-repeat-password"
                name="repeatPassword"
                required="required"
              />
              <label htmlFor="#signup-repeat-password">Repeat Password</label>
              <div className={s.bar}></div>
            </div>
            <div className={s["button-container"]}>
              <Button>
                <span>Register</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
