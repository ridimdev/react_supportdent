import React, { Component } from 'react';
import db from './FirestoreConfig'
import Header from './com/Header'
import ListarPacientes from './com/ListarPacientes'

export default class App extends Component {
  constructor(){
    super();
    this.state={
        pacientes: []
      }
  }
  componentDidMount(){
    db.collection('P00').orderBy('P01','desc').onSnapshot((snapShots)=>{
        this.setState({
            pacientes:snapShots.docs.map(doc=>{
              return{id:doc.id,data:doc.data()}
            })
        })
    })
}
  render(){
    return (
      <div className="container">
          <Header/>
          <ListarPacientes pacientes={this.state.pacientes}/>
      </div>
    );
  }
}
