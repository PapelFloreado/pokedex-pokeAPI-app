import React, {useState} from 'react'
import axios, { AxiosError } from 'axios'
import PokemonContainer from '../PokemonContainer/PokemonContainer'
import Spinner from '../Spinner/Spinner'


const PokeminListContainer = () => {

    const [ pokemon, setPokemon ] = useState({})
    const [ pokemonSearch, setPokemonSearch ] = useState({})
    const [ load, setLoad  ] = useState(false)
    

    const pokeCall = async()=>{
        setLoad(true)
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonSearch}/`
        const {data} = await axios(url)
            .catch(function(error){
                alert(error)
                setPokemonSearch({})
                setLoad(false)
                return alert(error)
            })
       
        setPokemon(data)
        
        
    }

    
    const handlePokemon = (e)=>{
        const pokeInput = e.target.value
        setPokemonSearch(pokeInput)
    }
    

    return (

        <>  
            <div className='flex mx-auto max-w-[200px] justify-center flex-col '>
                <input onChange={handlePokemon}  className='rounded-md p-3 mb-6' placeholder='n° or name of pokemon' type="text" name="poke" id="poke" />
                <button onClick={()=>pokeCall()}>SEARCH!</button>
            </div>
            {
                load === true && <PokemonContainer pokemon={pokemon}></PokemonContainer>
            }
        </> 

    )
}

export default PokeminListContainer