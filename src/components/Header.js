import React from 'react'
import '../Header.css'

export default class Header extends React.Component{

    incarcaFormSauChart=(e,adaugare)=>{
        e.preventDefault();
        this.props.incarcaFormSauChart(adaugare)
    }
    
    render(){
        return(
            <div className="container-fluid header">
                <div className="row">
                    <div className="col text-center">
                        <a onClick={ e =>{this.incarcaFormSauChart(e,false)}} href=""><h3>SAPTAMANAL</h3></a>
                    </div>
                    <div className="col text-center">
                        <a onClick={ e =>{this.incarcaFormSauChart(e,false)}} href=""><h3>LUNAR</h3></a>
                    </div>
                    <div className="col text-center">
                        <a onClick={ e =>{this.incarcaFormSauChart(e,true)}} href=""><h3>ADAUGA</h3></a>
                    </div>
                </div>
            </div>
        )
    }
}