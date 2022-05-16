import React, { useState} from 'react'
import { useQuery } from "react-query";

import CharacterCardVals from './interfaces'
import { CharacterCard } from './characterCard'


export default function CharacterIndex() {

  const [character, setCharacter] = useState<Array<CharacterCardVals>>([])
  const [criteria, setCriteria] = useState<String>("")

  const { status, error, data} = useQuery<Array<CharacterCardVals>, Error>(
    ["characters", criteria],
    async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${criteria}`);
      if (!response.ok) {
        throw new Error("Problem fetching data");
      }

      const characters = await response.json();
      if (characters !== undefined)
      {
        setCharacter(characters.results);
      }
      return characters.results;
    }
  );

  function HandleChange(event: React.FormEvent<HTMLSelectElement>)
  {
    const value = `?${event.currentTarget.id.toString()}=${event.currentTarget.value.toString()}`
    setCriteria(value);
  }

  if (status === "loading") {
    return <div>portaling in...</div>;
  }
  if (status === "error") {
    return <div>{error!.message}</div>;
  }

  return (
    data ?
    <>
      <div>
        <form>
          <select id='status' onChange={HandleChange}>
            <option value=''>Status</option>
            <option value='Dead'>Dead</option>
            <option value='Alive'>Alive</option>
          </select>
          <select id='gender' onChange={HandleChange}>
            <option value=''>Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Genderless'>Genderless</option>
          </select>
          <select id='species' onChange={HandleChange}>
            <option value=''>Species</option>
            <option value='Human'>Human</option>
            <option value='Alien'>Alien</option>
            <option value='Unknown'>Unknown</option>
          </select>
        </form>
      </div>
      <div>
        <CharacterCard characters={character}/>
      </div>
    </>
    :
    <>
    null;
    </>
  )

}
