import React from 'react';
import { GrApple } from 'react-icons/gr';

const Home = () => {
    return (
        <div className='h-fit bg-[url(/public/banner.jpg)] bg-no-repeat bg-center bg-cover'>
            <div className='w-10/12 mx-auto px-5 py-40 text-white'>
                <h1 className='text-7xl pb-8'>We only sell best <br /> quality toy cars in <br /> our shop</h1>
                <p>Download our official app</p>
                <div className='flex gap-5 pt-3 pb-20'>
                    <button className='flex items-center bg-[#2cae74] text-black px-4 py-2 font-bold rounded-lg'><GrApple className='text-xl mr-1' />Download</button>
                    <button className='flex items-center bg-[#2cae74] text-black px-4 py-2 font-bold rounded-lg'><GrApple className='text-xl mr-1' />Download</button>
                    <button className='flex items-center bg-[#2cae74] text-black px-4 py-2 font-bold rounded-lg'><GrApple className='text-xl mr-1' />Download</button>
                </div>
            </div>
        </div>
    );
};

export default Home;