import React from 'react'
import '../App.css';
import {SidebarData_U} from './SidebarData_U'
import logo from '../assets/img/User_F.png';
import mintra from '../assets/img/logo_isrcm.PNG';
import {Link} from 'react-router-dom'

function Sidebar_U() {
  return (
    <div className="Sidebar">
      <img src={logo} className="Sidebar-logo" alt="logo" />
      <ul className='SidebarList'>
      <div>
        <h5>Nombre:</h5>
        <h5>Rut:</h5>
        <h5>Cargo:</h5>
        <h5>Area:</h5>
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

export default Sidebar_U




/* <li key={key} 
        className="row"
        id={window.location.pathname === val.link ? "active" : ""}
        onClick={()=>{
            window.location.pathname =val.link;
            }}
        >
          {""}<div id="title">{val.title}</div>
        </li> */