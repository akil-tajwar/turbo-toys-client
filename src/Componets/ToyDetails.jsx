import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const ToyDetails = () => {
    const { _id } = useParams();
    const [toyData, setToyData] = useState(null);

    useEffect(() => {
        fetch('https://turbo-toys-server-xi.vercel.app/newtoy')
            .then(res => res.json())
            .then(data => {
                const toyData = data.find(toy => toy._id === _id);
                setToyData(toyData);
            })
            .catch(error => console.log(error));
    }, [_id]);

    if (!toyData) {
        return <div>Loading...</div>;
    }

    const addToCart = (toyId) => {
        fetch(`http://localhost:5000/cart/addtocart/${toyId}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    setToyData((prevToy) => ({
                        ...prevToy,
                        addToCart: true, // Assuming this is the property that signifies the toy is in the cart
                    }));
                }
            })
            .catch((error) => {
                console.error('Error adding to cart:', error);
            });
    };

    return (
        <div className='pt-56 w-3/4 mx-auto pb-20'>
            <div className='border w-full mx-auto border-slate-400'>
                <div className='grid grid-cols-2 p-5 gap-5'>
                    <div className='w-full h-96'>
                        <img className='w-full h-full object-cover' src={toyData.url} alt="" />
                    </div>
                    <div className='w-full'>
                        <h3 className='text-5xl text-[#2cae74] mb-1 font-semibold'>{toyData.tname}</h3>
                        <h5 className='text-2xl mb-5 font-semibold'>Seller: {toyData.sname}</h5>
                        <div>
                            <p className='text-xl mb-1'><span className='font-semibold'>Price:</span> {toyData.price}$</p>
                            <p className='text-xl mb-1'><span className='font-semibold'>Sub Category:</span> {toyData.category}</p>
                            <p className='text-xl mb-1'><span className='font-semibold'>Available Quantity:</span> {toyData.quantity}</p>
                            <p className='text-xl mb-1'><span className='font-semibold'>Rating:</span> <Rating
                                readonly
                                placeholderRating={toyData.rating}
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar className='text-yellow-500' />}
                                fullSymbol={<FaStar />}
                            /></p>
                            <p className='text-xl pt-5'><span className='font-semibold'>Description:</span> {toyData.description}</p>
                            <div className='flex gap-5 pt-5'>
                                {/* <button className='bg-[#2cae74] text-white w-52 py-2 font-semibold text-xl'>Buy Now</button> */}
                                <button onClick={() => addToCart(toyData._id)} className='bg-[#1d7edd] text-white w-52 py-2 font-semibold text-xl'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;
