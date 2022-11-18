import Form from 'react-bootstrap/Form';
import React, {Component} from 'react';
import Box from '@mui/material/Box';
// import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
// import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// import { Divider } from '@chakra-ui/react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import "../styles/checkbox_style.css";

class CrearGrupFile extends Component {

    constructor(){
        super();
        this.state = {
          cursos: [],
          empleados: [], 
          id_cursantes: [],
          id_curso_seleccionado: '', //dato a la base
          nombre_curso: '',
          cursantes:[],  //dato a la base
          duracion_curso: 0,
        }
        this.base = {
            nombre_grupo: 'test',
            empleados: [],
            curso: [],
            fecha_inicio: '',
            fecha_fin: ''
        }
        this.ObtenerEmpleadosCursantes = this.ObtenerEmpleadosCursantes.bind(this)
        this.RemoverObtenerEmpleadosCursantes = this.RemoverObtenerEmpleadosCursantes.bind(this)
        this.Obtenercurso = this.Obtenercurso.bind(this)
        this.CrearGrupo = this.CrearGrupo.bind(this)
        
      }
      
      checkclick = (e) =>{
        var {id, checked} = e.target;
        console.log(id)
        if (checked){    
        this.setState((e)=>{
          e.id_cursantes.push(id)
          e.id_cursantes = e.id_cursantes.reduce((a,e)=>{// eliminar valores repetidos
            if(!a.find(d => d === e)){
              a.push(e)
            }
            return a},[])
            console.log(e.id_cursantes)
          }
            )
        }
       
    } 
    Removecheckclick = (e) =>{
      var {id, checked} = e.target;
      if (checked){    
        this.setState((e)=>{
          e.id_cursantes = e.id_cursantes.filter((item) => item !== id)
      }) 
      
      }
  } 

  ObtenerEmpleadosCursantes(e){
    
    var base= this.state.empleados.filter((empleado)=>{
     for (let index = 0; index < this.state.id_cursantes.length; index++) { 
      if (empleado._id === this.state.id_cursantes[index] ){
        return empleado
    }}
    })

    base = base.sort((a,b) =>{

      if(a['Nombre'].toLowerCase() < b['Nombre'].toLowerCase()){
        return -1
      }
      if (a['Nombre'].toLowerCase() > b['Nombre'].toLowerCase()){
        return 1
      }
      return 0
    })
    this.setState({cursantes:base})
    this.setState((e)=>{    

    e.cursantes.map((cursa)=>{e.empleados = e.empleados.filter((item) => item._id != cursa._id)}) //quitar del arreglo EMPLEADOS

  })
   }

   RemoverObtenerEmpleadosCursantes(e){
    console.log("removido")
    var base= this.state.id_cursantes.map((empleado)=>{return this.state.empleados[empleado-1]})
    base = base.sort((a,b) =>{

      if(a['Nombre'].toLowerCase() < b['Nombre'].toLowerCase()){
        return -1
      }
      if (a['Nombre'].toLowerCase() > b['Nombre'].toLowerCase()){
        return 1
      }
      return 0
    })
    this.setState({cursantes:base})
    //AGREGAR A EMPLEADOS
    this.setState((e)=>{

      e.cursantes.map((item)=>{
        e.empleados.push(item)
      })
      e.empleados = e.empleados.reduce((a,e)=>{// eliminar valores repetidos
        if(!a.find(d => d === e)){
          a.push(e)
        }
        return a},[])


    })


   }
   

    Obtenercurso(e){
        var {value} = e.target;
        if (value !== '1'){       
            this.setState((e)=>{
                e.id_curso_seleccionado=value
                e.cursos.map((curso)=>{
                    if(curso._id === value){
                        e.duracion_curso = curso['Total Horas'] 
                        e.nombre_curso = curso['Nombre Curso']
                    }})})}}
    
      componentDidMount() {
        this.fetchCurso();
        this.fetchEmpleados();
      }
      
      fetchCurso(){fetch('http://localhost:9000/api/curso').then(res => res.json()).then(data => {this.setState({cursos:data});})}
      fetchEmpleados(){fetch('http://localhost:9000/api/empleado').then(res => res.json()).then((data) => {
        
      data = data.sort((a,b) =>{

        if(a['Nombre'].toLowerCase() < b['Nombre'].toLowerCase()){
          return -1
        }
        if (a['Nombre'].toLowerCase() > b['Nombre'].toLowerCase()){
          return 1
        }
        return 0
      })
      this.setState({ empleados: data });})}



