import Chart from 'react-apexcharts'

const TotalDatesGraph = () => {
  const series = [
    {
      name: 'citas',
      data: [28, 16, 21, 13, 30]
    }
  ]

  const options = {
    chart: {
      height: 350,
      type: 'bar'
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '50%'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2
    },

    grid: {
      row: {
        colors: ['#6ED4A5', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.1
      }
    },
    colors: ['#6ED4A5'],
    xaxis: {
      labels: {
        rotate: -45
      },
      categories: ['Conejos', 'Perros', 'Gatos', 'Hurones', 'Mini Pigs'],
      tickPlacement: 'on'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100]
      }
    }
  }
  return (
    <div className='w-[30vw] '>
      <Chart series={series} options={options} type={'bar'} />
    </div>
  )
}

export default TotalDatesGraph
