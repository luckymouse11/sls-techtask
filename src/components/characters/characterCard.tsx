import React from 'react'

import CharacterCardVals from './interfaces'

interface CharacterProps {
  characters: CharacterCardVals[];
}

export const CharacterCard: React.FC<CharacterProps> = ({characters}: CharacterProps) => {
  
  return <div className="Character-Card">
  <table>
      <tbody>
      <tr className="Table-Header">
          <td>
              <h4>NAME</h4>
          </td>
          <td>
              <h4>STATUS</h4>
          </td>
          <td>
              <h4>IMAGE</h4>
          </td>
      </tr>
      {characters.map(item => {
          return (
            <CharacterProfile id={item.id}
                              name={item.name}
                              status={item.status}
                              image={item.image}/>
          )
      })}
      </tbody>
  </table>
</div>
}


const CharacterProfile: React.FC<CharacterCardVals> = ({image, name, status}: CharacterCardVals) => {

    return <tr>
      <td>
          <h5>{name}</h5>
      </td>
      <td>
          <h5>{status}</h5>
      </td>
      <td>
          <img src={image} alt={name}/>
      </td>
    </tr>
}