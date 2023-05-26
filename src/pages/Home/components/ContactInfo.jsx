const ContactInfo = ({ img, text }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-1'>
      <div className='h-full w-[20%]'>
        <img src={img} alt='' className='h-full' />
      </div>
      <p>{text}</p>
    </div>
  )
}

export default ContactInfo
