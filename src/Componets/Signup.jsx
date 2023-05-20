import { AuthContext } from './AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { updateProfile } from 'firebase/auth';
import Navbar from './Navbar';

const Signup = () => {
    const [error, setError] = useState('');
    const { user, createUser } = useContext(AuthContext);
    const { logout, setLogout } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/login";
    const defaultSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
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
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserData(result.user, name, photo);
                navigate(from, { replace: true });
                logout();
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
            const updateUserData = (user, name, photo) => {
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        console.log('name updated');
                    })
                    .catch(error => {
                        console.log(error);
                    })
                return <Navbar user={user}></Navbar>
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
                    <button className='w-full bg-[#2cae74] text-white font-semibold p-2 mt-4 mb-3'>Signup</button><br />
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