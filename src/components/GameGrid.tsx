import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Box, Text } from "@chakra-ui/react";

//This is for each game object in results. Each Game object has many properties, but we just want id and name
interface Game {
  id: number;
  name: string;
}

//Model this after the response for the games endpoint in the API, results returns an array of Game objects
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
  //tes
};

export default GameGrid;
