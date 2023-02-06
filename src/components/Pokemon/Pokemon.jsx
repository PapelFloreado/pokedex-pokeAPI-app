import React from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

const Pokemon = ({name, sprites, id}) => {
  
    
  return (
    
    <div className='mb-16 my-6'>
        {
            !name ? <Spinner></Spinner> : 
            (<div  className='mt-16 bg-slate-100 w-2/4 mx-auto rounded-xl shadow-2xl   shadow-amber-100'>
                
                <h2 className='pt-4 text-black text-4xl uppercase font-bold'>{name}</h2>
                <img className='w-2/4 mx-auto' src={sprites.other.home.front_default} alt="" />
                <div>
                    <p className='text-black font-bold'>Poke ID: n°{id}</p>
                </div>
                <Link to={`/pokemon-detail/${id}`}>
                  <button className='my-10'>see more information</button>
                </Link>
            </div>
                
            )
        }
        
    </div>
  )
}

export default Pokemon