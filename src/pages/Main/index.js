import s from "./Main.module.scss";
import Slider from "../../components/Slider";
import CardsBlock from "../../components/CardsBlock";
const Main = ({ onBioClick }) => {
  return (
    <>
      <Slider />
      <CardsBlock />
    </>
  );
};
export default Main;
