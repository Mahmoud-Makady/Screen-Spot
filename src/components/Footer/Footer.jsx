import React from 'react'
import "./Footer.css";
import logo from '../../assets/logo.png'


export default function Footer() {
    return (
        <footer className="footer bg-black text-secondary">
            <div className="footer-content container">
                <div className="row g-0 px-5">
                    <div className="col-md-6 mb-3 d-flex justify-content-center align-items-center">
                        <img src={logo} alt="logo" width={250}/>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                        <p>© 2025 <span className='text-primary fw-bold'>ScreenSpot</span>. All rights reserved.</p>
                        <p>
                            Made with ❤️ by <a href="https://github.com/Mahmoud-Makady" className='text-primary' target="_blank" rel="noopener noreferrer">Mahmoud Makady</a>
                        </p>
                    </div>
                </div>
            </div>
    </footer>

    )
}
