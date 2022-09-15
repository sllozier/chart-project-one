import React, { useEffect, useRef } from 'react';
import Chartjs from 'chart.js/auto';

const chartConfig = {
    type: 'bar',
    data: {

    },
    options: {

    }
};

const Chart = () => {
    const chartContainer = useRef(null);
    const [ chartInstance, setChartInstance ] = useState(null);

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
            setChartInstance(newChartInstance);
        }
    }, [chartContainer]);

    return (
        <div>
            <canvas ref={chartContainer} />
        </div>
    )

}

export default Chart;