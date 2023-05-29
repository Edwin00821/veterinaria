import Chart from 'react-apexcharts'
import { EspecieSelect } from './'

const GraphMarcasPop = () => {
  const series = [
    {
      data: [1701, 1214, 1090, 891, 987]
    }
  ]
  const options = {
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        }
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    colors: ['#78CC9F', '#64C894', '#51C289', '#3DBA7E', '#29B472'],
    xaxis: {
      categories: [
        ['Pedigree'],
        ['Royal Canin'],
        ['Purina'],
        ['Top Choice'],
        ['Eukanuba']
      ],
      labels: {
        style: {
          fontSize: '12px'
        }
      }
    }
  }
  return (
    <div className='w-[25vw]'>
      <div className='flex items-center justify-start'>
        <EspecieSelect />
      </div>
      <Chart series={series} options={options} type={'bar'} />
    </div>
  )
}

export default GraphMarcasPop
