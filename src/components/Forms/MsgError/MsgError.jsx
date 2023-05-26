const MsgError = ({ errors }) => {
  return (
    <small
      className={`absolute flex w-full justify-between px-4 py-1 text-xs ${
        !errors ? 'text-slate-400' : 'text-pink-500'
      } transition`}
    >
      <span>{errors?.message}</span>
      {/* <span className='text-slate-500'>1/10</span> */}
    </small>
  )
}

export default MsgError
