import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { ContextLang } from '../Context/ContextLang';

export default function Login() {
    const { contextLang } = useContext(ContextLang);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (value) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
            setEmailError('Invalid email');
        } else {
            setEmailError('');
        }
    };

    const validatePass = (value) => {
        const passRegex = /^[0-9A-Za-z]{8,}$/;
        if (!passRegex.test(value)) {
            setPasswordError('Password must be at least 8 characters');
        } else {
            setPasswordError('');
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    };

    const handlePassChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        validatePass(value);
    };

    const SubmitData = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className='vh-100 pt-5 mt-4' style={{overflowX: 'hidden'}}>
            <div className="container py-5" >
                <div className='text-center mb-3'>
                    <img src={logo} alt="logo" width={250}/>
                    <h1 className='text-secondary text-center'>
                        {contextLang === "En" ? "Login" : "تسجيل الدخول"}
                    </h1>
                </div>
            </div>
            <form className="row g-3 needs-validation" onSubmit={(e) => SubmitData(e)}>
            <div className="col-md-12 text-center d-flex justify-content-center">
                <div className='w-50 mb-4'>
                    <input
                        type="email"
                        className={`form-control ${emailError ? 'is-invalid' : email ? 'is-valid' : ''}`}
                        id="validationCustom01"
                        placeholder={contextLang === "En" ? "Email Address" : "البريد الالكتروني"}
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    {emailError && <div className="invalid-feedback">{emailError}</div>}
                    {!emailError && email && <div className="valid-feedback">
                            {contextLang === "En" ? "Looks good!" : "هذا رائع!"}
                        </div>}
                </div>
            </div>

            <div className="col-md-12 d-flex justify-content-center">
                <div className='w-50 mb-3'>
                    <input
                        type="password"
                        className={`form-control ${passwordError ? 'is-invalid' : password ? 'is-valid' : ''}`}
                        placeholder={contextLang === "En" ? "Password" : "كلمة السر"}
                        id="validationCustom02"
                        value={password}
                        onChange={handlePassChange}
                        required
                    />
                    {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                    {!passwordError && password && <div className="valid-feedback">
                        {contextLang === "En" ? "Looks good!" : "هذا رائع!"}
                        </div>}
                </div>
            </div>

            <div className="col-12 text-center">
                <button
                    className="btn btn-primary mb-2"
                    type="submit"
                    disabled={emailError || passwordError || !email || !password}
                >
                    {contextLang === "En" ? "Login" : "تسجيل الدخول"}
                </button>
                <br />
                <Link className='text-info' as={Link} to="./register">
                    {contextLang === "En" ? "Or Create New Account" : "أو سجل حساب جدبد"}
                </Link>
            </div>
            </form>
            </div>
        </>
    );
}
