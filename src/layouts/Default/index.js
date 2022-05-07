import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

import s from "./Default.module.scss";

const Default = () => {
  return (
    <div className={s.root}>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};
export default Default;
