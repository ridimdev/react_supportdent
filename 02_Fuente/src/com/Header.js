import React, { Component } from 'react'
import{Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Container,Row,Col,Jumbotron,Button} from 'reactstrap'
import user from '../ico/user.svg'
import protection from '../ico/protection.svg'
import './header.css'

export default class Header extends Component {
  state = {
    isOpen: false
  }

toggle = () => {
  this.setState({
      isOpen: !this.state.isOpen
  })
}
  render() {
    return (
      <div>
        <div>
                <Navbar className="cab-navbar" color="inverse" position="fixed" light expand="md" id="">
                    <img src={protection} className="logo" alt="logo"/>
                    <NavbarBrand color="#4267B2" href="/">SupportDent <small><small>. tu consultorio online</small></small></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap"><img src={user} className="user" alt="user" /> Mi Cuenta</NavLink>    
                            </NavItem>
                            <NavItem>                              
                                <NavLink href="">Salir</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1 className="display-4"  id='txtJumbo'>¿Qué deseas hacer hoy? </h1>
                                <br/>
                                <p>
                                    <Button
                                        tag="a"
                                        color="info"
                                        size="large"
                                        href="http://reactstrap.github.io"
                                        target="_blank"
                                    >
                                        Solicitud de Mejoras
                                    </Button>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
      </div>
    )
  }
}