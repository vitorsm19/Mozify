import React from 'react'   
import { useState, useEffect } from 'react'
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const AddFavourites = () => {
  return (
    <div className="add-favorite-mobile">
    <FontAwesomeIcon icon={faHeart} />
    </div>
  )
}

export default AddFavourites