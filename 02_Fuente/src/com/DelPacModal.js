import React, { Component } from 'react'
import trash from '../ico/trash.svg'
import db from '../FirestoreConfig';
import {Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

export default class DelPacModal extends Component {
constructor(props) {
    super(props);
    let doc = this.props.doc
    this.state={
        id:doc.id
        ,modal:false
    }
    this.eliminar=this.eliminar.bind(this);
    this.toggle = this.toggle.bind(this);
}
    eliminar(e){
        e.preventDefault();
        const{id}=this.state
        db.collection('P00').doc(id).delete();
    }       

    toggle() {
        this.setState({
        Modal: !this.state.Modal,
        closeAll: false
        });
    }

  render() {

    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Eliminar <img src={trash} className="search" alt="enviar"></img></Button>
            <Modal isOpen={this.state.Modal} toggle={this.toggle}>
                <ModalBody><h5>¿Desea eliminar este paciente?</h5><br/>El cambio no podrá deshacerse</ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={this.eliminar}>Eliminar</Button>
                    <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
                </ModalFooter>
            </Modal>
      </div>
    )
  }
}