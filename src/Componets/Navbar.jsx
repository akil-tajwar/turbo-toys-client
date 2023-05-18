import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-[#0a151e] fixed w-full'>
            <div className='flex justify-between w-3/4 mx-auto p-5'>
                <div className=''>
                    <img className='w-32' src="/public/logo.png" alt="" />
                </div>
                <div className='flex gap-10 text-[#2cae74] font-semibold justify-center items-center'>
                    <Link className='hover:text-white' to='/'>Home</Link>
                    <Link className='hover:text-white' to='/blog'>Blog</Link>
                    <Link className='hover:text-white' to=''>All toys</Link>
                    <Link className='hover:text-white' to='/signup'>Signup</Link>
                    <Link className='hover:text-white' to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;