import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyCard from './ToyCard';

const Alltoys = ({ toys }) => {
    const allToys = useLoaderData();
    return (
        <div className='lg:pt-52 pt-72 mb-20'>
            <h1 className='text-5xl font-bold text-[#1d7edd] text-center mb-5'>All Toys</h1>
            <div className='w-11/12 lg:w-3/4 mx-auto grid lg:grid-cols-3 grid-cols-1 gap-5'>
                {
                    allToys.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)
                }
            </div>
        </div>
    );
};

export default Alltoys;