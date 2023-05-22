import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const ToyCard = ({ toy }) => {
    const {_id, url, tname, sname, category, price, rating, quantity } = toy;
    return (
        <div>
            <div className='border w-full border-slate-400'>
                <div className='flex flex-col'>
                    <div className='p-5 w-full h-96'>
                        <img className='w-full h-full object-cover' key={toy.name} src={url} alt={toy.name} />
                    </div>
                    <div className='px-5 pb-5'>
                        <div className='lg:pt-3'>
                            <h3 className='text-3xl text-[#1d7edd] font-semibold'>{tname}</h3>
                            <h5 className='text-lg mb-3 font-semibold'>Seller: {sname}</h5>
                            <div className=''>
                                <p className=''>Price: {price}$</p>
                                <p className=''>Sub Category: {category}</p>
                                <p className=''>Abailable Quantity: {quantity}</p>
                                <p className=''>Rating: <Rating
                                    readonly
                                    placeholderRating={rating}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                ></Rating></p>
                            </div>
                        </div>
                        <Link to={`/${_id}`}><button className='px-3 w-full text-white text-xl bg-[#2cae74] py-2 mt-5 font-semibold'>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;