import React from 'react'
import fotoFormacion from './Imagenes/formacion.png'

const Formacion = () => {
  return (
    <div className='ContenedorDosColumnas' > 
      <div>
        <img className='FotoFormacion'
            src={fotoFormacion}
            alt="Foto del Portfolio"
        />

    </div>
      <ul className='Lista'>
          <h2>Estudios</h2>
        <ul>
            <h5>Ciclo basico</h5>
            <li>Liceo numero 1 Juan Lacaze, Colonia del Sacramento</li>
 
        </ul>    
        <ul>
            <h5>Bachillerato</h5>
            <li>Egresado de bachillerato informatico UTU Juan Lacaze 2019</li>
       
        </ul> 
      
      </ul>  
    </div>
  )
}

export default Formacion