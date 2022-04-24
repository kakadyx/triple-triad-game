import Container from "../Container";
import Heading from "../Heading";
import Button from "../Button";
import s from "./Slider.module.scss";

const Slider = () => {
  return (
    <section className={s.section}>
      <div className={s.slider}>
        <Container className={s.sliderContent}>
          <Heading className={s.header} level={1} backline>
            Wow
          </Heading>

          <Heading level={2} black className={s.subheader} backline>
            Wow.Wow.Wow
          </Heading>
          <div className={s.call}>
            <Button black>wow</Button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Slider;
