import Container from "../Container";
import Heading from "../Heading";
import CharacterCard from "../CharacterCard";
import { useState } from "react";
import { CHARACTERS } from "../../assets/data/constants";
import s from "./CardsBlock.module.scss";

const CardsBlock = () => {
  const [characters, setCharacters] = useState(CHARACTERS);
  const onLikeClick = (id) => {
    setCharacters((chars) => {
      return chars.map((char) => {
        if (char.id === id)
          return {
            ...char,
            isLike: !char.isLike,
          };
        return char;
      });
    });
  };
  return (
    <Container className={s.root}>
      <div className={s.cardTitle}>
        <Heading level={1} black backline>
          Marvel Cards
        </Heading>
        <Heading level={2} black>
          Collect your best five
        </Heading>
      </div>
      <div className={s.cardWrap}>
        {characters.map((character) => {
          return (
            <div key={character.id}>
              <CharacterCard
                id={character.id}
                name={character.name}
                humanName={character.humanName}
                src={character.thumbnail.path}
                description={character.description}
                onLikeClick={onLikeClick}
                isLiked={character.isLike}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default CardsBlock;
