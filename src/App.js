import './App.css';
import React from 'react'
import Header from './components/Header'
import AllProducts from './components/AllProducts';
import PieChart from './components/PieChart'
import Form from './components/Form'

export default class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      vizualizare: "saptamanal",
    }
  }

  AfisareCharSauForm=()=>{
    if(this.state.vizualizare === 'form'){
      return <Form/>
    }else if(this.state.vizualizare==='saptamanal'){
      return <PieChart key="1" url={'http://localhost:8000/api/produse-ultima_saptamana/'}/>
      
    }else if(this.state.vizualizare==='lunar'){
      return <PieChart key="2" url={'http://localhost:8000/api/produse-ultima_luna/'}/>

    }else if(this.state.vizualizare.includes('luni') === true){
      return <PieChart key={this.state.vizualizare.split("_")[0]} url={'http://localhost:8000/api/produse-luna/'+this.state.vizualizare.split("_")[0]+"/"}/>
    
    }else if(this.state.vizualizare === 'toate'){
      return <AllProducts />
    }
      
  }

  render(){
    return(
      <>
        <Header incarcaFormSauChart={(vizualizare)=>{
          this.setState({
            vizualizare: vizualizare,
            })}}/>
        <this.AfisareCharSauForm/>
      </>
    )
  }
}
