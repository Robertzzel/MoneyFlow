import React from 'react'
import '../Header.css'

export default class Header extends React.Component{

    constructor(props){
        super(props)
        this.luni = 0
    }

    incarcaFormSauChart=(e,vizualizare)=>{
        e.preventDefault();
        this.props.incarcaFormSauChart(vizualizare)
    }
    
    render(){
        return(
            <div className="container-fluid header">
                <div className="row">
                    <div className="col text-center">
                        <a className='link_header' onClick={ e =>{this.incarcaFormSauChart(e,'saptamanal')}} href=""><h3>ULTIMA<br/>SAPTAMANA</h3></a>
                    </div>

                    <div className="col text-center">
                        <a className='link_header' onClick={ e =>{this.incarcaFormSauChart(e,'lunar')}} href=""><h3>ULTIMA<br/>LUNA</h3></a>
                    </div>

                    <div className="col text-center">
                        <a className='link_header' onClick={ e =>{this.incarcaFormSauChart(e,`${this.luni}_luni`)}} href=""><h3>ACUM<br/><span id="input_text"><input onChange={(e)=>{this.luni=e.target.value}} type="number" id="cate_luni"/> LUNI</span></h3></a>
                    </div>

                    <div className="col text-center">
                        <a className='link_header' onClick={ e =>{this.incarcaFormSauChart(e,'toate')}} href=""><h3>TOATE<br/>PRODUSELE</h3></a>
                    </div>

                    <div className="col text-center">
                        <a className='link_header' onClick={ e =>{this.incarcaFormSauChart(e,'form')}} href=""><h3>ADAUGA</h3></a>
                    </div>
                </div>
            </div>
        )
    }
}