import React, { Component } from 'react';
import CanvasJSReact from '../../assets/Chart/canvasjs.react';
import classes from  '../common/common.css';
import {Header} from '../TileComponents/TileHeader';

let CanvasJSChart = CanvasJSReact.CanvasJSChart;
let updateInterval = 1000;
let dps;
let options;

class DynamicChart extends Component {
    componentDidMount(){
        setInterval(this.updateChart, updateInterval);
    }
    updateChart=()=> {
        let deltaY, yVal;
        dps = this.chart.options.data[0].dataPoints;
        for (let i = 0; i < dps.length; i++) {
            deltaY = Math.round(20 + Math.random() *(-20-20));
            yVal = deltaY + dps[i].y > 0 ? (deltaY + dps[i].y > 350 ? dps[i].y + deltaY : 350) : 0;
            
            if(i===0){
                dps[i] = {y: yVal,label:"Apple"};
            }
            else if(i===1){
                dps[i] = {y: yVal,label:"Organe"};
            }
            else if(i===2){
                dps[i] = {y: yVal,label:"Banana"};
            }
            else if(i===3){
                dps[i] = {y: yVal,label:"Mango"};
            }
            else{
                dps[i] = {y: yVal,label:"Grape"};
            }
        }
        this.chart.options.data[0].dataPoints = dps;
        this.chart.render();
    }
		render() {
            
		options = {
            width:400,
			height:200,
			title: {
                fontFamily: "Trebuchet MS",
				fontWeight:"bold",
				text: "Outcome of Plant per Month"
			},
            animationEnabled: true,
            axisX:{
                labelFontFamily: "Trebuchet MS"
              },
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
                type: "bar",
                // labelFontFamily: "Trebuchet MS",
				dataPoints: [
					{ label: "Apple",  y: 500  },
					{ label: "Orange", y: 350  },
					{ label: "Banana", y: 1000  },
					{ label: "Mango",  y: 1200  },
					{ label: "Grape",  y: 980  }
				]
			}
			]
        }
        // dps = this.chart.options.data[0].dataPoints;
		
		return (
		<div className={classes.split} style={{height:200,width:400}}> 
            <div style={{backgroundColor:'lightgrey',marginTop:-17}}><Header name="Dynamic Bar Chart"/> </div> 
			{/* <h1>React Dynamic Bar Chart</h1> */}
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref} 
			/>
		</div>
        );
       
	}
}

export default DynamicChart;
