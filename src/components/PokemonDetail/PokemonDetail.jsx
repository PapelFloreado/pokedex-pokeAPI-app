import React from 'react'
import Spinner from '../Spinner/Spinner'

const PokemonDetail = ({pokeId}) => {
  
  const { name, sprites, abilities, base_experience, id } = pokeId
console.log(pokeId)
  return (
    <div className='flex flex-col'>
      <h2 className='uppercase text-3xl font-bold mt-16'>{name}</h2>      
      {
        sprites === undefined ? <Spinner></Spinner>:
      <img className='w-1/4 mx-auto' src={sprites.other.home.front_default} alt="pokemon image" />
      }
      <div >
        <div className='flex-col mx-auto ' >

        <h2 className='uppercase text-xl font-bold mt-10'>Abilities</h2>
        {
          abilities === undefined ? <Spinner></Spinner> :
          abilities.map((ab, index)=>(
              <div key={index}>
                <p className='mt-4 uppercase' >{ab.ability.name}</p>
              </div>
          ))
        }
          <div>

            <h2 className='uppercase text-xl font-bold mt-10'>Base Experience</h2>
            <p>{base_experience}</p>
          </div>
        </div>
      </div>
      <h2 className='uppercase text-lh font-bold mt-10'>Pokemon n°{id}</h2>
    </div>
  )
}

export default PokemonDetail