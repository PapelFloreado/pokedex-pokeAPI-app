import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PokemonDetail from "../PokemonDetail/PokemonDetail"
import axios from 'axios'
import Spinner from '../Spinner/Spinner'

const PokemonDetailContainer = () => {

  const { id } = useParams()
  const [ pokeId, setPokeId ] = useState({})
  const [ loading, setLoading ] = useState(false)
  
  
  useEffect(()=>{
    const pokeIdCall = async ()=>{
      setLoading(true)
      const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
      const {data} = await axios(url)
      setPokeId(data)
      setLoading(false)
    }

    pokeIdCall()
  }, [id])

  return (
    <div>
      {

        loading === true ? <Spinner></Spinner> : 

        <PokemonDetail pokeId={pokeId}></PokemonDetail>
      }
    </div>
  )
}

export default PokemonDetailContainer