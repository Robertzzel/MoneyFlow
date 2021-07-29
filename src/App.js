import './App.css';
import React from 'react'
import Header from './components/Header'
import Chart from './components/Chart'
import Form from './components/Form'

export default class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      adaugare: false,
    }
  }

  AfisareCharSauForm=()=>{
    if(this.state.adaugare){
      return <Form/>
    }
    return <Chart/>
  }

  render(){
    return(
      <>
        <Header incarcaFormSauChart={(adaugare)=>{
          this.setState({
            adaugare: adaugare,
            })}}/>
        <this.AfisareCharSauForm/>
      </>
    )
  }
}
