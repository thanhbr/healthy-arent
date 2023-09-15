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
import { statisticalBodyDate } from '../../contants';

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
        top: type === 'record' ? 70 : 30,
        bottom: type === 'record' ? 50 : 30,
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
      {type === 'record' &&
        <div className='absolute mt-[16px] ml-[24px] flex'>
          <p className=' text-light font-thin text-[15px] w-[80px]'>
            BODY RECORD
          </p>
          <p className='text-light text-[22px] font-normal'>2021.05.21</p>
        </div>
      }
      <Line 
        data={data} 
        options={options}
        plugins={[plugin]}
      />
      {type === 'record' && (
        <div className='flex gap-[16px]'>
          {statisticalBodyDate.map(date => (
            <p 
              key={date?.id}
              className={`w-[56px] h-[26px] rounded-[11px] ${date.active ? 'bg-primary_300' : 'bg-light'} text-center mt-[-42px] ml-[24px] cursor-pointer`}
            >
              {date?.title || '---'}
            </p>
          ))}
        </div>
      )}
    </>
  )
} 

export default LineChart