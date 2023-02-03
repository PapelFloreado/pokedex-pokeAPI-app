import React from 'react'
import Spinner from '../Spinner/Spinner'

const Pokemon = ({name, sprites, id}) => {
   

    
  return (
    
    <div className='mb-16'>
        {
            !name ? <Spinner></Spinner> : 
            (<div  className='mt-16 bg-slate-300 w-2/4 mx-auto rounded-xl shadow-2xl   shadow-amber-100'>
                
                <h2 className='pt-4 text-black text-4xl uppercase font-bold'>{name}</h2>
                <img className='w-2/4 mx-auto' src={sprites.other.home.front_default} alt="" />
                <div>
                    <p className='text-black font-bold'>Poke ID: n°{id}</p>
                </div>
            </div>
                
            )
        }
        
    </div>
  )
}

export default Pokemon