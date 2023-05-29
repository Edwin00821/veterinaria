import Chart from 'react-apexcharts'

const GraphEnfermedades = () => {
  const series = [42, 47, 52, 58, 65]

  const options = {
    chart: {
      width: 380,
      type: 'donut'
    },
    labels: ['Perros', 'Gatos', 'Conejos', 'Hurones', 'Mini Pigs'],
    fill: {
      opacity: 1
    },
    stroke: {
      width: 1,
      colors: undefined
    },
    yaxis: {
      show: false
    },
    legend: {
      position: 'top'
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0
        },
        spokes: {
          strokeWidth: 0
        }
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        color: '#78CC9F',
        shadeTo: 'light',
        shadeIntensity: 0.6
      }
    }
  }

  return (
    <div className='w-[23vw]'>
      <Chart options={options} series={series} type='donut' />
    </div>
  )
}

export default GraphEnfermedades
