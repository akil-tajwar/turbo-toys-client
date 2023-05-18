import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-[#0a151e]'>
            <div className='flex justify-between w-10/12 mx-auto p-5'>
                <div className=''>
                    <img className='w-32' src="/public/logo.png" alt="" />
                </div>
                <div className='flex gap-10 text-[#2cae74] font-semibold justify-center items-center'>
                    <Link className='hover:text-white' to=''>Home</Link>
                    <Link className='hover:text-white' to=''>Blog</Link>
                    <Link className='hover:text-white' to=''>All toys</Link>
                    <Link className='hover:text-white' to=''>My toys</Link>
                    <Link className='hover:text-white' to=''>Add toys</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;