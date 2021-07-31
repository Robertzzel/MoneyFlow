import React from 'react'
import '../Header.css'

export default class Header extends React.Component{

    incarcaFormSauChart=(e,adaugare,vizualizare)=>{
        e.preventDefault();
        this.props.incarcaFormSauChart(adaugare,vizualizare)
    }
    
    render(){
        return(
            <div className="container-fluid header">
                <div className="row">
                    <div className="col text-center">
                        <a onClick={ e =>{this.incarcaFormSauChart(e,false,'saptamanal')}} href=""><h3>ULTIMA<br/>SAPTAMANA</h3></a>
                    </div>
                    <div className="col text-center">
                        <a onClick={ e =>{this.incarcaFormSauChart(e,false,'lunar')}} href=""><h3>ULTIMA<br/>LUNA</h3></a>
                    </div>
                    <div className="col text-center">
                        <a onClick={ e =>{this.incarcaFormSauChart(e,true)}} href=""><h3>ADAUGA</h3></a>
                    </div>
                </div>
            </div>
        )
    }
}