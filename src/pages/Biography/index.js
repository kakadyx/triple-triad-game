import { BIO } from "../../assets/data/constants";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Container from "../../components/Container";
import cn from "classnames";
import {
  Navigate,
  useParams,
  useNavigate,
  useLocation,
	Link
} from "react-router-dom";
import Button from "../../components/Button";
import { ReactComponent as LinkIcon } from "../../assets/svg/link_icon.svg";
import s from "./Biography.module.scss";
import { useEffect } from "react";
const possibleHeadingLevels = ["h1", "h2", "h3", "h4", "h5"];
const Biography = () => {
  const { id } = useParams();
  const { pathname, hash, key } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const hashId = hash.replace("#", "");

        const element = document.getElementById(hashId);
        console.log(element);
        if (element) {
          smoothScroll(element);
        }
      }, 1000);
    }
  }, [pathname, hash, key]);
  const handleGoBackClick = () => {
    navigate(-1);
  };
  if (!BIO[id]) {
    return <Navigate to="/characters" replace></Navigate>;
  }

  const smoothScroll = (e) => {
    e.scrollIntoView({
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
            level={+type[1]}
            id={item.text}
            black
            key={i}
            className={cn({ [s["lower-heading"]]: /^[h][2-5]$/.test(type) })}
          >
            {item.text}
            <Link
              to={"#" + item.text.replaceAll(" ", "")}
              onClick={(e) => {

                smoothScroll(e.target);
              }}
              id={item.text.replaceAll(" ", "")}
              key={item.text}
            >
              <LinkIcon className={s.linkIcon} />
            </Link>
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
