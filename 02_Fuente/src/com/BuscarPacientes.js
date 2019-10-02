import React, { Component } from 'react'
import{Row,Col,Input,InputGroup}from 'reactstrap'
import icosearch from '../ico/search.svg'
import './listarpacientes.css'
import db from '../FirestoreConfig'
import{Table}from 'reactstrap'

export default class BuscarPacientes extends Component {
    constructor(){
        super();
        this.state={
            search:'',
            pacientes:[]
        };
    }

    componentDidMount(){
        db.collection('P00').orderBy('P02').onSnapshot((snapShots)=>{
            this.setState({
                pacientes:snapShots.docs.map(doc=>{return{id:doc.id,data:doc.data()}})
            })
        })
    }
    
    updateSearch(event){
        const{search,pacientes}=this.state; 
        this.setState({search:event.target.value.toUpperCase().substr(0,20)});
        console.log(search)
        // this.setState({
        //     pacientes:db.collection('P00').orderBy('P01').filter((pac)=>{return{pac.P02.indexOf(search) !== -1}})
        // })
        console.log(pacientes)
    }
    
    render() {    
    // let filteredPacientes = this.state.pacientes.filter(
    //     (pac)=>{
    //          return pac.P02.indexOf(this.state.search) !== -1;
    //     }
    // );
    const{search,pacientes}=this.state;
    return (
      <div>
        <Row className="mb-2">
            <Col xs='12'>
                <InputGroup>
                    <Input type="" id="" name="" placeholder="Buscar" value={search}
                        onChange={this.updateSearch.bind(this)}/>
                    <div className='text-center'><img src={icosearch} onClick={this.buscarPaciente} className="search" alt="search"></img></div>    
                </InputGroup>      
            </Col>
        </Row>
        <Row>
            <Col xs='12'>
                <Table hover className="text-center">
                    <thead>
                        <tr>
                            <th>N° Historia</th>
                            <th>Nombres y Apellidos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pacientes && pacientes !== undefined ? pacientes.limit(1).map((doc,key)=>{
                            return(
                            <tr key={key}>
                                <td>{doc.data.P01}</td>
                                <td>{doc.data.P02} {doc.data.P03}</td>
                            </tr>
                            )}
                        ):"No se han encontrado resultados para tu búsqueda"}
                    </tbody>
                </Table>  
            </Col>
        </Row>
        <br/>
      </div>
    )
  }
}
