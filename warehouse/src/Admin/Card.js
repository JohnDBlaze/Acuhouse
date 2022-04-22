import React from 'react'
import './Card.css'
import { Link } from "react-router-dom";


function Card() {
  return (
    <div class="cards">
        <Link to="/admin"><div class="card cdss"></div></Link>
        <Link to="/signup"><div class="card cds"></div></Link>
    </div>
  )
}

export default Card