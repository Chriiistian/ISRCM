import React from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';


 export const ActiButton = () => {
   return (
    <div className="ActiButton">
      <div className="ActiText">
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="#D9D9D9" aria-label="add"> 
        <AddIcon />        
      </Fab>      
    </Box>
    <InputLabel>
      Crear Grupo
    </InputLabel>
      </div>
    </div>
   )
 }  
 





