import './LoginPopup.css'

const LoginPopup = ({ setLoginPopup }) => {


    return (

        <div className='login-pop-transparent' onClick={(e) => e.target.className === 'login-pop-transparent' && setLoginPopup(false)}>
            <div className='login-con-pop'>
                <div className='login-con-blue'>
                    <h2 className='login-text' >Login</h2>
                    <p className='detail-p'>Get access to your Orders, Wishlist and Recommendations</p>
                    <img className='img-logo-login' src="src\assets\logo.svg" />
                </div>
                <div className='login-con-white'>
                    <label className='label-email' htmlFor="">
                        Enter Mobile no/ Email ID <br />
                        <input className='input-email' type="text" name="" id="" />
                        <p className='tc-p'>By continuing, you agree to Flipkart Terms of use and Privacy Policy.</p>
                    </label>

                    <button className='request-otp-btn'>Request OTP</button>
                    <button className='newsignin-btn'> New to Flipkart? Create an account </button>
                    <button className='close-btn' onClick={() => setLoginPopup(false)}>x</button>

                </div>
            </div>
        </div>

    )
}

export default LoginPopup