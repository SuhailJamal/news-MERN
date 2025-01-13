import React, { useState } from 'react';
import './Register.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

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
            <div className="form-heading">Register</div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder='First Name'
                        className="form-input"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder='Last Name'
                        className="form-input"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
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
                <div className="form-group">
                    <input
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        placeholder='Repeat Password'
                        className="form-input"
                        value={formData.repeatPassword}
                        onChange={handleChange}
                    />
                </div>
                <p className='login-linking'>Already have an account ? <Link to='/login'>Log In</Link></p>
                <button type="submit" className="btn-submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Register;
