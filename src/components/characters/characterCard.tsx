import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard: React.FC = ( { id, name, image} ) => {
  
  // const characterState = {
  //   id: "",
  //   name: "",
  //   image: ""
  // }

  return(
    <Link to={`/characters/${id}`}>
      <div className='card'>
        <div className='card'>
          <h5 className='mt-2'>{name}</h5>
        </div>
        <img className='card-image' src={image} alt={name} />
      </div>
    </Link>
  )

}

export default CharacterCard
