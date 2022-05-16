import { useQuery } from "react-query";
import React, { useState} from 'react'
import CharacterCardVals from './interfaces'
import { useParams } from 'react-router-dom'


export default function CharacterShow() {

  const [character, setCharacter] = useState<CharacterCardVals>();
  const { id } = useParams()

  const { status, error } = useQuery<CharacterCardVals, Error>(
    ["character-by-id", { id: id}],
    async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      if (!response.ok) {
        throw new Error("Problem fetching data");
      }

      const characters = await response.json();
      if (characters !== undefined)
      {
        setCharacter(characters);
      }
      return characters;
    });

    if (status === "loading") {
      return <div>Portalling in...</div>;
    }
    if (status === "error") {
      return <div>{error!.message}</div>;
    }
  
    return character ? <h3>{character.name}</h3> : null;
};