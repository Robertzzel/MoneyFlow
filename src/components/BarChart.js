import '../BarChart.css'
import React from 'react'
import { Bar } from 'react-chartjs-2'

export default class BarChart extends React.Component{

    constructor(props){
        super(props)
        this.state={
            labels: [],
            data: [],
        }
        this.getData.bind(this)
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

    componentDidMount(){
        this.getData(this.props.url)
    }

    render(){
        return(
            <div className="bar-div">
                <Bar
                width={100}
                height={50}
                options={{ maintainAspectRatio: false }}
                data={{
                    labels: this.state.labels,
                    datasets:[
                        {
                            label: "Dataset 1",
                            data: this.state.data,
                        }
                    ]
                }}/>
            </div>
            
        )
    }
}