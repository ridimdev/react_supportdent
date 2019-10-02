import React, { Component } from 'react'
import moment from 'moment'
import {CardBody,Table,Row,Col,Modal,ModalBody,ModalHeader,ModalFooter,CardTitle,CardImg,Card} from 'reactstrap'
import userfem from '../ico/userfem.svg'
import usermale from '../ico/usermale.svg'
import './paciente.css'
import EdiPacModal from './EdiPacModal';
import DelPacModal from './DelPacModal';
export default class Paciente extends Component {
    constructor(props){
        super(props);
        const doc=this.props.doc;
        const key=this.props.key;
        const edad=moment().diff(doc.data.P05.substring(6,10)+doc.data.P05.substring(3,5)+doc.data.P05.substring(0,2),'years',false)+' años'
        this.state={
            modal: false
            ,nestedModal: false
            ,edad:edad !== 'NaN años' ? edad : '-'
            ,P01:doc.data.P01 !== '' ? doc.data.P01 : '-'
            ,P02:doc.data.P02 !== '' ? doc.data.P02 : '-'
            ,P03:doc.data.P03 !== '' ? doc.data.P03 : '-'
            ,P04:doc.data.P04 !== '' ? doc.data.P04 : '-'
            ,P06:doc.data.P06 !== '' ? doc.data.P06 : '-'
            ,P07:doc.data.P07 !== '' ? doc.data.P07 : '-'
            ,P08:doc.data.P08 !== '' ? doc.data.P08 : '-'
            ,P09:doc.data.P09 !== '' ? doc.data.P09 : '-'
            ,P10:doc.data.P10 !== '' ? doc.data.P10 : '-'
            ,P11:doc.data.P11 !== '' ? doc.data.P11 : '-'
            ,P12:doc.data.P12 !== '' ? doc.data.P12 : '-'
            ,P13:doc.data.P13 !== '' ? doc.data.P13 : '-'
            ,P14:doc.data.P14 !== '' ? doc.data.P14 : '-'
            ,P15:doc.data.P15 !== '' ? doc.data.P15 : '-'
            ,P16:doc.data.P16 !== '' ? doc.data.P16 : '-'
            ,P17:doc.data.P17 !== '' ? doc.data.P17 : '-'
            ,id:doc.id
            ,key:key
        }
        this.toggle = this.toggle.bind(this);
    }
   
    toggle() {
        this.setState({
        modal: !this.state.modal
        });
    }

    render() {
      const {key,edad,P01,P02,P03,P04,P06,P07,P08,P09,P10,P11,P12,P13,P14,P15,P16,P17} =this.state
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
    return (
        <span>    
          <td>{key}</td><td onClick={()=>this.toggle()}>{P02}</td>
            
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle} close={closeBtn}>Datos Personales</ModalHeader>
            <ModalBody>        
            <Card>
              <CardImg src={P04==='FEMENINO'? userfem : usermale} className="icosexo"  alt="fotopac" />
              <CardBody>
                  <Row>
                      <Col xs='7'>
                          <CardTitle><b>{P02}</b></CardTitle>  
                      </Col>
                      <Col xs='3'>
                          <CardTitle className="text-right"><b>HC N°</b></CardTitle>
                      </Col>
                      <Col xs='1'>
                          <CardTitle className="text-right"><b>{P01}</b></CardTitle>
                      </Col>
                  </Row>
                  <Table size="sm" borderless responsive>
                      <tbody>
                          <tr>
                              <td className="anchocol">Edad</td>
                              <td>{edad}</td>
                          </tr>
                          <tr>
                              <td>Alergias</td>
                              <td>{P12}</td>
                          </tr>
                          <tr>
                              <td>Enfermedades</td>
                              <td>{P14}</td>
                          </tr>
                          <tr>
                              <td>Medicamentos</td>
                              <td>{P13}</td>
                          </tr>
                          <tr>
                              <td>Motivo de consulta</td>
                              <td>{P11}</td>
                          </tr>
                          <tr>
                              <td>Examen Extraoral</td>
                              <td>{P15}</td>
                          </tr>
                          <tr>
                              <td>Examen Intraoral</td>
                              <td>{P16}</td>
                          </tr>
                          <tr>
                              <td>Fecha de Ingreso</td>
                              <td>{P03}</td>
                          </tr>
                          </tbody>
                      </Table>
                      <CardTitle><b>CONTACTO</b></CardTitle>
                      <Table size="sm" borderless responsive>
                          <tbody>
                          <tr>
                              <td className="anchocol">DNI</td>
                              <td>{P17}</td>
                          </tr>
                          <tr>
                              <td>Dirección</td>
                              <td>{P09}</td>
                          </tr>
                          <tr>
                              <td>Distrito</td>
                              <td>{P10}</td>
                          </tr>
                          <tr>
                              <td>Fijo</td>
                              <td>{P06}</td>
                          </tr>
                          <tr>
                              <td>Móvil</td>
                              <td>{P07}</td>
                          </tr>
                          <tr>
                              <td>Email</td>
                              <td>{P08}</td>
                          </tr>
                          </tbody>
                      </Table>
                  </CardBody>
              </Card>
            </ModalBody>
            <ModalFooter>
            <EdiPacModal doc={this.props.doc}/> 
            <DelPacModal doc={this.props.doc}/>
            </ModalFooter>
          </Modal>
        </span>
    )
  }
}
