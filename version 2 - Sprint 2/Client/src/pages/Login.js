import React from "react";
import {Container} from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "../styles/Login.css";
import Logo from "../assets/img/Logo.png";
//import VerGrupos from "./VerGrupos"
//import Creargrupos from "./Creargrupos";
import {useNavigate} from "react-router-dom"

// import Otra from "/otra.js"


export default function Login(){
    const navigate = useNavigate()
    // const toPage = page => event => {
    //     event.preventDefault()

    //     window.history.pushState(null, '',`/${page}`)
    //     setPage(page)

    // }

   async function llamarDatos(){
    return await fetch('http://localhost:9000/api/cuenta')
   .then(response => response.json())
   .then(data => {return data})
   .catch(error => console.error(error))
}

    async function validarDatos(){
        let correo = document.getElementById('input-correo').value
        let pass = document.getElementById('input-pass').value
        
        if(correo === '' || pass === '' ){alert('Por favor, rellene los campos')}
        else{
            let usuario_existe = false
            let admin = false
            const  datos_cuenta = await llamarDatos()
            console.log(datos_cuenta['admin'])
            datos_cuenta.forEach( (dato) => {
                
                if (dato.correo === correo && dato.pass === pass) {
                    usuario_existe = true
                    admin = dato.admin
                }
                }) //verifica si los datos ingresados se encuentra en la base. 
            if(usuario_existe){
                if(admin === true){

                    //window.location.pathname = '/crear-grupos'//AQUI SE DEBE ENRUTAR A OTRA PAGINA
                    // windows.exact.element = Creargrupos()
                    navigate('./Crear-grupos')
                    console.log("admin")
                }else{
                    console.log("user") //AQUI SE DEBE ENRUTAR A OTRA PAGINA
                    navigate('./Crear-grupos')
                }
            }else{
                alert("El usuario no existe")
            }
            
        }
    }


    return(
        <Container id="main-container" className="d-grid h-100">
            <Card id="card-login" className=" text-center ">
                <Form id="sign-in-form" className="text-center w-100">
                    <img className="mb-4 isrcm-logo" src={Logo} alt="ISCRM"/>
                    <h1 className="mb-3 fs-3 fw-normal">Inicia sesion por favor</h1>
                    
                    <Form.Group controlId="sing-in-email-address">
                        <Form.Control id='input-correo' required type='email' size='lg' placeholder="correo electronico" autoComplete="username" className="position-relative"/>
                    </Form.Group>
                    
                    <Form.Group controlId="sing-in-password" className="mb-3">
                        <Form.Control id='input-pass' required type='password' size='lg' placeholder="contraseña" autoComplete="current -password" className="position-relative"/>
                    </Form.Group>

                    <Form.Group controlId="remember-me" className="d-flex justify-content-center">
                        <Form.Check label="recuerdame"/>
                    </Form.Group>
                    <div className="d-grid">
                {/* <Router>
                <Route exact element ={Creargrupos} />    */}
                    <Button id="boton" variant="primary" size="lg" onClick={validarDatos}>iniciar</Button>
                {/* </Router> */}
                    </div>
                    <div className="d-grid">
                     
                    <Button variant="link" size="lg">Crear usuario</Button>
                    </div>
                </Form>
            </Card>
            <section class="">
                <footer class="text-center text-white">
                    <div class="container p-4 pb-0">
                    <section class="">
                        <p class="d-flex justify-content-center align-items-center">
                        <span class="me-3"></span>
                        <button type="button" class="btn btn-outline-light btn-rounded">
                            acerca de nosotros
                        </button>
                        </p>
                    </section>
                    </div>
                    <div class="text-center p-3">
                    © 2022 Copyright: I.S.C.R.M.
                    </div>
                </footer>
            </section>
        </Container>
    );
}