import React from 'react';
import Link from '@mui/material/Link';
import { styled } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
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

export const CharacterCard: React.FC<CharacterProps> = ({characters}: CharacterProps) => {
  return (
    <Box sx={{ flexGrow: 1, p: 4, top: 6}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {characters.map(item => {
            return (
              <CharacterProfile
                id={item.id}
                name={item.name}
                status={item.status}
                gender={item.gender}
                species={item.species}
                image={item.image}/>
            )
          })}
        </Grid>
    </Box>
  )
}


const CharacterProfile: React.FC<CharacterCardVals> = ({id, image, name, status}: CharacterCardVals) => {

  return (
    <Grid xs={4} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center', padding: 2 }} >
      <Link href={`/character/${id}`}>
        <Item>
          <p>{name}</p>
          <img width={180} height={180} src={image} alt={name}/>
        </Item>
      </Link>
    </Grid>
  )
}