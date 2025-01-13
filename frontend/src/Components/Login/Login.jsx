import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className='form-container'>
            <div className="form-heading">Log in</div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Email Address'
                        className="form-input"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Password'
                        className="form-input"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <p className='register-linking'>Don't have an account ? <Link to ='/register'>Create Account</Link></p>
                <button type="submit" className="btn-submit">Login</button>
            </form>
        </div>
    );
};

export default Login;