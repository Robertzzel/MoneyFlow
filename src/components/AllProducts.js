import React from 'react'
import '../AllProducts.css'
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
        }
    }

    handleDelete=(e,id)=>{
        e.preventDefault();
        alert(`del ${id}`)
    }

    handleEdit=(e,id)=>{
        e.preventDefault();
        alert(`edit ${id}`)
    }

    async getData(url){
        await fetch(url)
        .then((res)=>res.json())
        .then(rez=>{
            let listaLabels = []
            let listaData = []
            let listaMomente = []
            for(const i in rez){
                listaLabels.push(rez[i].nume)
                listaData.push(rez[i].pret)
                listaMomente.push(rez[i].data)
            }
            this.setState({
                labels: listaLabels,
                data: listaData,
                momente: listaMomente,
            })
            
        })
    }

    componentDidMount(){
        this.getData('http://localhost:8000/api/produse/')
    }

    render(){
        return(

            <div className="container lista overflow-auto">

                <table class="table">
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
                            <tr>
                                <th scope="row">{index}</th>
                                <td>{label}</td>
                                <td>{this.state.data[index]}</td>
                                <td>{this.state.momente[index]}</td>
                                <td>
                                <a onClick={e => this.handleDelete(e,index)} href=""><DeleteForeverIcon/></a>
                                <a onClick={e => this.handleEdit(e,index)} href=""><EditIcon/></a>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
                </table>  

            </div>
            
        )
    }
}