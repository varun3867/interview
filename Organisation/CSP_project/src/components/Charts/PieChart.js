import React, { Component } from 'react';
import CanvasJSReact from '../../assets/Chart/canvasjs.react';
import classes from  '../common/common.css';
import {Header} from '../TileComponents/TileHeader';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class PieChart extends Component {
		render() {
		const options = {
			width:400,
			height:200,
			
			title: {
				text: "Outcome of Plant per Month",
				fontFamily: "Trebuchet MS",
				fontWeight:"bold"
			},
			animationEnabled: true,
			data: [
			{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
                indexLabel: "{label} - {y}",
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
		
		return (
		<div className={classes.split} style={{height:200,width:400}}>
			<div style={{marginTop:-17}}><Header name="Pie Chart"/></div>
			{/* <h1>React Pie Chart</h1> */}
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
		</div>
		);
	}
}

export default PieChart;