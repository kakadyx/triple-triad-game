
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import s from "./NoHeader.module.scss";

const NoHeader = () => {
  return (
    <div className={s.root}>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};
export default NoHeader;
