import React from 'react'
import foto from './Imagenes/foto.jpg'
import Curriculum from './Imagenes/Curriculum Vitae Matias Orozco.pdf'

const DatosPersonales = () => {
  return (
    <div className='ContenedorDosColumnas' >
        <div>
        <img className='FotoPortfolio'
            src={foto}
            alt="Foto del Portfolio"
        />

    </div>
    <div> 
      
      <ul className='Lista'>
        <h2>Info. Personal</h2>
        <p>Nombre: Victor Hugo hernandez</p>
        <p>Fecha de Nacimiento: 20/02/2000</p>
        <p>Localidad: Juan lacaze</p>
    
    
      </ul>  
    </div>
    </div>
  
  
  
  )
 
}

export default DatosPersonales