import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Favourites = () => {
  return (
    <div className="favourites">
      <div className="back">
     
     <Link to="/">
       <FontAwesomeIcon icon={faAngleLeft} />
       <p>Go back</p>
     </Link>


   </div>
      <h1>In progress...</h1>
    </div>
  )
}

export default Favourites