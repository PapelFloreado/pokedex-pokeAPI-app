import React from 'react'
import Pokemon from '../Pokemon/Pokemon'

const PokemonContainer = ({pokemon}) => {

  return (
    <div className='flex-col  justify-center items-center'>
        {
           
                <Pokemon name={pokemon.name} abilities={pokemon.abilities} sprites={pokemon.sprites} id={pokemon.id}/>
            
        }

    </div>
  )
}

export default PokemonContainer