      CrearGrupo(e){
        // crea un nuevo objeto `Date`
        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        this.setState((e)=>{
          e.cursos.map((curso)=>{
            if(curso._id === e.id_curso_seleccionado){
              this.base.curso = e.id_curso_seleccionado
              this.base.empleados = e.cursantes
              this.base.fecha_inicio = `${day}/${month}/${year}`            
              this.base.fecha_fin = `${day}/${month+1}/${year}`}  })  })
              fetch(`http://localhost:9000/api/grupo`,{
                method: 'POST',
                body: JSON.stringify(this.base),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
              })
              .then(res => res.json())
              .then(data =>{alert('Grupo creado')})
              .catch(err => console.error(err));
      }

  render(){
  return (
        <div>
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
        {/* -------------------------------- SELECCIONAR CURSO -----------------------------*/}
       <div className="BasicSelect">   
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Seleccione Cursos Disponibles
            </InputLabel>
            <NativeSelect
              defaultValue={1}
              inputProps={{
                name: 'Seleccione Cursos Disponibles',
                id: 'uncontrolled-native',
              }}
              onChange ={this.Obtenercurso}
              >
                <option value = {1}>*Seleccione un curso*</option>
              {
              this.state.cursos.map(elemento => 
                {
                  return(<option value = {elemento._id}  >{elemento['Nombre Curso']} </option>)
                }
                )
                }
            </NativeSelect>
          </FormControl>
        </Box>
      </div> {/* ----------------------------- FIN SELECCIOANR CURSO ------------------------------------*/}
            <b1>Seleccione a los empleados</b1>
            <div className="AñadirEmpleado">
            
            <div className="AñadirList">
            
            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
    
                    {/* ----------------- */}
               <Form>
          <div className="scroll">
            {
              this.state.empleados.map(empleado => {
                return (
                  <div key={`default-${empleado._id}`} className="mb-3 borde">
                    <Form.Check type='checkbox' value = {empleado._id} id={empleado._id}>
                      <Form.Check.Input  type='checkbox' isValid  onChange = {this.checkclick}/>
                      <Form.Check.Label>{empleado['Nombre'] + ' ' + empleado['Apellido']}</Form.Check.Label>
                      <Form.Control.Feedback type="valid">
                        {empleado['Departamento'] + ' - ' + empleado['Cargo']}
                      </Form.Control.Feedback>
                    </Form.Check>
                  </div>)
              }
              )}

          </div>
        </Form>
        {/* ------------- */}
                    <FormHelperText>Seleccionar para añadirlo al curso</FormHelperText>
                </FormControl> 
            </Box>
            
            </div>
                        
            <Button onClick={this.ObtenerEmpleadosCursantes} variant="contained">Añadir</Button>
            </div>
            <b1>Empleados que harán curso de "{this.state.nombre_curso}"</b1>
            <div className="EliminarEmpleado">
                <div className="EliminarList">               
                <Box sx={{ display: 'flex' }}>
                <Form>
          <div className="scroll">
            {
              this.state.cursantes.map(cursante => {
                return (
                  <div key={`default-${cursante._id}`} className="mb-3 borde">
                    <Form.Check type='checkbox' value = {cursante._id} id={cursante._id}>
                      <Form.Check.Input  type='checkbox' isValid  onChange = {this.Removecheckclick}/>
                      <Form.Check.Label>{cursante['Nombre'] + ' ' + cursante['Apellido']}</Form.Check.Label>
                      <Form.Control.Feedback type="valid">
                        {cursante['Departamento'] + ' - ' + cursante['Cargo']}
                      </Form.Control.Feedback>
                    </Form.Check>
                  </div>)
              }
              )}

          </div>
        </Form>
                </Box>
                <Button variant="contained" color="error" onClick = {this.RemoverObtenerEmpleadosCursantes} >Remover</Button>
                </div>
            </div> 
            <br></br>
            <div className="CountCurso">
                <br></br>
                <b1>Cantidad empleados: {this.state.cursantes.length} </b1> <br></br>
                <b1>Duracion del Curso: {this.state.duracion_curso} </b1> 
            </div>
            <br></br>
            <div className="BotonFile">
            <Button onClick ={this.CrearGrupo} variant="contained">CREAR GRUPO</Button>
            <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
                LIMPIAR TODO
            </Button>           
            </div>
        </div>
  );
    }
  
}

export default CrearGrupFile;










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

