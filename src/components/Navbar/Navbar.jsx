import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'

const Navbar = () => {
  return (
    <div className='bg-red-600'>
        <nav className='uppercase font-bold flex mx-auto items-center justify-between container min-h-[80px]'>
            PokeAPi - APP
            <button>
                <Link to="/">HOME</Link>
            </button>
            <Dropdown/>
        </nav>
    </div>
  )
}

export default Navbar