import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

function User(){

    return(
        <div>
            <div className="Monitoring">
                <div className="Añadir"> 
                    <div className="AñadirEmpleado">  
                        <br></br>
                        <h4>Bienvenido</h4>
                        <br></br>
                        <div className='AñadirList'>
                            <Form id='Mon_Cur'>
                            <div>
                                    <div class="row">
                                        <div class="col">
                                            <Form id='List_Emp'>
                                                <p id='Text_Emp'>Nombre curso</p>
                                            </Form>
                                        </div>
                                        <div class="col">
                                            <Form id='List_Emp'>
                                                <p id='Text_Emp'>Fecha de ingreso: 03/10</p>
                                            </Form>
                                        </div>
                                        <div class="col">
                                            <Form id='List_Emp'>
                                                <p id='Text_Emp'>Fecha de finalizacion: 03/11</p>
                                            </Form>
                                        </div>
                                    </div>
                                    <Container id="Cur_sec">
                                        <h5>Progreso de cusrso: 90 %</h5>
                                        <progress id='bar'value={90} max="100"></progress>
                                    </Container>          
                                    <hr/>
                            </div>
                            </Form>
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    );

}

export default User;