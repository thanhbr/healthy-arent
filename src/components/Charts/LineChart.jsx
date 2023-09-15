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

const LineChart = ({dataChart, type}) => {
  var data = {
    labels: dataChart?.labels || [],
    datasets: dataChart?.data?.map(item => {
      return {
        data: item?.data,
        backgroundColor: item?.data?.map(bg => {
          return item.color
        }),
        borderColor: item?.data?.map(bg => {
          return item.color
        }),
        borderWidth: 3
      }
    }) 
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
    <>
      <Line 
        data={data} 
        options={options}
        plugins={[plugin]}
      />
    </>
  )
} 

export default LineChart