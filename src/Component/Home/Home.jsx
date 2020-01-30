import React, {Component} from 'react';
import './home.css'
import { Bar } from 'react-chartjs-2';
import Chart from "./Chart";
import Chart_Pie from "./chart_pie";
import Chart_Bar from "./chart_bar";

class Home extends Component {
    render() {
        let User='Filip';
        return (
            <div className="Wrapper">
                <div className="Wrapper__textArea">
                    <span className="Wrapper__textArea_Greetings">Hi {User},</span>
                    <span className="Wrapper__textArea_introduce">Checkout your latest project and their progres</span>
                </div>
                <div className="Wrapper__line"></div>
             <div className="Wrapper__Chart-box">
                <div className="Wrapper__Chart-box_chart_1"><Chart /></div>
                <div className="Wrapper__Chart-box_chart_2" ><Chart_Pie /></div>
                 <div className="Wrapper__Chart-box_chart_3" ><Chart_Bar /></div>
             </div>
            </div>
        );
    }
}

export default Home;
