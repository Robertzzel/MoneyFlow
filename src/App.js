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
      vizualizare: "saptamanal",
    }
  }

  AfisareCharSauForm=()=>{
    if(this.state.adaugare){
      return <Form/>
    }else if(this.state.vizualizare==='saptamanal'){
      return <Chart key="1" vizualizare='saptamanal'/>
      
    }else if(this.state.vizualizare==='lunar'){
      return <Chart key="2" vizualizare='lunar'/>
    }
      
  }

  render(){
    return(
      <>
        <Header incarcaFormSauChart={(adaugare,vizualizare)=>{
          this.setState({
            adaugare: adaugare,
            vizualizare: vizualizare,
            })}}/>
        <this.AfisareCharSauForm/>
      </>
    )
  }
}
