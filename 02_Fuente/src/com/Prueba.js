import React, { Component } from 'react'
import Tituloprueba from './Tituloprueba';

export default class Prueba extends Component {
    render() {
      return (
      <div>
        <Tituloprueba titulito={this.props.title}/>
      </div>
    )
  }
}
