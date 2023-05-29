import Chart from 'react-apexcharts'

const GraphVacunacion = () => {
  const series = [76, 42, 88, 17, 61]
  const options = {
    chart: {
      height: 350,
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px'
          },
          value: {
            fontSize: '16px'
          },
          total: {
            show: true,
            label: 'Total'
          }
        }
      }
    },
    labels: ['Perros', 'Gatos', 'Hurones', 'Conejos', 'Mini Pigs'],
    colors: ['#3FA168', '#6AB94E', '#8BC133', '#6FFF50', '#93FF90']
  }

  return (
    <div className='w-[25vw]'>
      <Chart type='radialBar' series={series} options={options} />
    </div>
  )
}

export default GraphVacunacion
