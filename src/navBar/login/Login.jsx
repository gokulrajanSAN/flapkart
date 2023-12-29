import './Login.css'
import { useState } from 'react'

const Login = () => {

    return (
        <div className='login-con'>
            <div className='signin login-items'>New User?
                <button
                    className='signin-btn'
                    onClick={() => setSignin(true)}>Sign in</button>
            </div>
            <button className='my-acc-btn login-items'>My Account</button>
        </div>
    )
}

export default Login