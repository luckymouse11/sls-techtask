import React from 'react'
import { styled } from '@mui/material';
import { Paper } from '@mui/material';

const Styles = styled(Paper)(({ theme }) => ({
  backgroundColor: '#FAFD7CFF',
  textAlign: 'center',
  // verticalAlign: 'middle',
  position: 'relative',
}));


const Home = () => {
  return (
    <>
      <Styles>Rick and Morty : DB</Styles>
      <img src="https://c.tenor.com/Xf2-3wXNmNIAAAAC/rick-and-morty-morty.gif" alt="homegif" />
    </>
  )
}

export default Home