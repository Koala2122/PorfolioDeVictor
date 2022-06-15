import React from 'react'
import fotoFacebook from './Imagenes/facebook.png'
import fotoInstagram from './Imagenes/instagram.png'
import fotoLinkedin from './Imagenes/linkedin.png'
import fotoSpotify from './Imagenes/spotify.png'

const RedesSociales = () => {
  return (
    <div className='Contenedor' id='RedesSociales'>
      <div className='UnaLinea'>
      
        <a href='https://www.instagram.com/victor_h2122/' target='_blank'>
        <img className='Logo'
            src={fotoInstagram}
            alt="Logo Instagram "
        />
        </a>  
    
   
      </div>
    </div>
  )
}

export default RedesSociales