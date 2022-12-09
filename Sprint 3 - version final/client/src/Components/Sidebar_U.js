import React, {Component}  from 'react'
import '../App.css';
import {SidebarData_U} from './SidebarData_U'
import logo from '../assets/img/User_F.png';
import mintra from '../assets/img/logo_isrcm.PNG';
import {Link} from 'react-router-dom'

import { useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class Sidebar_U extends Component {
  constructor(){
    super();
    this.state = {
      nombre: [],
      apellido: [],
      rut: [],
      cargo: [],
      curso:[],
      fecha_inicio:[],
      fecha_fin:[]
      
    }
    this.obtenerDatos = this.obtenerDatos.bind(this)
  }
  componentDidMount() {
    this.obtenerDatos();
    }

  async obtenerDatos(e){
    let { id } = this.props.params;
    console.log(id)
    const grupos = await fetch(`http://localhost:9000/api/grupo/empleado/${id}`).
    then(res => res.json()).
    then((data) => {
      return data
    })
     
    const datos_empleados = await fetch(`http://localhost:9000/api/empleado/rut/${id}`).
    then(res => res.json()).
    then((data) => {
      return data
    })
    
    this.setState({nombre: datos_empleados[0]['Nombre'], apellido: datos_empleados[0]['Apellido'], rut: datos_empleados[0]['Rut'], cargo: datos_empleados[0]['Cargo']})
   
    const empleados = grupos.map((item)=>{return item.empleados.id})
    
 
    
  }

 render(){
  return (
    <div className="Sidebar">
      <img src={logo} className="Sidebar-logo" alt="logo" />
      <ul className='SidebarList'>
      <div>
        <h5>Nombre: {this.state.nombre} {this.state.apellido}</h5>
        <h5>Rut: {this.state.rut}</h5>
        <h5>Cargo: {this.state.cargo}</h5>
      </div>          
        {SidebarData_U.map((val,key)=>{
        return (
        <li key={key} 
        className="row">
          <Link to={val.link} 
            className={({isActive}) => (isActive ? "active" : "")}>
          <span className='title'>{val.title}</span>
          </Link>
        </li>
        );
        })}
      </ul>  
      <img src={mintra} className="Sidebar-mintra" alt="mintra" />  
    </div>
  )
      }
}

export default withParams(Sidebar_U)




/* <li key={key} 
        className="row"
        id={window.location.pathname === val.link ? "active" : ""}
        onClick={()=>{
            window.location.pathname =val.link;
            }}
        >
          {""}<div id="title">{val.title}</div>
        </li> */