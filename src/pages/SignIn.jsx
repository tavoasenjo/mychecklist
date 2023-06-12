function SignIn() {
  return (
    <>
      <h1 className='text-5xl'>Sign In</h1>
      <div className=' flex flex-col max-w-lg items-center justify-center mx-auto'>
        <form className='flex flex-col shadow px-8 py-6'>
          <input
            className='w-full mb-6 px-4 py-2 text-xl text-gray-50 placeholder-slate-50 bg-orange-400'
            type='text'
            placeholder='Name'
          />
          <input
            className='w-full px-4 py-2 text-xl bg-orange-400 text-gray-50 placeholder-slate-50'
            type='password'
            placeholder='Password'
          />
        </form>
      </div>
    </>
  );
}

export default SignIn;
