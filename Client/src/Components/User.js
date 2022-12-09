import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { renderMatches } from 'react-router-dom';
import React, {Component}  from 'react'

import { useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class User extends Component{
    constructor(){
        super();
        this.state = {
          curso:'',
          fecha_inicio:'',
          fecha_fin:''
          
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
        
        const datos_curso = grupos.map((item) => {return item.curso})
        console.log(grupos)

        this.setState({ curso:datos_curso[0]['Nombre Curso'], fecha_inicio:grupos[0]['fecha_inicio'], fecha_fin:grupos[0]['fecha_fin'] })
        
        
     
        
      }
render(){
    return(
            <div className="Monitoring">
                <div className="Añadir"> 
                    <div className="AñadirEmpleado">  
                        <br></br>
                        <h4 id='tittle'>Bienvenido</h4>
                        <br></br>
                        <div className='AñadirList'>
                            <Form id='Mon_Cur'>
                            <div>
                                    <div class="row">
                                        <div class="col">
                                            <Form id='List_Emp'>
                                                <p id='Text_Emp'>{this.state.curso}</p>
                                            </Form>
                                        </div>
                                        <div class="col">
                                            <Form id='List_Emp'>
                                                <p id='Text_Emp'>Inicio: {this.state.fecha_inicio}</p>
                                            </Form>
                                        </div>
                                        <div class="col">
                                            <Form id='List_Emp'>
                                                <p id='Text_Emp'>Fin: {this.state.fecha_fin}</p>
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
    )
}

}

export default withParams(User);