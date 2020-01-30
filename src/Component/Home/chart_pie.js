import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class Chart_Pie extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['да', 'нет'],
                datasets:[
                    {
                        label:['да','нет'],
                        data:[1,1],
                        backgroundColor:['rgba(255, 228, 1, 1)','rgba(242, 101, 30, 1)'],
                    },
                ]
            }
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'left',
    }

    render(){
        return (
            <div className="chart">
                <Doughnut
                    data={this.state.chartData}
                    height={100}
                    options={{
                        cutoutPercentage:75,
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

export default Chart_Pie;
