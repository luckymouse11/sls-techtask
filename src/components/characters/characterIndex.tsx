import React, { useState, useEffect } from 'react'
import { useQuery } from "react-query";
//import axios from 'axios'

import CharacterCardVals from './interfaces'
import { CharacterCard } from './characterCard'
// import { resolveProjectReferencePath } from 'typescript';




// const CharacterIndex: React.FC = () => {
  
//   const [character, setCharacter] = useState<Array<CharacterCardVals>>([])
//   const [nextPage, setNextPage] = useState('')

//   useEffect (() => {
//     const getData = async () => {
//       const { data } = await axios('https://rickandmortyapi.com/api/character')
//       setCharacter(data.results)
//     }
//     getData()
//   }, [])

//   const handlePageChange = async () => {
//     try {
//       const { data } = await axios(nextPage)
//       const newCharacters = character.concat(data.results)
//       setCharacter(newCharacters)
//       setNextPage(data.info.next)
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   const handleChange = async (event: React.FormEvent<HTMLSelectElement>) => {
//     try {
//       console.log("checkcheck")
//       const value = `?${event.currentTarget.id.toString()}=${event.currentTarget.value.toString()}`
//       console.log(value)
//       const { data } = await axios(`https://rickandmortyapi.com/api/character/${value}`)
//       setNextPage(data.info.next)
//       setCharacter(data.results)
//       console.log("data.results -> ", data.results)
//       console.log("characters -> ", character)
//     } catch (err) {
//       console.log(err)
//     }
//   } 


//   return (
//     <>
//       <div>
//         <form>
//           <select id='status' onChange={handleChange}>
//             <option value=''>Status</option>
//             <option value='Dead'>Dead</option>
//             <option value='Alive'>Alive</option>
//           </select>
//           <select id='gender' onChange={handleChange}>
//             <option value=''>Gender</option>
//             <option value='Male'>Male</option>
//             <option value='Female'>Female</option>
//             <option value='Genderless'>Genderless</option>
//           </select>
//           <select id='species' onChange={handleChange}>
//             <option value=''>Species</option>
//             <option value='Human'>Human</option>
//             <option value='Alien'>Alien</option>
//             <option value='Unknown'>Unknown</option>
//           </select>
//         </form>
//       </div>
//       <div>
//         <CharacterCard characters={character}/>
//       </div>
//       <Button onClick={handlePageChange}>+</Button>
//     </>
//   )
// }

// export default CharacterIndex


export default function CharacterIndex() {

  const [character, setCharacter] = useState<Array<CharacterCardVals>>([])
  const [criteria, setCriteria] = useState<String>("")

  const { status, error, data} = useQuery<Array<CharacterCardVals>, Error>(
    ["characters", criteria],
    async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${criteria}`);
      if (!response.ok) {
        throw new Error("Problem fetching data");
      }

      const characters = await response.json();
      if (characters !== undefined)
      {
        setCharacter(characters.results);
      }
      return characters.results;
    }
  );

//   const handlePageChange = async () => {
//   try {
//     const { data } = await axios(nextPage)
//     const newCharacters = character.concat(data.results)
//     setCharacter(newCharacters)
//     setNextPage(data.info.next)
//   } catch (err) {
//     console.log(err)
//   }
// }

  function HandleChange(event: React.FormEvent<HTMLSelectElement>)
  {
    // const { status, error, data } = useQuery<Array<CharacterCardVals>, Error>(
    //   "characters",
    //   async () => {
        const value = `?${event.currentTarget.id.toString()}=${event.currentTarget.value.toString()}`
        setCriteria(value);
        //refetch();
        // const response = await fetch(`https://rickandmortyapi.com/api/character/${value}`);
        // if (!response.ok) {
        //   throw new Error("Problem fetching data");
        // }

        // const characters = await response.json();
        // return characters.results;
  }
  //   );
  // }


  if (status === "loading") {
    return <div>portaling in...</div>;
  }
  if (status === "error") {
    return <div>{error!.message}</div>;
  }

  return (
    data ?
    <>
      <div>
        <form>
          <select id='status' onChange={HandleChange}>
            <option value=''>Status</option>
            <option value='Dead'>Dead</option>
            <option value='Alive'>Alive</option>
          </select>
          <select id='gender' onChange={HandleChange}>
            <option value=''>Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Genderless'>Genderless</option>
          </select>
          <select id='species' onChange={HandleChange}>
            <option value=''>Species</option>
            <option value='Human'>Human</option>
            <option value='Alien'>Alien</option>
            <option value='Unknown'>Unknown</option>
          </select>
        </form>
      </div>
      <div>
        <CharacterCard characters={character}/>
      </div>
    </>
    :
    <>
    null;
    </>
  )
}
