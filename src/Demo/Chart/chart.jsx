import React from 'react'
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

function Chart(){
  const state = {
    labels: ['January', 'February', 'March',
      'April', 'May'],
    datasets: [
      {
        label: '你好啊',
        backgroundColor: [
          'rgba(75,192,192,0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255,99,132,0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'black',
        ],    
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
      {
        type: 'line', 
        label: '新開發客戶',
        data: [25, 13, 30, 32, 23],
        backgroundColor: 'black'
      }
    ],
  }
  const linestate = {
    labels: ['January', 'February', 'March',
      'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
  const pieState = {
    labels: ['January', 'February', 'March',
      'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F'
        ],
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
  return (
    <div>
      <div style={{ width: '600px' }}>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
      <div style={{ width: '600px' }}>
        <Line
          data={linestate}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
      <div>

      </div>
      <div style={{ width: '300px' , display: 'flex' }}>
        <Pie
          data={pieState}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        <Doughnut
          data={pieState}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
      
    </div>
  )
}

export default Chart;