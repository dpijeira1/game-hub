import { Button, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card border={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {game.parent_platforms.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))}
        <Button name="myButton">ThisIsButton</Button>
      </CardBody>
    </Card>
  );
};

export default GameCard;
