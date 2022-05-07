import { BIO } from "../../assets/data/constants";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Container from "../../components/Container";
import cn from "classnames";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { ReactComponent as LinkIcon } from "../../assets/svg/link_icon.svg";
import s from "./Biography.module.scss";

const possibleHeadingLevels = ["h1", "h2", "h3", "h4", "h5"];
const Biography = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleGoBackClick = () => {
    navigate(-1);
  };
  if (!BIO[id]) {
    return <Navigate to="/characters" replace></Navigate>;
  }

  const handleLinkClick = (e) => {
    e.target.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };

  const content = BIO[id].map((item, i) => {
    let itemContent;

    const { type } = item;
    switch (type) {
      case possibleHeadingLevels.find((item) => item === type):
        itemContent = (
          <Heading
            id={item.text}
            level={+type[1]}
            black
            key={i}
            className={cn({ [s["lower-heading"]]: /^[h][2-5]$/.test(type) })}
          >
            {item.text}
            <LinkIcon
              onClick={handleLinkClick}
              className={s.linkIcon}
              key={item.text}
            />
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

  return (
    <Container className={cn(s.container)}>
      <div>
        <Button black handleClick={handleGoBackClick}>
          Go Back
        </Button>
      </div>
      {content}
    </Container>
  );
};

export default Biography;
