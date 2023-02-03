import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Dropdown = () => {

    const categories = ["fire", "water", "electric"]
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative flex flex-col items-center uppercase'>
        <button onClick={()=>setIsOpen((prev)=>!prev)} className='flex w-full uppercase justify-between tracking-wider font-bold duration-300 active:text-white'>Categories
        </button>
        {
            isOpen && 
                (<div className='absolute  top-20 transition-all duration-500 flex rounded-2xl  bg-red-600 flex-col items-start w-full text-black'>
                    {
                        categories.map((item, index)=>(
                            <div className='flex justify-around transition-all duration-500 w-full ' key={index}>
                                <ul>
                                    <li><Link to="/">{item}</Link></li>
                                </ul>
                            </div>
                        ))
                    }
                </div>)
        }
    </div>
  )
}

export default Dropdown