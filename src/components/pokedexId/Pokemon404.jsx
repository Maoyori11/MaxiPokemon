import React from 'react'
import { Link } from 'react-router-dom'
import './styles/pokemon404.css'

const Pokemon404 = () => {
    return (
        <div className='card__404'>
            <h1 className='title__404'>🚫 Pokemon not found 😥</h1>
            <img className='img__404' src='./Ash404.jpg' alt="" />
            <Link  className='return__404' to='/pokedex' >Return to Pokedex ↩</Link>
        </div>
    
    )
}

export default Pokemon404 