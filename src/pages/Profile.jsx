import React from "react";

function Profile() {
  return (
    <div className='border'>
      <h1 className='text-5xl'>Sign In</h1>
      <form>
        <input type='text' placeholder='name' />
        <input type='password' placeholder='password' />
      </form>
    </div>
  );
}

export default Profile;
