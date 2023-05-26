import VentaProduct from '@/components/VentaProduct'
import InfoProduct from '@/components/InfoProduct'

// Icons
// import { RiLineChartLine, RiHashtag } from "react-icons/ri";

const SalePoint = () => {
  return (
    <div className='grid h-screen w-full grid-cols-[70%_minmax(30%,_1fr)]'>
      <VentaProduct />
      <InfoProduct />
    </div>
  )
}

export default SalePoint
