import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['30.05', '31.05', '01.06', '02.06', '03.06', '04.06','05.06','06.06','07.06','08.06','09.06'],
                datasets:[
                    {
                        label:'Working hours',
                        data:[40, 45, 39, 42, 37, 46, 42, 45, 39, 43, 40, 45],
                        backgroundColor:'rgba(233, 68, 141, 0.6)',
                    },
                    {
                        label:'Working hours 2',
                        data:[43, 39, 48, 44, 39, 37,45.5, 40, 45, 37, 41, 42],
                        backgroundColor:'rgba(215, 169, 223, 0.6)',
                    }
                ]
            }
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'top',
    }

    render(){
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    height={100}
                    options={{
                        title:{
                            display:true,
                            text:'Wavy lines',
                            fontSize:25
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    maxTicksLimit:60,
                                    stepSize:15
                                }
                            }]
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;
