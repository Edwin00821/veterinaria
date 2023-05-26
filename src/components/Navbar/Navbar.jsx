import { Auth, ListOfNavs } from './'

const Navbar = ({ navs }) => {
  return (
    <section className='relative flex w-full flex-col justify-between'>
      <Auth />
      <ListOfNavs navs={navs} />
      <div className='absolute bottom-0 right-0 top-0 my-auto h-4/5 w-[2px] bg-primary' />
    </section>
  )
}

export default Navbar
