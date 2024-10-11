import React from 'react';
import logo from '../../assets/Images/notfound.jpg';
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className='imagencontenedor'>
      <img className='responsive-image' src={logo} alt="Logo" />
    </div>
  );
};
