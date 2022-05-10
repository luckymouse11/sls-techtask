import React from 'react'
import { Routes , Route , Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


import Navbar from './common/Navbar'

import Home from './components/Home'
import CharacterIndex from './components/characters/characterIndex'

const themeLight = createMuiTheme({
  palette: {
    background:{
      default: "#B7E4F9FF"
    }
  }
});

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

const App: React.FC = () => {
  const [light, setLight] = React.useState(true);
  return (
    <>
    <MuiThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Button onClick={() => setLight(prev => !prev)}>Toggle Theme</Button>
        <div className="site-wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/characterIndex" element={<CharacterIndex/>} />
          </Routes>
        </div>
    </MuiThemeProvider>
    </>
  )
}

export default App