import Chart from 'react-apexcharts'

const GraphEspecies = () => {
  const series = [44, 55, 13, 43, 22]
  const options = {
    chart: {
      width: 380,
      type: 'pie'
    },
    labels: ['Perros', 'Gatos', 'Hurones', 'Conejos', 'Mini Pigs'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ],
    colors: ['#6ED4A5', '#5CCBA0', '#4AB991', '#3AA972', '#2A9B73']
  }
  return (
    <div className='w-[25vw]'>
      <Chart type='pie' series={series} options={options} />
    </div>
  )
}

export default GraphEspecies
