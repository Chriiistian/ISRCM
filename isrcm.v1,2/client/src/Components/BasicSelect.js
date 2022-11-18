import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function BasicSelect() {
  return (
    <div className="BasicSelect">
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
         Seleccione Cursos Disponibles
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'Seleccione Cursos Disponibles',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Aplicación De Estrategias De Mejora En El Desempeño Laboral Administrativo</option>
          <option value={20}>Estrategias De Mejora En El Desempeño Laboral Administrativo</option>
          <option value={40}>Utilización De Estrategias De Mejora En El Desempeño Laboral Administrativo</option>
          <option value={50}>Manejo De Herramientas Actuales De Excel En El Trabajo Administrativo</option>
          <option value={60}>Técnicas Para Aplicar Subsistemas De Administración De Rrhh</option>
          <option value={70}>Herramientas Aplicadas A La Gestión De Rrhh Sobre La Normativa Laboral Y Previsional Vigente.</option>
          <option value={80}>Técnicas Y Nuevas Tendencias En Rrhh</option>
          <option value={90}>Técnicas Administrativas De Recursos Humanos, Mediante La Gestión De Personas</option>
          <option value={100}>Aplicación De Las Herramientas De Marketing Orientadas A La Venta.</option>
          </NativeSelect>
      </FormControl>
    </Box>
    </div>
  );
}
