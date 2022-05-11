import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { styled } from '@mui/material';
import { Paper } from '@mui/material';


import CharacterCardVals from './interfaces'

interface CharacterProps {
  characters: CharacterCardVals[];
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#FAFD7CFF',
  width: 'fit-content',
  border: '1px solid black',
  textAlign: 'center',
  padding: 8,
  paddingTop: 0,
}));

export const CharacterShow: React.FC<CharacterProps> = ({characters}: CharacterProps) => {

  const [character, setCharacter] = useState<Array<CharacterCardVals>>([])
  const { id } = useParams()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        setCharacter(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [id])

  return (
    <>
          {characters.map(item => {
            return (
              <CharacterProfile
                id={item.id}
                name={item.name}
                status={item.status}
                image={item.image}/>
            )
          })}
    </>
  )
}

  const CharacterProfile: React.FC<CharacterCardVals> = ({id, image, name, status}: CharacterCardVals) => {

  return (
    <Item>
      <p>{name}</p>
      <img width={180} height={180} src={image} alt={name}/>
    </Item>
  )
}