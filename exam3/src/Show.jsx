import React from 'react'
import "./Index.css";
const Showpdt = ({ index, pdts }) => {
    if (!pdts) return null;
  return (
    <div>
        <li className="list">
      <img src={pdts.image} alt={pdts.title} className="img" />
      <h2 >{pdts.title}</h2>
      <h2 >Price: {pdts.price}</h2>
      <p >Discription: {pdts.Discription}</p>
    </li>
      
    </div>
  )
}

export default Showpdt
