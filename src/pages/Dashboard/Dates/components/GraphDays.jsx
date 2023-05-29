import Chart from 'react-apexcharts'
import { EspecieSelect } from './'

const GraphDays = () => {
  const series = [
    {
      name: 'Citas',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 34]
    }
  ]
  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    colors: ['#6ED4A5'],
    grid: {
      row: {
        colors: ['#6ED4A5', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.1
      }
    },
    xaxis: {
      categories: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
    }
  }

  return (
    <div className='w-[26vw]'>
      <div className='flex items-center justify-start'>
        <EspecieSelect />
      </div>
      <Chart series={series} options={options} type={'line'} />
    </div>
  )
}

export default GraphDays
