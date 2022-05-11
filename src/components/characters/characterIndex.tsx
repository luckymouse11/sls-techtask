import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Select from 'react-select'
import { Button } from '@mui/material'

import CharacterCardVals from './interfaces'
import { CharacterCard } from './characterCard'

const CharacterIndex: React.FC = () => {
  
  const [character, setCharacter] = useState<Array<CharacterCardVals>>([])
  const [nextPage, setNextPage] = useState('')

  useEffect (() => {
    const getData = async () => {
      const { data } = await axios('https://rickandmortyapi.com/api/character')
      setCharacter(data.results)
    }
    getData()
  }, [])

  const handlePageChange = async () => {
    try {
      const { data } = await axios(nextPage)
      const newCharacters = character.concat(data.results)
      setCharacter(newCharacters)
      setNextPage(data.info.next)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = async (event: React.FormEvent<HTMLSelectElement>) => {
    try {
      console.log("checkcheck")
      const value = `?${event.currentTarget.id.toString()}=${event.currentTarget.value.toString()}`
      console.log(value)
      const { data } = await axios(`https://rickandmortyapi.com/api/character/${value}`)
      setNextPage(data.info.next)
      setCharacter(data.results)
      console.log("data.results -> ", data.results)
      console.log("characters -> ", character)
    } catch (err) {
      console.log(err)
    }
  } 


  return (
    <>
      <div>
        <form>
          <select id='status' onChange={handleChange}>
            <option value=''>Status</option>
            <option value='Dead'>Dead</option>
            <option value='Alive'>Alive</option>
          </select>
          <select id='gender' onChange={handleChange}>
            <option value=''>Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Genderless'>Genderless</option>
          </select>
          <select id='species' onChange={handleChange}>
            <option value=''>Species</option>
            <option value='Human'>Human</option>
            <option value='Alien'>Alien</option>
            <option value='Unknown'>Unknown</option>
          </select>
        </form>
      </div>
      <div>
        {/* {character.map(item => {
          console.log(item)
          return <CharacterCard characters={character}/>
        })}  */}
        <CharacterCard characters={character}/>
      </div>
      <Button onClick={handlePageChange}>+</Button>
    </>
  )
}

export default CharacterIndex