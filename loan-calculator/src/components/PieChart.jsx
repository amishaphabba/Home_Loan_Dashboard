import ReactECharts from 'echarts-for-react';
import { useContext } from 'react';
import CalculatorContext from '../store/CalculatorContext';

const PieChart = () => {

  const { amount, totalInterest } = useContext(CalculatorContext)
  let totalAmount = (parseInt(amount) + totalInterest)
  totalAmount = totalAmount.toString()
  let interestPercent = ((totalInterest / totalAmount) * 100).toFixed(1)
  let amountPercentage = ((parseInt(amount) / totalAmount) * 100).toFixed(1)

  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '0%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: interestPercent, name: 'Total Interest' },
          { value: amountPercentage, name: 'Principal Amount' }
        ]
      }
    ]
  };

  return (
    <div className="piechart-card">
      <ReactECharts style={{width: "90%"}} option={option} />

      <div className='card-outputs'>
        <div className='card-group'>
          <div className="output-block">
            <div className="output-name">Principal Amount</div>
            <div className="output-value"><span className="currency">₹ </span><span>{amount}</span></div>
          </div>
          <div className="output-block">
            <div className="output-name">Total Interest</div><div className="output-value"><span className="currency">₹ </span><span>{totalInterest}</span>
            </div>
          </div>
        </div>
        <div className="output-block">
          <div className="output-name">Total Amount</div>
          <div className="output-value"><span className="currency">₹ </span><span>{totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  )

}
export default PieChart