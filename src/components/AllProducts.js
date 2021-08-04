import React from 'react'
import '../AllProducts.css'
import EditForm from './EditForm'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

export default class AllProducts extends React.Component{

    constructor(props){
        super(props)
        this.getData.bind(this)
        this.state={
            labels: [],
            data: [],
            momente: [],
            ids: [],
        }
        this.modificare = false
        this.nrDeModificat = 1

        this.formRef = React.createRef() //referinta prin care putem accesa stateul unui fiu(in cazul asta a formului)
    }

    handleDelete=(e,id)=>{
        e.preventDefault();
        let requestOptions={
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id: id,
            })
        }
        fetch('http://localhost:8000/api/adauga-produs/',requestOptions).then((res)=>console.log(res.json()))
        .then(()=>this.getData('http://localhost:8000/api/produse/'))
    }

    switchRow=(e=undefined,nrDeModificat=0)=>{
        if(e !== undefined)
            e.preventDefault();
        this.modificare = !this.modificare
        this.nrDeModificat = nrDeModificat

        this.forceUpdate()
    }

    handleEdit=(id)=>{
        
        let currentFormState = this.formRef.current.state
        let requestOptions={
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id: id,
                nume: currentFormState.nume,
                pret: currentFormState.pret,
                data: currentFormState.data ,
            })
        }
        fetch('http://localhost:8000/api/adauga-produs/',requestOptions).then((res)=>console.log(res.json()))
        .then(()=>this.getData('http://localhost:8000/api/produse/'))
        this.switchRow()
    }

    async getData(url){
        await fetch(url)
        .then((res)=>res.json())
        .then(rez=>{
            let listaLabels = []
            let listaData = []
            let listaMomente = []
            let listaIds = []
            for(const i in rez){
                listaIds.push(rez[i].id)
                listaLabels.push(rez[i].nume)
                listaData.push(rez[i].pret)
                listaMomente.push(rez[i].data)
            }
            this.setState({
                labels: listaLabels,
                data: listaData,
                momente: listaMomente,
                ids: listaIds,
            })
            
        })
    }

    componentDidMount(){
        this.getData('http://localhost:8000/api/produse/')
    }

    render(){

        console.log(`${this.nrDeModificat}_${this.modificare}`)
        return(

            <div className="container lista overflow-auto">

                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nume</th>
                    <th scope="col">Pret</th>
                    <th scope="col">Data</th>
                    <th scope="col">Optiuni</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {this.state.labels.map((label,index)=>{
                        return(
                            <tr key={this.state.ids[index]}>
                                <th scope="row">{index}</th>
                                { this.modificare===true && this.nrDeModificat===this.state.ids[index]
                                    ?
                                        <>
                                            <EditForm ref={this.formRef} nume={label} pret={this.state.data[index]} data={this.state.momente[index]}/>
                                            <td>
                                                <button className='btn btn-info' onClick={()=>this.handleEdit(this.state.ids[index])}>SALVEAZA</button>
                                                <a onClick={e => this.switchRow(e,this.state.ids[index])} href=""><EditIcon/></a>
                                            </td>
                                        </>
                                    :
                                        <>
                                        <td>{label}</td>
                                        <td>{this.state.data[index]}</td>
                                        <td>{this.state.momente[index]}</td>
                                        <td>
                                            <a onClick={e => this.handleDelete(e,this.state.ids[index],label,this.state.data[index],this.state.momente[index])} href=""><DeleteForeverIcon/></a>
                                            <a onClick={e => this.switchRow(e,this.state.ids[index])} href=""><EditIcon/></a>
                                        </td>
                                        </>
                                }
                            </tr>
                        )
                    })}

                </tbody>
                </table>  

            </div>
            
        )
    }
}