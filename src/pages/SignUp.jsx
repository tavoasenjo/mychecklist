import { Link } from "react-router-dom";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //Deconstruct
  const { name, email, password } = formData;

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
      //Get auth from getAuth() - firebase
      const auth = getAuth();
      //register the user with the createUserWithEmailAndPassword function (promise) that takes auth, email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(userCredential);
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
            type='text'
            placeholder='Name'
            id='name'
            value={name}
            onChange={onChangeHandler}
          />
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
            Sign Up
          </button>
        </form>
        <div className='options flex flex-col items-center'>
          <p className='mt-3 text-sm'>
            Already have an account?{" "}
            <Link
              to='/'
              className='text-red-400 font-semibold block text-center underline'
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
