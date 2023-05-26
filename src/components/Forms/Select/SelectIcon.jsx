import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight
} from 'react-icons/md'

const SelectIcon = ({ typeOfOpen, errors }) => {
  return (
    <>
      {typeOfOpen === 'up' ? (
        <MdKeyboardArrowUp
          className={`pointer-events-none absolute right-2 top-2.5 h-5 w-5 transition-all ${
            !errors
              ? 'fill-slate-400 peer-focus:fill-emerald-500'
              : 'fill-pink-500 peer-focus:fill-pink-500'
          } peer-disabled:cursor-not-allowed`}
        />
      ) : typeOfOpen === 'left' ? (
        <MdKeyboardArrowLeft
          className={`pointer-events-none absolute right-2 top-2.5 h-5 w-5 transition-all ${
            !errors
              ? 'fill-slate-400 peer-focus:fill-emerald-500'
              : 'fill-pink-500 peer-focus:fill-pink-500'
          } peer-disabled:cursor-not-allowed`}
        />
      ) : typeOfOpen === 'right' ? (
        <MdKeyboardArrowRight
          className={`pointer-events-none absolute right-2 top-2.5 h-5 w-5 transition-all ${
            !errors
              ? 'fill-slate-400 peer-focus:fill-emerald-500'
              : 'fill-pink-500 peer-focus:fill-pink-500'
          } peer-disabled:cursor-not-allowed`}
        />
      ) : (
        <MdKeyboardArrowDown
          className={`pointer-events-none absolute right-2 top-2.5 h-5 w-5 transition-all ${
            !errors
              ? 'fill-slate-400 peer-focus:fill-emerald-500'
              : 'fill-pink-500 peer-focus:fill-pink-500'
          } peer-disabled:cursor-not-allowed`}
        />
      )}
    </>
  )
}

export default SelectIcon
