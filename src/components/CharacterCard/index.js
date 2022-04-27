import { ReactComponent as HeartIcon } from "../../assets/svg/heart.svg";
import PropTypes from "prop-types";
import Heading from "../Heading";
import Text from "../Text";
import cn from "classnames";
import s from "./CharacterCard.module.scss";

const CharacterCard = ({
  id,
  name,
  description,
  src,
  humanName,
  onLikeClick,
  isLiked,
  onBioClick,
}) => {
  const handleClick = () => {
    onLikeClick(id);
  };
  return (
    <div className={s.root}>
      <img src={src} alt={name} className={s.cardImage} />
      <div className={s.cardDetails}>
        <Heading black level={2} className={s.cardName}>
          {name}
        </Heading>
        <Heading level={3} className={s.cardHumanName}>
          {humanName}
        </Heading>
        <Text className={s.cardDescription}>{description}</Text>
        <div className={s.cardMeta}>
          <div
            onClick={handleClick}
            className={cn(s.like, { [s.active]: isLiked })}
          >
            <HeartIcon />
          </div>
          <div className={s.readBio}>
            <a href="#" onClick={() => onBioClick(id)}>
              Read bio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

CharacterCard.defaultProps = {
  isLiked: false,
};
CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.string,
  humanName: PropTypes.string,
  isLiked: PropTypes.bool,
  onLikeClick: PropTypes.func,
  onBioClick: PropTypes.func,
};

export default CharacterCard;
