import React from 'react'
import { Routes , Route , Link } from 'react-router-dom'

import Home from './components/Home'
import CharacterIndex from './components/characters/characterIndex'

const App: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Rick and Morty
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/characterIndex"} className="nav-link">
              Character Index
            </Link>
          </li>
        </div>
      </nav>
    <div className="site-wrapper">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/characterIndex" element={<CharacterIndex/>} />
      </Routes>
    </div>
    </>
  )
}

export default App