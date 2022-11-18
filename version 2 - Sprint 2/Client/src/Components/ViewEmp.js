import React, { useEffect, useState } from 'react'
//import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import axios from 'axios'; // importa axios-            SE DEBE instalar       "npm i axios"

function ViewEmp() {

    const [empleado, setEmpleado] = useState([]);
    useEffect(()=> {
        const fetchEmpleados = async() => {
            const resultUsers = await axios.get('http://localhost:9000/api/empleado')
            const resultUsersData = resultUsers.data;
            console.log(resultUsersData);
            setEmpleado(resultUsersData);
        }
        fetchEmpleados();
     }, []);
    return (
        
        <div className="ViewEmp">
            <div className="Añadir"> 
                    <div className="AñadirEmpleado">
                        <br></br>
                        <br></br> 
                        <h5 className="text-center">Lista de Empleados</h5>
                        <br></br>
                            <div className="scrollView">
                                <Container>
                                <div class="row">
                                    <div class="table-responsive">    
                                        <table class="table table-striped table-hover table-bordered" id="List_Emp">
                                            <thead id='Text_Emp'>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Nombre</th>
                                                    <th>Apellido</th>
                                                    <th>Rut</th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                
                                                {
                                                    empleado.map((item) =>(
                                                        <tr>
                                                            <td>{item._id}</td>
                                                            <td>{item.Nombre}</td>
                                                            <td>{item.Apellido}</td>
                                                            <td>{item.Rut}</td>
                                                        </tr>
                                                    )) 
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                </Container>
                        
                            </div>
                    </div>
                </div>
        </div>
       
    )
}

export default ViewEmp