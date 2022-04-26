import CardsBlock from "../../components/CardsBlock";
import Container from "../../components/Container";
import s from "./Characters.module.scss";
const Characters = () => {
  return (
    <Container className={s.root}>
      <CardsBlock></CardsBlock>
    </Container>
  );
};
export default Characters;
