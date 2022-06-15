import React from 'react'
import fotoSobreMi from './Imagenes/SobreMi.jpg'

const DatosMios = () => {
  return (
    <div className='ContenedorDosColumnas' > 
    <div>
        <img className='FotoSobreMi'
            src={fotoSobreMi}
            alt="Foto del Portfolio"
        />

    </div>
    <div>
      <ul className='Lista'>
        <h3>Victor</h3>
        <p>Soy de Montevideo pero vivo en Juan Lacaze hace algunos años</p>
        <p>En 2016 comenze el bachillerato informatico en la utu de Juan Lacaze y en 2019 lo termine</p>
        <p></p>
      
      </ul>  
    </div>
    </div>
  )
}

export default DatosMios