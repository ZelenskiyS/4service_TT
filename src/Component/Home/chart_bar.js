import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class Chart_Bar extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Всего', 'Закрыто','В работе','Новый','Просрочен'],
                datasets:[
                    {
                        data:[978,815,5,10,200],
                        backgroundColor:['rgba(255, 224, 230, 1)',
                                         'rgba(215, 236, 251, 1)',
                                         'rgba(255, 216, 119, 1)',
                                         'rgba(100, 201, 201, 1)',
                                         'rgba(168, 129, 245, 0.5)'
                        ],
                    },
                ]
            }
        }
    }



    render(){
        return (
            <div className="chart">
                <HorizontalBar

                    data={this.state.chartData}
                    height={100}
                    width={600}
                    options={{
                        legend:{
                            display:false,
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart_Bar;
