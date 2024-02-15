import React from 'react'
import './Login.css'

function Login() {
  return (
    <div>

        <form>

            <div className='mainContainer'>
                <h1>Login</h1>
                <input className='unsername inputs' type="text" required/>
                <input className='password inputs' type="password" required/>
                <input type="submit" className='btn'/>
            </div>
 
        </form>

    </div>
  )
}

export default Login