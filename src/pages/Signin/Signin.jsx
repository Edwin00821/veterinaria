import { SigninForm } from './components'

const Signin = () => {
  return (
    <div className='grid h-screen w-full place-items-center bg-primary'>
      <div className='flex h-3/4 w-3/4 flex-col items-center justify-center rounded-3xl bg-white p-8'>
        <h2 className='text-center text-5xl font-black text-primary'>
          Sign in
        </h2>
        <SigninForm />
      </div>
    </div>
  )
}

export default Signin
