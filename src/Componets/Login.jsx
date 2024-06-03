import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from './AuthProvider';
import app from '../firebase/firebase.init';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true });
                setUser(user);
                console.log(user);
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            });
    }
    const defaultLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                navigate(from, { replace: true });
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

        if (error.includes('auth/user-not-found')) {
            setError('Your email address wrong');
            return;
        }
        else if (error.includes('auth/wrong-password')) {
            setError('Your password is wrong');
            return;
        }
        else if (password.length === 0 || email.length === 0) {
            setError('You can not submit an empty email or password field');
            return;
        }
    }
    return (
        <div className='pt-52'>
            <div className='mx-auto w-fit border-slate-200 border p-8 mt-20 mb-4'>
                <h2 className='text-4xl text-center font-semibold mb-3'>Login</h2>
                <form onSubmit={defaultLogin}>
                    <div className='pb-2'>
                        <label htmlFor="email">Email</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="email" name="email" id="" required />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="password">Password</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-72' type="password" name="password" id="" required />
                    </div>
                    <button className='w-full bg-[#2cae74] text-white font-semibold p-2 mt-4 mb-3'>Login</button><br />
                </form>
                {/* <p className='text-center'>--------- or ---------</p>
                <div className='flex gap-2 mb-3'>
                    <button onClick={googleLogin} className='w-full bg-[#2cae74] text-white font-semibold p-2 mt-3'>Google</button>
                </div> */}
                <div className='text-center'>
                    <small>New to Turbo Toy Car? <Link to='/signup' className='text-[#1d7edd] font-semibold'>Create new account</Link></small>
                </div>
            </div>
            <p className='text-red-800 text-center font-semibold mb-20'>{error}</p>
        </div>
    );
};

export default Login;