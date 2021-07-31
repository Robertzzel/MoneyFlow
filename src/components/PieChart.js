import React from "react";
import '../PieChart.css'
import { Pie } from 'react-chartjs-2'

export default class PieChart extends React.Component{

    constructor(props){
        super(props)
        this.state={
            labels: [],
            data: []
        }
        this.getData.bind(this)
    }

    getArrayWithColors=(numberOfColors)=> {
        var letters = '0123456789ABCDEF';
        var finalArray = []
        for(let _ = 0;_<numberOfColors;_++){
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            finalArray.push(color);
        }
        return finalArray;
    }

    componentDidMount(){
        this.getData(this.props.url)
        
    }


    async getData(url){
        await fetch(url)
        .then((res)=>res.json())
        .then(rez=>{
            let listaLabels = []
            let listaData = [] 
            for(const i in rez){
                listaLabels.push(rez[i].nume)
                listaData.push(rez[i].pret)
            }
            this.setState({
                labels: listaLabels,
                data: listaData
            })
            
        })
    }

    render(){

        return(
            <div className="pie-div">
                <Pie
                width={100}
                height={100}
                 data={{
                    labels: this.state.labels,
                    datasets: [
                        {
                            label:"valori",
                            data: this.state.data,
                            backgroundColor: this.getArrayWithColors(this.state.data.length),
                        }
                    ]
                }}/>
            </div>
        )
    }
}