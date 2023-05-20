import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [error, setError] = useState('');
    const defaultSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        setError('');
        if (password.length < 6 && password.length > 0) {
            setError('Password must have at least 6 characters');
            return;
        }
        else if (password.length === 0) {
            setError('You can not submit an empty email or password field');
            return;
        }
    }
    return (
        <div className='pt-52'>
            <div className='mx-auto w-fit border-slate-200 border p-8 mt-20 mb-4'>
                <h2 className='text-4xl text-center font-semibold mb-3'>Signup</h2>
                <form onSubmit={defaultSignup}>
                    <div className='pb-2'>
                        <label htmlFor="email">Name</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="text" name="name" id="" required />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="email">Email</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="email" name="email" id="" required />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="password">Password</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="password" name="password" id="" required />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="email">Photo URL</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="text" name="photo" id="" required />
                    </div>
                    <button className='w-full bg-[#2cae74] p-2 mt-4 mb-3'>Signup</button><br />
                </form>
                <div className='text-center'>
                    <small>Already have an account? <Link to='/login' className='text-[#1d7edd] font-semibold'>Login</Link></small>
                </div>
            </div>
            <p className='text-red-800 text-center font-semibold  mb-20'>{error}</p>
        </div>
    );
};

export default Signup;