import React, { Component } from 'react'
import './listarpacientes.css'
import {Table,Row,Col,Input,InputGroup} from 'reactstrap'
import icosearch from '../ico/search.svg'
import Paciente from './Paciente'
import RegPacModal from './RegPacModal'


export default class ListarPacientes extends Component {
constructor(props){
    super(props);
    this.state={
        search:''
    }
}
    
    updateSearch(e){
        this.setState({     
            search:e.target.value.toUpperCase().substr(0,20)
           });
    }
    render() {
    let filtrado = this.props.pacientes.filter(
        (paciente) => {
            return paciente.data.P02.indexOf(this.state.search) !== -1;
        }
    );
    const{search}=this.state;
    const pacientes=this.props.pacientes;
    return (
      <div>  
        <Row className='mb-2'>
            <Col xs='2'>
                <RegPacModal/>
            </Col>
            <Col xs='10'>
                <InputGroup>
                    <Input type="text" id="" name="" placeholder="Haz una búsqueda" value={search}
                        onChange={this.updateSearch.bind(this)}/>
                    <img src={icosearch} className="search" alt="search"></img>
                </InputGroup> 
                <br/>
                <Table hover borderless size="sm" responsive>
                    <thead className="text-center">
                        <tr>
                            <th >Mis Pacientes</th>
                        </tr>
                    </thead>
                    <tbody className="text-left">
                        {pacientes && pacientes !== undefined ? filtrado.map((doc,key)=>{
                            return(
                            <tr key={key=doc.id} className="filatabla">
                                <Paciente doc={doc}/>
                            </tr>
                            )}
                        ):null}
                    </tbody>
                </Table>     
            </Col>
        </Row>
        
      </div>
    )
  }
}
