import React, { useEffect, useRef, useState } from "react";
import Chart from 'chart.js/auto';


const randomInt = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;

const chartConfig = {
    type: 'bar',
    data: {
        labels: [ 'red', 'blue', 'yellow', 'green', 'purple', 'orange' ],
        datasets: [
            {
                label: '# of Votes',
                data: [ 12, 19, 3, 5, 2, 3 ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
        ]
    },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    };



function App(){
    const chartContainer = useRef(null);
    const [ chartInstance, setChartInstance ] = useState(null);

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const newChartInstance = new Chart(chartContainer.current, chartConfig);
            setChartInstance(newChartInstance);
        }
    }, [chartContainer]);

    const updateDataset = (datasetIndex, newData) => {
        chartInstance.data.datasets[datasetIndex].data = newData;
        chartInstance.update();
    };

    const onButtonClick = () => {
        const data = [
            randomInt(),
            randomInt(),
            randomInt(),
            randomInt(),
            randomInt(),
            randomInt(),
        ];
        updateDataset(0, data);
    }


    return(
        
       <div id='main'>
            <div className='column container'>
                <div id='header'>
                    <h1>Title of Project</h1>
                    {/* <Navbar/> */}
                </div>
            </div>
            <button onClick={onButtonClick}>Randomize!</button>
            <canvas ref={chartContainer} />
       </div>
       
    )
}

export default App;