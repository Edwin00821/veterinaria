const PrincipalsServices = ({ title, text, icon }) => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-5 p-5'>
      {icon}
      <h3 className='text-lg font-semibold'>{title}</h3>
      <p className='text-center text-lg text-[#757474]'>{text}</p>
    </div>
  )
}

export default PrincipalsServices
