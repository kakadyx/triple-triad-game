import Container from "../Container";
import Text from "../Text";
import cn from "classnames";
import s from "./TextBlock.module.css";

const TextBlock = () => {
  return (
    <Container className={s.root}>
      <Text>Default</Text>
      <Text element="p" className={cn(s.text)}>
        Classname
      </Text>
      <Text element="span" strong>
        Strong
      </Text>
      <Text italic>Italic</Text>
      <Text disabled>Disabled</Text>
    </Container>
  );
};

export default TextBlock;
