import './Signin.css'

const Signin = ({setSignin}) => {
    return (
        <div className='signin-popup'>
            <div className='blue-con'>
                <h2>Sign In</h2>
                <p>Sign up with your mobile number to get started</p>
                <div className='img-con'>
                    <img src="src\assets\logo.svg" alt="" />
                </div>
            </div>
            <div className='white-con'>
                <h4>Enter Mobile no/ Email ID</h4>
                <input type="text" name="" id="" />
                <p>By continuing, you agree to Flapkart Terms of use and Privacy Policy.</p>
                <button className='cont-btn'>CONTINUE</button>
                <button className='existUser-btn'>Existing user? Login in</button>
                <button className='close'
                onClick={()=>setSignin(false)}>x</button>
            </div>
        </div>
    )
}

export default Signin