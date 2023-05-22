import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const ToyDetails = () => {
    const toyDetails = useParams();
    const [toyData, setToyData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/newtoy')
            .then(res => res.json())
            .then(data => {
                const toyData = data.find(toy => toy._id === toyDetails._id);
                setToyData(toyData);
            })
            .catch(error => console.log(error))
    })
    if (!toyData) {
        return <div>Loading...</div>
    }
    return (
        <div className='pt-56 w-3/4 mx-auto pb-20'>
            <div className='border w-fit mx-auto border-slate-400'>
                <div className='flex p-5 gap-5'>
                    <div className='w-96 h-96'>
                        <img className='w-full h-full object-cover' src={toyData.url} alt="" />
                    </div>
                    <div>
                        <h3 className='text-5xl text-[#2cae74] mb-1 font-semibold'>{toyData.tname}</h3>
                        <h5 className='text-2xl mb-5 font-semibold'>Seller: {toyData.sname}</h5>
                        <div className=''>
                            <p className='text-xl mb-1'><span className='font-semibold'>Price:</span> {toyData.price}$</p>
                            <p className='text-xl mb-1'><span className='font-semibold'>Sub Category:</span> {toyData.category}</p>
                            <p className='text-xl mb-1'><span className='font-semibold'>Abailable Quantity:</span> {toyData.quantity}</p>
                            <p className='text-xl mb-1'><span className='font-semibold'>Rating:</span> <Rating
                                readonly
                                placeholderRating={toyData.rating}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            ></Rating></p>
                            <p className='text-xl pt-5'><span className='font-semibold'>Description:</span> {toyData.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;