import './App.css';
import React from 'react'
import Header from './components/Header'
import BarChart from './components/BarChart';
import PieChart from './components/PieChart'
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
      return <PieChart key="1" url={'http://localhost:8000/api/produse-ultima_saptamana/'}/>
      
    }else if(this.state.vizualizare==='lunar'){
      return <PieChart key="2" url={'http://localhost:8000/api/produse-ultima_luna/'}/>

    }else if(this.state.vizualizare.includes('luni')){
      return <PieChart key={this.state.vizualizare.split("_")[0]} url={'http://localhost:8000/api/produse-luna/'+this.state.vizualizare.split("_")[0]+"/"}/>
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
