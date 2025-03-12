import React, { useState } from 'react'
import '../ComponentCss/SignUp.css'

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, SetPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errMessage, setErrMessage] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        if(password === confirmPassword){
            setErrMessage("")
        }else{
            setErrMessage("Passwords do not match ")
        }
    }

    return (
        <div >
            <form onSubmit={handleSubmit} className='signUp'>
                <div className='signUp-item'>
                    <span className='signUp-text'>Email</span>
                    <input className='signUp-input' type="email" value={email} onChange={(e) => setEmail(e.target.value) } />
                </div>
                <div className='signUp-item'>
                    <span className='signUp-text'>Password</span>
                    <input className='signUp-input' type="password" value={password} onChange={(e) => SetPassword(e.target.value) } />
                </div>
                <div className='signUp-item'>
                    <span className='signUp-text'>Confirm Password</span>
                    <input className='signUp-input' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                { errMessage && <p style={{color : "red"}}>{errMessage}</p>}
                <div className='signUp-btn'>
                    <input type="submit" value="Sign Up"  className='signUp-submit'/>
                </div>
            </form>
        </div>
    )
}

export default SignUp
