import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CharacterCardVals from './interfaces'
import { CharacterCard } from './characterCard'
// import { stripVTControlCharacters } from 'util'

const CharacterIndex: React.FC = () => {
  
  const [character, setCharacter] = useState<Array<CharacterCardVals>>([])

  useEffect (() => {
    const getData = async () => {
      const { data } = await axios('https://rickandmortyapi.com/api/character')
      setCharacter(data.results)
    }
    getData()
  }, [])

    return (
      <>
        {character.map(item => {
          return <CharacterCard characters={character}/>
        })} 
      </>
    )
  }

export default CharacterIndex