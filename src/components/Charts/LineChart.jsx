import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const LineChart = () => {
  var data = {
    labels: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
    datasets: [{
      label: '',
      data: [39, 35, 30, 28, 23, 22, 20, 19,17,13,10,0],
      backgroundColor: [
        '#8FE9D0',
        '#8FE9D0',
        '#8FE9D0',
        '#8FE9D0',
        '#8FE9D0',
        '#8FE9D0',
        '#8FE9D0',
      ],
      borderColor: [
        '#8FE9D0',
        '#8FE9D0',
        '#8FE9D0',
        '#8FE9D0',
        '#8FE9D0',
        '#8FE9D0',
        '#8FE9D0',
      ],
      borderWidth: 3
    },
    {
      labels: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
      data: [39, 37, 28, 32, 30, 27, 31, 26,25,24,23,25],
      backgroundColor: [
        '#FFCC21',
        '#FFCC21',
        '#FFCC21',
        '#FFCC21',
        '#FFCC21',
        '#FFCC21',
      ],
      borderColor: [
        '#FFCC21',
        '#FFCC21',
        '#FFCC21',
        '#FFCC21',
        '#FFCC21',
        '#FFCC21',
      ],
      borderWidth: 3
    }]
  };

  var options = {
    responsive: true,
    maintainAspectRatio: false, 
    legend: {
      labels: {
        fontSize: 25,
      },
    },
    customCanvasBackgroundColor: {
      color: '#2E2E2E',
    },
    display: false,
    showLabelBackdrop: false,
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: true, 
          color: 'white'
        },
        ticks: {
          color: 'white',
          font: {
            size: 16
          },
        }
      },
      y: {
        display: false,
        grid: {
          display: false, // <-- this removes y-axis line
          lineWidth: 5
        },
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 30,
        bottom: 30,
      },
    }
  }

  const plugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
      const {ctx} = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = options.color || '#2E2E2E';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };


  return (
    <Line 
      data={data}
      // height={250}
      options={options}
      plugins={[plugin]}
    />
  )
}

export default LineChart