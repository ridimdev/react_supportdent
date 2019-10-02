import React from 'react';
import { Row,Col,Button, Modal, ModalHeader, ModalBody, ModalFooter,Label,Input,FormGroup,Form,CustomInput
  //,FormFeedback 
} from 'reactstrap';
import icoplus from '../ico/plus.svg';
import db from '../FirestoreConfig';
import moment from 'moment';
import './listarpacientes.css'
// import { Date } from 'core-js';

export default class UpdPacModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal:false
      ,P01V:''
      ,P02V:''
      ,P03V:moment().format('DD/MM/YYYY')
      ,P04V:''
      ,P05V:''
      ,P06V:''
      ,P07V:''
      ,P08V:''
      ,P09V:''
      ,P10V:''
      ,P11V:''
      ,P12V:''
      ,P13V:''
      ,P14V:''
      ,P15V:''
      ,P16V:''
      ,P17V:''
    };
    this.toggle = this.toggle.bind(this);
    this.changeP02V = this.changeP02V.bind(this);
    this.changeP04V = this.changeP04V.bind(this);
    this.changeP05V = this.changeP05V.bind(this);
    this.changeP06V = this.changeP06V.bind(this);
    this.changeP07V = this.changeP07V.bind(this);
    this.changeP08V = this.changeP08V.bind(this);
    this.changeP09V = this.changeP09V.bind(this);
    this.changeP10V = this.changeP10V.bind(this);
    this.changeP11V = this.changeP11V.bind(this);
    this.changeP12V = this.changeP12V.bind(this);
    this.changeP13V = this.changeP13V.bind(this);
    this.changeP14V = this.changeP14V.bind(this);
    this.changeP15V = this.changeP15V.bind(this);
    this.changeP16V = this.changeP16V.bind(this);
    this.changeP17V = this.changeP17V.bind(this);
    this.guardar=this.guardar.bind(this);
  }

toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
 
componentDidMount(){
  db.collection('P00').onSnapshot((snapShots)=>{
        this.setState({P01V:snapShots.docs.length+1})
    })
    //falta implementar focus en P02
}

changeP02V(event){
  this.setState({P02V:event.target.value.toUpperCase().substring(0,50)});
}

//P03V  está en el metodo de agregar

changeP04V(event){
  this.setState({P04V:event.target.value});
}

changeP05V(event){
  this.setState({P05V:event.target.value});
}

changeP06V(event){ 
  this.setState({P06V:event.target.value.substring(0,7)});
}

changeP07V(event){
  this.setState({P07V:event.target.value.substr(0,9)});
}

changeP08V(event){
  this.setState({P08V:event.target.value.substring(0,50)});
}

changeP09V(event){
  this.setState({P09V:event.target.value.toUpperCase().substring(0,100)});
}

changeP10V(event){
  this.setState({P10V:event.target.value});
}

changeP11V(event){
  this.setState({P11V:event.target.value.toUpperCase().substr(0,50)});
}

changeP12V(event){
  this.setState({P12V:event.target.value.toUpperCase().substr(0,50)});
}

changeP13V(event){
  this.setState({P13V:event.target.value.toUpperCase().substr(0,50)});
}

changeP14V(event){
  this.setState({P14V:event.target.value.toUpperCase().substr(0,50)});
}

changeP15V(event){
  this.setState({P15V:event.target.value.toUpperCase().substr(0,50)});
}

changeP16V(event){
  this.setState({P16V:event.target.value.toUpperCase().substr(0,50)});
}

changeP17V(event){
  this.setState({P17V:event.target.value.substr(0,8)});
}

