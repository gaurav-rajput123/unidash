import CanvasJSReact from './canvasjs.react'
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
    animationEnabled: true,
    title:{
        text: "Teacher Earnings"
    },
    axisX: {
        valueFormatString: "YYYY"
    },
    axisY: {
        title: "Sales (in ₹)",
        prefix: "₹"
    },
    data: [{
        yValueFormatString: "₹#,###",
        xValueFormatString: "YYYY",
        type: "spline", 
        dataPoints: [
            { x: new Date(2009, 0), y: 25060 },
            { x: new Date(2010, 1), y: 27980 },
            { x: new Date(2011, 2), y: 42800 },
            { x: new Date(2012, 3), y: 32400 },
            { x: new Date(2013, 4), y: 35260 },
            { x: new Date(2014, 5), y: 33900 },
            { x: new Date(2015, 6), y: 40000 },
            { x: new Date(2016, 7), y: 52500 },
            { x: new Date(2017, 8), y: 32300 },
            { x: new Date(2018, 9), y: 42000 },
            { x: new Date(2019, 10), y: 37160 },
            { x: new Date(2020, 11), y: 38400 }
        ]
    }]
}

function DataChart(){
    return (
        <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>

    )
}

export default DataChart