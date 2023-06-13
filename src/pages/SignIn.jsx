import { Link } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //Deconstruct
  const { email, password } = formData;

  // Handle OnChange
  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  //Handle Submit
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        console.log(userCredential.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='flex flex-col max-w-lg items-center justify-center mx-auto shadow px-8 py-6'>
        <form className='flex flex-col mb-3' onSubmit={onSubmitHandler}>
          <input
            className='w-full mb-6 px-4 py-2 text-xl text-gray-500 placeholder-gray-500 bg-white'
            type='email'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChangeHandler}
          />
          <input
            className='w-full px-4 py-2 text-xl bg-white text-gray-500 placeholder-gray-500 mb-6'
            type='password'
            placeholder='Password'
            id='password'
            value={password}
            onChange={onChangeHandler}
          />
          <button type='submit' className='btn btn-outline btn-primary'>
            Sign In
          </button>
        </form>
        <div className='options flex flex-col items-center'>
          <Link className='text-blue-500 font-regular text-xs'>
            Forgot Password?
          </Link>
          <p className='mt-3 text-sm'>
            Don't have an account?{" "}
            <Link
              to='/sign-up'
              className='text-red-400 font-semibold block text-center underline'
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignIn;
