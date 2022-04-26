import { BIO } from "../../assets/data/constants";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Container from "../../components/Container";
import cn from "classnames";
import { useParams } from "react-router-dom";

import s from "./Biography.module.scss";

const Biography = () => {
  const { id } = useParams();

  const content = BIO[id].map((item, i) => {
    let itemContent;

    const { type } = item;
    switch (type) {
      case type.match(/^[h][1-5]$/)?.input:
        itemContent = (
          <Heading
            level={+type[1]}
            black
            key={i}
            className={cn({ [s["lower-heading"]]: /^[h][2-5]$/.test(type) })}
          >
            {item.text}
          </Heading>
        );
        break;
      case "paragraph":
        itemContent = (
          <Text key={i} className={cn(s.text)} element="p">
            {item.text}
          </Text>
        );
        break;
      case "img":
        itemContent = (
          <img
            key={i}
            className={cn(s.img)}
            src={item.src}
            alt={`hero ${id}`}
          ></img>
        );
        break;
      default:
        return;
    }
    return itemContent;
  });

  return <Container className={cn(s.container)}>{content}</Container>;
};

export default Biography;
