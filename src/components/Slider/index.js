import s from "./Slider.module.css";

const Slider = () => {
  return (
    <section class={s.section}>
      <div class={s.slider}>
        <div class={`${s.container} ${s.sliderContent}`}>
          <h1 class={s.header}>Wow</h1>
          <h2 class={s.subheader}>Wow.Wow.Wow</h2>
          <div class={s.call}>
            <button class={s.button}>Wow</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
