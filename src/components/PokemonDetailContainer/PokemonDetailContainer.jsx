import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PokemonDetail from "../PokemonDetail/PokemonDetail"
import axios from 'axios'

const PokemonDetailContainer = () => {

  const { id } = useParams()
  const [ pokeId, setPokeId ] = useState({})
  
  
  useEffect(()=>{
    const pokeIdCall = async ()=>{
      const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
      const {data} = await axios(url)
      setPokeId(data)
    }

    pokeIdCall()
  }, [id])

  return (
    <div>
      {
        <PokemonDetail pokeId={pokeId}></PokemonDetail>
      }
    </div>
  )
}

export default PokemonDetailContainer