guardar(){
  this.toggle();
  const{P01V,P02V,P03V,P04V,P05V,P06V,P07V,P08V,P09V,P10V,P11V,P12V,P13V,P14V,P15V,P16V,P17V}=this.state;
  console.log('historia: '+P01V+',\n nom: '+ P02V+',\n fec reg: '+ P03V+',\n fec nac: '+ P05V+',\n sexo: '+ P04V+',\n dni: '+ P17V
              +',\n celular: '+ P07V+',\n fijo: '+ P06V+',\n correo: '+ P08V+',\n direccion: '+ P09V+',\n distrito: '+ P10V
              +',\n motivo consulta: '+ P11V+',\n alergias: '+ P12V+',\n medicamentos: '+ P13V+',\n enfermedades: '+ P14V
              +',\n ex extraoral: '+ P15V+',\n ex intraoral: '+ P16V)
  db.collection('P00').add({
     P01:P01V
    ,P02:P02V
    ,P03:P03V
    ,P04:P04V
    ,P05:moment(P05V).format('DD/MM/YYYY')
    ,P06:P06V
    ,P07:P07V
    ,P08:P08V
    ,P09:P09V
    ,P10:P10V
    ,P11:P11V
    ,P12:P12V
    ,P13:P13V
    ,P14:P14V
    ,P15:P15V
    ,P16:P16V
    ,P17:P17V
  }).then(()=>{
    console.log('Agregado')
  }).catch(()=>{
    console.log('Error')
  })
}

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
      const{P01V,P02V,P04V,P05V,P06V,P07V,P08V,P09V,P10V,P11V,P12V,P13V,P14V,P15V,P16V,P17V}=this.state;
      return (   
      <div>
         <Button outline color="danger" onClick={this.toggle}>Nuevo <img src={icoplus} className="plus" alt="plus"></img></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className=''>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Registrar Paciente</ModalHeader>
          <ModalBody>
            <Form>
              <Row form>
              <Col md={6}>
                  <FormGroup>
                    <Label for="P03">Fecha de Registro</Label>
                    <Input className="text-right" type="text" name="P03" id="P03" value={moment().format('DD/MM/YYYY')} disabled/>
                  </FormGroup>                  
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="P01">Nro. Historia</Label>
                    <Input className="text-right" type="text" name="P01" id="P01" value={P01V} disabled/>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="P02">Nombres y Apellidos</Label>
                <Input required type="text" name="P02" id="P02" value={P02V} onChange={this.changeP02V}/>
              </FormGroup>
              <Row form>
                <Col md={5}>
                  <FormGroup>
                    <Label for="P05">Fecha de Nacimiento</Label>
                    <Input type="date" name="P05" id="P05" value={P05V} onChange={this.changeP05V}/>
                  </FormGroup>   
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="P04">Sexo</Label>
                    <CustomInput type="select" id="P04" name="P04" value={P04V} onChange={this.changeP04V}>
                      <option value="">Seleccionar</option>
                      <option value='MASCULINO'>Masculino</option>
                      <option value='FEMENINO'>Femenino</option>
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="P17">DNI</Label>
                    <Input type="number" name="P17" id="P17" value={P17V} onChange={this.changeP17V} />
                  </FormGroup>   
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="P07">Celular</Label>
                    <Input type="number" name="P07" id="P07" value={P07V} onChange={this.changeP07V} />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="P06">Teléfono Fijo</Label>
                    <Input type="number" name="P06" id="P06" value={P06V} onChange={this.changeP06V}/>
                  </FormGroup>                  
                </Col>
              </Row>
              <FormGroup>
                <Label for="P08">Correo electrónico</Label>
                <Input type="email" name="P08" id="P08" value={P08V} onChange={this.changeP08V}/>
              </FormGroup>
              <FormGroup>
                <Label for="P09">Dirección</Label>
                <Input type="text" name="P09" id="P09" value={P09V} onChange={this.changeP09V}/>
              </FormGroup>
              <FormGroup>
                <Label for="P10">Distrito</Label>
                <CustomInput type="select" id="P10" name="P10" value={P10V} onChange={this.changeP10V}>
                  <option value="">Seleccionar</option>
                  <option value="ANCON">Ancón‎</option>
                  <option value="ATE">Ate</option>
                  <option value="BARRANCO">Barranco</option>
                  <option value="BRENA">Breña‎</option>
                  <option value="CARABAYLLO">Carabayllo</option>
                  <option value="CHACLACAYO">Chaclacayo</option>
                  <option value="CHORRILLOS">Chorrillos‎</option>
                  <option value="CIENEGUILLA">Cieneguilla‎</option>
                  <option value="COMAS">Comas</option>
                  <option value="EL AGUSTINO">El Agustino</option>
                  <option value="INDEPENDENCIA">Independencia</option>
                  <option value="JESUS MARIA">Jesús María</option>
                  <option value="LA MOLINA">La Molina</option>
                  <option value="LA VICTORIA">La Victoria</option>
                  <option value="LIMA">Lima‎</option>
                  <option value="LINCE">Lince</option>
                  <option value="LOS OLIVOS">Los Olivos</option>
                  <option value="LURIGANCHO-CHOSICA">Lurigancho-Chosica</option>
                  <option value="LURIN">Lurín</option>
                  <option value="MAGDALENA DEL MAR">Magdalena del Mar</option>
                  <option value="MIRAFLORES">Miraflores</option>
                  <option value="PACHACAMAC">Pachacámac</option>
                  <option value="PUCUSANA">Pucusana</option>
                  <option value="PUEBLO LIBRE">Pueblo Libre</option>
                  <option value="PUENTE PIEDRA">Puente Piedra</option>
                  <option value="PUNTA HERMOSA">Punta Hermosa‎</option>
                  <option value="PUNTA NEGRA">Punta Negra‎</option>
                  <option value="RIMAC">Rímac‎</option>
                  <option value="SAN BARTOLO">San Bartolo‎</option>
                  <option value="SAN BORJA">San Borja</option>
                  <option value="SAN ISIDRO">San Isidro</option>
                  <option value="SAN JUAN DE LURIGANCHO">San Juan de Lurigancho</option>
                  <option value="SAN JUAN DE MIRAFLORES">San Juan de Miraflores</option>
                  <option value="SAN LUIS">San Luis</option>
                  <option value="SAN MARTIN DE PORRES">San Martín de Porres‎</option>
                  <option value="SAN MIGUEL">San Miguel</option>
                  <option value="SANTA ANITA">Santa Anita</option>
                  <option value="SANTA MARIA DEL MAR">Santa María del Mar</option>
                  <option value="SANTA ROSA">Santa Rosa</option>
                  <option value="SANTIAGO DE SURCO">Santiago de Surco</option>
                  <option value="SURQUILLO">Surquillo</option>
                  <option value="VILLA EL SALVADOR">Villa El Salvador</option>
                  <option value="VILLA MARIA DEL TRIUNFO">Villa María del Triunfo‎</option>
                </CustomInput>
              </FormGroup>
              <FormGroup>
                <Label for="P11">Motivo de Consulta</Label>
                <Input type="text" name="P11" id="P11" value={P11V} onChange={this.changeP11V}/>
              </FormGroup>
              <FormGroup>
                <Label for="P12">Alergias</Label>
                <Input type="text" name="P12" id="P12" value={P12V} onChange={this.changeP12V}/>
              </FormGroup>
              <FormGroup>
                <Label for="P13">Medicamentos</Label>
                <Input type="text" name="P13" id="P13"  value={P13V} onChange={this.changeP13V}/>
              </FormGroup>
              <FormGroup>
                <Label for="P14">Enfermedades Familiares y Personales</Label>
                <Input type="text" name="P14" id="P14"  value={P14V} onChange={this.changeP14V}/>
              </FormGroup>
              <FormGroup>
                <Label for="P15">Examen Clinico Extraoral</Label>
                <Input type="text" name="P15" id="P15" value={P15V} onChange={this.changeP15V} />
              </FormGroup>
              <FormGroup>
                <Label for="P16">Examen Clinico Intraoral</Label>
                <Input type="text" name="P16" id="P16" value={P16V} onChange={this.changeP16V} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="info" onClick={this.guardar}>Registrar</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}