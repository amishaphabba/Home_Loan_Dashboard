import ReactECharts from 'echarts-for-react';
import { useContext, useState } from 'react';
import CalculatorContext from '../store/CalculatorContext';

const BarGraph = () => {
  const { tenure, tableData, emi } = useContext(CalculatorContext)

  // Values for X-axis(Tenure)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentDate = new Date();
  const currentMonth = months[currentDate.getMonth()]
  const firstBar = `${tableData.currentYear}(${currentMonth}-Dec)`

  const tenureArray = []
  for (let i = 1; i <= tenure; i++) {
    tenureArray.push(tableData.currentYear + i)
  }

  const lastBar = `${tenureArray[tenureArray.length - 1]}(Jan-${months[currentDate.getMonth() - 1]})`
  // console.log(lastBar)

  const roundOff = (number) => {
    const length = Math.floor(Math.log10(number)) + 1; // Get the number of digits
    const multiplier = Math.pow(10, length - 1); // Calculate the multiplier
    const roundedNumber = Math.ceil(number / multiplier) * multiplier;
    return roundedNumber
  }

  const calculateInterval = (intervalParam) =>{
    const intervalPercentage = 10; // Percentage for interval calculation
    const interval = intervalParam * (intervalPercentage / 100);
    return interval
  }
  
  let maxEmi = roundOff(emi);
  let maxBalance = roundOff(Math.max(...tableData.extractedData.balance));


  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Principal', 'Interest', 'Balance']
    },
    xAxis: [
      {
        type: 'category',
        data: [firstBar, ...tenureArray.slice(0, tenureArray.length - 1), lastBar],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Emi Payment',
        min: 0,
        max: maxEmi*12,
        interval: calculateInterval(maxEmi*12),
        axisLabel: {
          formatter: '{value}'
        }
      },
      {
        type: 'value',
        name: 'Balance',
        min: 0,
        max: maxBalance,
        interval: calculateInterval(maxBalance),
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: 'Principal',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value;
          }
        },
        data: [...tableData.extractedData.principal]
      },
      {
        name: 'Interest',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value ;
          }
        },
        data: [...tableData.extractedData.interest]
      },
      {
        name: 'Balance',
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value;
          }
        },
        data: [...tableData.extractedData.balance]
      }
    ]
  };

  return (
    <div className="barGraph-card">
      <p className='title'>Interest vs Principal Amount Payable</p>
       <ReactECharts style={{height:"350px"}} option={option} />
          
    </div>
  )

}

export default BarGraph