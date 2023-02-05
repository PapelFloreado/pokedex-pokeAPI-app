import React from 'react'

const PokemonDetail = ({pokeId}) => {
  const { name } = pokeId
    console.log(pokeId)
  return (
    <div>
      <h2>{name}</h2>
    </div>
  )
}

export default PokemonDetail