import React, {Component} from 'react'
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';


class Monitoring extends Component {
    constructor(){
        super();
        this.state = {
            grupos : [],
            empleados: [],
            cursos:[],
        }
        
        
    }

    componentDidMount(){
        this.fetchCurso()
        
    }

    fetchCurso(){fetch('http://localhost:9000/api/grupo').then(res => res.json()).then(data => {this.setState({grupos:data});})}
 

    render(){
    return (
       
            <div className="Monitoring">
                <div className="Añadir"> 
                    <div className="AñadirEmpleado">  
                        <br></br>
                        <h4>Monitorear</h4>
                        <br></br>
                        <Form id='Mon_Cur'>
                            {
                        this.state.grupos.map(grupo =>{
                            var resultado = Math.floor((Math.random() * (100 - 1 + 1)) + 1)
                            return(
                                <div>
                                <div class="row">
               
                                    <div class="col">
                                        <Form id='List_Emp'>
                                            <p id='Text_Emp'>{grupo['nombre_grupo']}</p>
                                        </Form>
                                    </div>
                                    <div class="col">
                                        <Form id='List_Emp'>
                                            <p id='Text_Emp'>{grupo.curso['Nombre Curso']}</p>
                                        </Form>
                                    </div>
                                </div>
                                <Container id="Cur_sec">
                                    <h5>Progreso: {resultado} %</h5>
                                    <progress id='bar' value={resultado} max="100"></progress>
                                </Container>          
                                <hr/>
                                </div>      
                            )
                        })
                    }   
                        </Form>
                    </div>
                </div>
            </div>
        

        
    )
}
}

export default Monitoring