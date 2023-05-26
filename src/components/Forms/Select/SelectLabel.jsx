const SelectLabel = ({ htmlFor, title, value, errors }) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className={`pointer-events-none absolute left-2 top-3 z-[1] px-2 text-sm ${
          value && value?.name !== '' && 'peer-valid:-top-2 peer-valid:text-xs'
        } ${
          !errors
            ? 'text-slate-400 peer-focus:text-emerald-500'
            : 'text-pink-500 peer-focus:text-pink-500'
        } transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all after:text-pink-500 after:content-['\\00a0*'] peer-focus:-top-2 peer-focus:text-xs peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent`}
      >
        {title}
      </label>
      <label
        htmlFor={htmlFor}
        className={`absolute left-0 top-3 h-full px-4 text-sm placeholder-transparent outline-none transition-all autofill:bg-white ${
          !errors
            ? 'border-slate-200 text-slate-500'
            : 'border-pink-500 text-pink-500'
        } disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}
      >
        {value?.name}
      </label>
    </>
  )
}

export default SelectLabel
