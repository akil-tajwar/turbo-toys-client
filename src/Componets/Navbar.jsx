import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div className='bg-[#0a151e] fixed w-full z-10'>
            <div className='flex gap-5 lg:flex-row flex-col justify-center items-center lg:justify-between w-11/12 lg:w-3/4 mx-auto p-5'>
                <div className=''>
                    <img className='w-32' src="/logo.png" alt="" />
                </div>
                <div className='lg:flex grid grid-cols-4 gap-x-10 lg:gap-10 text-[#2cae74] font-semibold justify-center items-center'>
                    <Link className='hover:text-white' to='/'>Home</Link>
                    <Link className='hover:text-white' to='/blog'>Blog</Link>
                    <Link className='hover:text-white' to='/alltoys'>All toys</Link>
                    {
                        user && <Link className='hover:text-white' to='mytoys'>My toys</Link>
                    }
                    {
                        user && <Link className='hover:text-white' to='/addtoy'>Add toy</Link>
                    }
                    {
                        user ? <span className='hover:text-white font-semibold cursor-pointer' onClick={handleLogout}>Logout</span> : <Link className='font-semibold hover:text-white' to='/signup'>Signup</Link>
                    }
                    {
                        user ? <div className='w-10 h-10 relative'><img className='rounded-full w-full h-full object-cover border-2 border-[#78bf4d]' src={user.photoURL} title={user.displayName} alt="user photo" /></div> : <Link className='font-semibold hover:text-white' to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;