import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-[#20252b]'>
            <div className='flex justify-between w-11/12 mx-auto'>
                <div className=''>
                    <img className='w-32' src="/public/logo.png" alt="" />
                    <h3 className='text-2xl font-semibold text-white ml-3'>Turbo Toys</h3>
                </div>
                <div className='flex gap-10 text-white font-semibold justify-center items-center'>
                    <Link className='hover:text-[#50bc4d]' to=''>Home</Link>
                    <Link className='hover:text-[#50bc4d]' to=''>Blog</Link>
                    <Link className='hover:text-[#50bc4d]' to=''>All toys</Link>
                    <Link className='hover:text-[#50bc4d]' to=''>My toys</Link>
                    <Link className='hover:text-[#50bc4d]' to=''>Add toys</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;