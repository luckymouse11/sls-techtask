import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CharacterCard from './characterCard'

const CharacterIndex: React.FC = () => {
  
  const [character, setCharacter] = useState([])

  useEffect (() => {
    const getData = async () => {
      const { data } = await axios('https://rickandmortyapi.com/api/character')
      setCharacter(data.results)
    }
    getData()
  }, [])

  const handleChange = async (event) => {
    try {
      const value = `/?${event.target.id}=${event.target.value}`
      const { data } = await axios(`https://rickandmortyapi.com/api/character/${value}`)
      setNextPage(data.info.next)
      setCharacter(data.results)
    } catch (err) {
      console.log(err)
    }
  } 


  return (
    <div className="container margin-top">
      <h1 className="title">All Characters</h1>
      <div className="column-style columns is-multiline">
        {character.map(character => {
          return <CharacterCard key={character.id} {... character}/>
        })}
      </div>
    </div>
  )
}

export default CharacterIndex