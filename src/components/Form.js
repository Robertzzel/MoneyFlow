import React from 'react'
import '../Form.css'

export default class Form extends React.Component{

    constructor(props){
        super(props)
        this.nume = "";
        this.pret = "";
        this.data = new Date();
    }

    componentDidMount(){
        document.getElementById('data_produsului').valueAsDate = new Date();
    }

    submit=(e)=>{
        e.preventDefault();
        if(this.nume === ""){
            alert("Introduceti numele")
        }else if(this.pret === ""){
            alert("Introdu pretul")
        }else{
            //call API
            let requestOptions={
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    nume: this.nume,
                    pret: this.pret,
                    data: `${this.data.getDate()}-${this.data.getMonth()}-${this.data.getFullYear()}`
                })
            }
            fetch('http://localhost:8000/api/adauga-produs/',requestOptions).then((res)=>console.log(res.json()))
        }
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={(e)=>{this.submit(e)}}>
                    <div className="form-group">
                        <label >Numele produsului</label>
                        <input onChange={(e)=>{this.nume=e.target.value}} type="text" className="form-control" id="numele_produsului" placeholder="Numele produsului"/>
                    </div>
                    <div className="form-group">
                        <label>Pretul produsului</label>
                        <input onChange={(e)=>{this.pret=e.target.value}} type="number" className="form-control" id="pretul_produsului" placeholder="Pretul produsului"/>
                    </div>
                    <div className="form-group">
                        <label>Data</label>
                        <input onChange={(e)=>{this.data=e.target.value}} type="date" className="form-control" id="data_produsului" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}