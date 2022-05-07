import Container from "../../components/Container";
import devImg from "../../assets/png/dev_img.jpg";
import s from "./Contacts.module.scss";
import Text from "../../components/Text";
const Contacts = () => {
  return (
    <Container className={s.root}>
      <img class={s["dev-img"]} src={devImg} alt="" />
      <Text>Привет, я Костя, а вот моя краткая история:</Text>
      <Text className={s.mainText}>
        Программированием начал заниматься пару лет назад +- серьёзно, спустя
        полгода решил попробовать фронт, и вот я здесь). На данный момент имеют
        год опыта коммерческой разработки. Мой текущий стэк: Vue, Nuxt, Vuex,
        React, ReactNative.
      </Text>
      <Text className={s.mainText}>
        Когда-то давно хотел получить диплом но что-то пошло не так, и хвала
        богам за это!
      </Text>
    </Container>
  );
};
export default Contacts;
