import React from 'react'
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';


function Monitoring() {
    return (
       
            <div className="Monitoring">
                <div className="Añadir"> 
                    <div className="AñadirEmpleado">  
                        <br></br>
                        <h4>Monitorear</h4>
                        <br></br>
                        <div className="AñadirList">
                            <Form id='Mon_Cur'>
                                <div class="row">
                                    <div class="col">
                                        <Form id='List_Emp'>
                                            <p id='Text_Emp'>ㅤ⠀Empleado 1</p>
                                        </Form>
                                    </div>
                                    <div class="col">
                                        <Form id='List_Emp'>
                                            <p id='Text_Emp'>Nombre</p>
                                        </Form>
                                    </div>
                                    <div class="col">
                                        <Form id='List_Emp'>
                                            <p id='Text_Emp'>Apellido</p>
                                        </Form>
                                    </div>
                                    <div class="col">
                                        <Form id='List_Emp'>
                                            <p id='Text_Emp'>Rut</p>
                                        </Form>
                                    </div>
                                </div>
                                <Container id="Cur_sec">
                                    <h5>Progreso: 70 %</h5>
                                    <progress id='bar' value="70" max="100"></progress>
                                </Container>          
                                <hr/>
                                <div class="row">
                                    <div class="col">
                                        <Form id='List_Emp'>
                                            <p id='Text_Emp'>ㅤ⠀Empleado 2</p>
                                        </Form>
                                    </div>
                                    <div class="col">
                                        <Form id='List_Emp'>
                                            <p id='Text_Emp'>Nombre</p>
                                        </Form>
                                    </div>
                                    <div class="col">
                                        <Form id='List_Emp'>
                                            <p id='Text_Emp'>Apellido</p>
                                        </Form>
                                    </div>
                                    <div class="col">
                                        <Form id='List_Emp'>
                                            <p id='Text_Emp'>Rut</p>
                                        </Form>
                                    </div>
                                </div>
                                <Container id="Cur_sec">
                                    <h5>Progreso: 40 %</h5>
                                    <progress id='bar' value="40" max="100"></progress>
                                </Container>  
                                <hr/>
                                <div class="row">
                                    <div class="col">
                                        <Form id='List_Emp'>
                                            <p id='Text_Emp'>ㅤ⠀Empleado 3</p>
                                        </Form>
                                    </div>
                                    <div class="col">
                                        <Form id='List_Emp'>
                                            <p id='Text_Emp'>Nombre</p>
                                        </Form>
                                    </div>
                                    <div class="col">
                                        <Form id='List_Emp'>
                                            <p id='Text_Emp'>Apellido</p>
                                        </Form>
                                    </div>
                                    <div class="col">
                                        <Form id='List_Emp'>
                                            <p id='Text_Emp'>Rut</p>
                                        </Form>
                                    </div>
                                </div>
                                <Container id="Cur_sec">
                                    <h5>Progreso: 100 %</h5>
                                    <progress id='bar' value="100" max="100"></progress>
                                </Container> 
                                <hr/>
                                <div class="row">
                                    <div class="col">
                                        <Form id='List_Emp'>
                                            <p id='Text_Emp'>ㅤ⠀Empleado 4</p>
                                        </Form>
                                    </div>
                                    <div class="col">
                                        <Form id='List_Emp'>
                                            <p id='Text_Emp'>Nombre</p>
                                        </Form>
                                    </div>
                                    <div class="col">
                                        <Form id='List_Emp'>
                                            <p id='Text_Emp'>Apellido</p>
                                        </Form>
                                    </div>
                                    <div class="col">
                                        <Form id='List_Emp'>
                                            <p id='Text_Emp'>Rut</p>
                                        </Form>
                                    </div>
                                </div>
                                <Container id="Cur_sec">
                                    <h5>Progreso: 10 %</h5>
                                    <progress id='bar' value="10" max="100"></progress>
                                </Container> 
                                <hr/>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>

        
    )
}

export default Monitoring