import React from 'react';
import { GrApple } from 'react-icons/gr';
import { GiHandOk } from 'react-icons/gi';
import { MdHandyman } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';

const Home = () => {
    return (
        <div>
            <div className='h-fit bg-[url(/public/banner.jpg)] bg-no-repeat bg-center bg-cover'>
                <div className='w-3/4 mx-auto px-5 py-40 text-white'>
                    <h1 className='text-7xl pb-8'>We only sell best <br /> quality toy cars in <br /> our shop</h1>
                    <p>Download our official app</p>
                    <div className='flex gap-5 pt-3 pb-20'>
                        <button className='flex items-center bg-[#2cae74] text-black px-4 py-2 font-bold rounded-lg'><GrApple className='text-xl mr-1' />Download</button>
                        <button className='flex items-center bg-[#2cae74] text-black px-4 py-2 font-bold rounded-lg'><GrApple className='text-xl mr-1' />Download</button>
                        <button className='flex items-center bg-[#2cae74] text-black px-4 py-2 font-bold rounded-lg'><GrApple className='text-xl mr-1' />Download</button>
                    </div>
                </div>
            </div>
            <div className='w-3/4 mx-auto text-center py-20'>
                <div className='flex gap-5'>
                    <div className='mx-auto flex flex-col justify-center items-center'>
                        <GiHandOk className='text-6xl text-[#2cae74]'/>
                        <h3 className='text-4xl pb-3 font-semibold'>Best Products</h3>
                        <p className='text-slate-600'>We sell best products. We check all of our <br /> products before we sell it.</p>
                    </div>
                    <div className='mx-auto flex flex-col justify-center items-center'>
                        <MdHandyman className='text-6xl text-[#2cae74]'/>
                        <h3 className='text-4xl pb-3 font-semibold'>Long Lasting</h3>
                        <p className='text-slate-600'>Our products will last longer than you can <br /> ever expect.</p>
                    </div>
                    <div className='mx-auto flex flex-col justify-center items-center'>
                        <FaUserFriends className='text-6xl text-[#2cae74]'/>
                        <h3 className='text-4xl pb-3 font-semibold'>Professional Workers</h3>
                        <p className='text-slate-600'>Our workers are Professional, fast and very <br /> kind at their jobs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;