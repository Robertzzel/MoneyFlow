import React from 'react'

export default class EditForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            nume: this.props.nume,
            pret: this.props.pret,
            data: this.props.data,
        }
    }

    render(){
        return(
            <>
                <td><input onChange={(e)=>this.setState({nume: e.target.value, pret: this.props.pret, data: this.props.data})} type="text" value={this.state.nume}/></td>
                <td><input onChange={(e)=>this.setState({nume: this.state.nume, pret: e.target.value, data: this.props.data})} type="number" step="0.01" value={this.state.pret}/></td>
                <td><input onChange={(e)=>this.setState({nume: this.state.nume, pret: this.props.pret, data: e.target.value})} type="date" value={this.state.data}/></td>
            </>
        )
    }
}