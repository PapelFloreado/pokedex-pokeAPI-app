import React from 'react'
import Pokemon from '../Pokemon/Pokemon'
import Spinner from '../Spinner/Spinner'

const PokemonContainer = ({pokemon}) => {
   console.log(pokemon)
  return (
    <div className='flex-col  justify-center items-center'>
        {
           
                <Pokemon name={pokemon.name} sprites={pokemon.sprites} id={pokemon.id}/>
            
        }

    </div>
  )
}

export default PokemonContainer