import React from 'react';
import { CustomInput, Form, FormGroup, Label,Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="P01">Nro. Historia</Label>
          <Input type="number" name="P01" id="P01" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="P02">Nombre Completo</Label>
          <Input type="text" name="P02" id="P02" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="P03">Fecha de Registro</Label>
          <Input type="date" name="P03" id="P03"/>
        </FormGroup>
        <FormGroup>
          <Label for="P04">Sexo</Label>
          <CustomInput type="select" id="P04" name="P04">
            <option value="">Seleccionar</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </CustomInput>
        </FormGroup>
        <FormGroup>
          <Label for="P05">Fecha de Nacimiento</Label>
          <Input type="date" name="P05" id="P05"/>
        </FormGroup>
        <FormGroup>
          <Label for="P06">Teléfono Fijo</Label>
          <Input type="number" name="P06" id="P06" placeholder=""/>
        </FormGroup>
        <FormGroup>
          <Label for="P07">Celular</Label>
          <Input type="number" name="P07" id="P07" placeholder=""/>
        </FormGroup>
        <FormGroup>
          <Label for="P08">Correo electrónico</Label>
          <Input type="email" name="P08" id="P08" placeholder=""/>
        </FormGroup>
        <FormGroup>
          <Label for="P09">Dirección</Label>
          <Input type="text" name="P09" id="P09" placeholder=""/>
        </FormGroup>
        <FormGroup>
          <Label for="P10">Distrito</Label>
          <CustomInput type="select" id="P10" name="P10">
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
          <Input type="text" name="P11" id="P11" placeholder=""/>
        </FormGroup>
        <FormGroup>
          <Label for="P12">Alergias</Label>
          <Input type="text" name="P12" id="P12" placeholder=""/>
        </FormGroup>
        <FormGroup>
          <Label for="P13">Medicamentos</Label>
          <Input type="text" name="P13" id="P13" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="P14">Enfermedades Familiares y Personales</Label>
          <Input type="text" name="P14" id="P14" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="P15">Examen Clinico Extraoral</Label>
          <Input type="text" name="P15" id="P15" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="P16">Examen Clinico Intraoral</Label>
          <Input type="text" name="P16" id="P16" placeholder="" />
        </FormGroup>
      </Form>
    );
  }
}