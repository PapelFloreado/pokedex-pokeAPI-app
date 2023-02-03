import React from 'react'
import PokeminListContainer from '../components/PokemonListContainer/PokeminListContainer'

const Home = () => {

  
    return (
        <>
            <div className='mt-16'>
                <h1 >POKEDEX - APP</h1>
                <p className='my-10'>Search your Pokemon!</p>
                <PokeminListContainer/>
            </div>
        </>

    )
}

export default Home