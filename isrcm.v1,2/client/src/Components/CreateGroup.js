import React from 'react'
import { ActiButton } from './ActiButton'
import BasicSelect from './BasicSelect'
import CheckAñadir from './CheckAñadir'
import CheckEliminar from './CheckEliminar'
import CheckEmpleado from './ChekEmpleado'
import CrearGrupFile from './CrearGrupFile'

function CreateGroup() {
  return (
    <div className="CreateGroup">
        
        <CrearGrupFile/>
    </div>
  )
}

export default CreateGroup


{/* <ActiButton/>    
<BasicSelect/>
<b1>Empleados</b1>
<CheckAñadir/>
<b1>Empleados que harán curso de "____"</b1>
<CheckEliminar/> */}