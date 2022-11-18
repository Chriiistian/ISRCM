import Form from 'react-bootstrap/Form';

import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Divider } from '@chakra-ui/react'


export default function CheckEliminar() {
  const [state, setState] = React.useState({
    jeronimo : false,
    estefania: false,
    guillermo: false,
    eliana: false,
    jose: false,
    marcela: false,
    daniela: false,
    adriana: false,
    oscar: false,
    natalia: false,
    yiriam: false,
    maría: false,
    diana: false,
    catherine: false,
    deny: false,
    estewil: false,
    diego: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const {jeronimo, estefania,guillermo,eliana,jose,marcela,daniela,camargo,colmenares,barrero,ochoa,guacas,lopez,ospina,muñoz,quesada,forero} = state;
  const error = [jeronimo, estefania,guillermo,eliana,jose,marcela,daniela,camargo,colmenares,barrero,ochoa,guacas,lopez,ospina,muñoz,quesada,forero].filter((v) => v).length !== 2;

  return (
        <div>
            <div className="EliminarEmpleado">
                <div className="EliminarList">               
                <Box sx={{ display: 'flex' }}>
                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                        <FormLabel component="legend">Seleccionar empleado(s)</FormLabel>
                        <FormGroup>
                        <FormControlLabel
                            control={
                            <Checkbox checked={jeronimo} onChange={handleChange} name="jeronimo" />
                            }
                            label="Jeronimo García"
                        />                
                        <FormControlLabel
                            control={
                            <Checkbox checked={estefania} onChange={handleChange} name="estefania" />
                            }
                            label="Estefania Giménez                    "
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={guillermo} onChange={handleChange} name="guillermo" />
                            }
                            label="Guillermo Pérez"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={eliana} onChange={handleChange} name="eliana" />
                            }
                            label="Eliana Soriano"
                        />                
                        <FormControlLabel
                            control={
                            <Checkbox checked={jose} onChange={handleChange} name="jose" />
                            }
                            label="Jose Gutierrez"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={marcela} onChange={handleChange} name="marcela" />
                            }
                            label="Marcela Reina"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={daniela} onChange={handleChange} name="daniela" />
                            }
                            label="Daniela Ramirez"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={camargo} onChange={handleChange} name="camargo" />
                            }
                            label="Adriana Camargo"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={colmenares} onChange={handleChange} name="colmenares" />
                            }
                            label="Oscar Colmenares"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={barrero} onChange={handleChange} name="barrero" />
                            }
                            label="Natalia Barrero"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={ochoa} onChange={handleChange} name="ochoa" />
                            }
                            label="Yiriam Ochoa"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={guacas} onChange={handleChange} name="guacas" />
                            }
                            label="María Guacas"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={lopez} onChange={handleChange} name="lopez" />
                            }
                            label="Diana Lopez"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={ospina} onChange={handleChange} name="ospina" />
                            }
                            label="Catherine Ospina"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={muñoz} onChange={handleChange} name="muñoz" />
                            }
                            label="Deny MuÑOz"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={quesada} onChange={handleChange} name="quesada" />
                            }
                            label="Estewil Quesada"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={forero} onChange={handleChange} name="forero" />
                            }
                            label="Diego Forero"
                        />
                        </FormGroup>
                        <FormHelperText>Seleccionar para eliminar del curso</FormHelperText>
                    </FormControl> 
                
                </Box>
                <Button variant="contained" color="error">Remover</Button>
                </div>
            </div>
            <br></br>
            <div className="CountCurso">
               <br></br>
               <b1>Cantidad empleados: </b1> <br></br>
               <b1>Duracion del Curso: </b1> 
            </div>
            <div className="aaaa">
            <Button variant="contained">CREAR GRUPO</Button>
            <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
             LIMPIAR TODO
            </Button>           
            </div>
            
        </div>
  );
}










// function Checkboxes() {
//   return (
//     <div className="Checkboxes">
//       <div className="CheckboxesList">
//         <Form>
//         {['checkbox', 'radio'].map((type) => (
          
//             <div key={type} className="mb-3">
            
//             <Form.Check type={type} id={`check-api-${type}`}>
//               <Form.Check.Input type={type} isValid />
//               <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
//               <Form.Control.Feedback type="valid">
//                 You did it!
//               </Form.Control.Feedback>
//             </Form.Check>
//             </div>
            
          
          
//         ))}
//       <Button variant="outlined">Primary</Button></Form>
      
      
//       </div>
//     </div>
//   );
// }

// export default Checkboxes;

