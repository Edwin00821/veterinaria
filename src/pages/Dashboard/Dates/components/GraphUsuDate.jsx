import Chart from 'react-apexcharts'

const GraphUsuDate = () => {
  const series = [
    {
      data: [2311, 2214, 1090]
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
        distributed: true,
        borderRadius: 10 // Ajusta el valor para obtener bordes más o menos redondeados
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    colors: ['#6ED4A5', '#5CCBA0', '#4AB291'],
    xaxis: {
      categories: [['Alimento'], ['Higiene'], ['Accesorios']],
      labels: {
        style: {
          fontSize: '12px'
        }
      }
    }
  }
  return (
    <div className='w-[30vw]'>
      <Chart series={series} options={options} type={'bar'} />
    </div>
  )
}

export default GraphUsuDate
