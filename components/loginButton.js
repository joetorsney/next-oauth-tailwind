import React from 'react';

const LoginButton = () => {

  const handleLogin = (event) => {
    console.log(event)
  }

  return (
    <button onClick={handleLogin} class="text-white">
      Login
    </button>
  )
}

export default LoginButton;