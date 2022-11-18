import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Divider } from '@chakra-ui/react'

export default function CheckEmpleado() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
        <div className="Empleado">
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                <FormControlLabel
                    control={
                    <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                    }
                    label="Gilad Gray"
                />                
                <FormControlLabel
                    control={
                    <Checkbox checked={jason} onChange={handleChange} name="jason" />
                    }
                    label="Jason Killian"
                />
                <FormControlLabel
                    control={
                    <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                    }
                    label="Antoine Llorca"
                />
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
            </FormControl> 
        
        </Box>
        </div>
  );
}
