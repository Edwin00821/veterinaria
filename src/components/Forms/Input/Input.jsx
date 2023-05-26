const Input = ({
  type = 'text',
  label = '',
  register,
  errors,
  icon,
  iconPosition = 'right',
  disabled
}) => {
  return (
    <div className='group relative z-0 w-full'>
      <input
        id={register?.name}
        type={type}
        placeholder={label}
        className={`peer relative h-10 w-full border-b px-4 ${
          iconPosition === 'right' ? 'pr-12' : 'pl-12'
        } text-sm placeholder-transparent outline-none transition-all autofill:bg-white ${
          !errors
            ? 'border-slate-200 text-slate-500 focus:border-emerald-500 '
            : 'border-pink-500 text-pink-500 focus:border-pink-500'
        } focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}
        disabled={disabled}
        {...register}
      />
      <label
        htmlFor={register?.name}
        className={`absolute -top-2 left-2 z-[1] cursor-text px-2 text-xs transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all ${
          iconPosition === 'left' && 'peer-placeholder-shown:left-10'
        } peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm ${
          !errors
            ? 'text-slate-400 peer-focus:text-emerald-500'
            : 'text-pink-500 peer-focus:text-pink-500'
        } after:text-pink-500 after:content-['\\00a0*'] peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent `}
      >
        {label}
      </label>
      <div
        className={`absolute top-2.5 h-5 w-5 stroke-slate-400 text-slate-400 peer-disabled:cursor-not-allowed ${
          iconPosition === 'right' ? 'right-4 ' : 'left-4'
        } ${errors && 'text-pink-500'}`}
      >
        {icon}
      </div>
      <small
        className={`absolute flex w-full justify-between px-4 py-1 text-xs ${
          !errors ? 'text-slate-400' : 'text-pink-500'
        } transition`}
      >
        <span>{errors?.message}</span>
        {/* <span>1/10</span> */}
      </small>
    </div>
  )
}

export default Input
