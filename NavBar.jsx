import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
      <nav>
        <Link to="/"> Accueil </Link>
        <Link to="/profile"> Profile </Link>
        <Link to="/parametre"> Parametre </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/about"> About </Link>
      </nav>
    );
}
