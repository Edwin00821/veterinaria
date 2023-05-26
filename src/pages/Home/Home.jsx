import { NavHome } from '@/libs'
import {
  Navbar,
  Banner,
  Contact,
  Footer,
  Office,
  Services,
  Welcome
} from './components'

const Home = () => {
  return (
    <div>
      <Navbar navs={NavHome} />
      <Banner />
      <Welcome />
      <Services />
      <Office />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
