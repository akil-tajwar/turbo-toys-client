import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { RiDeleteBinLine } from 'react-icons/ri';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchToys = () => {
        const url = `https://turbo-toys-server-xi.vercel.app/mytoys?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const filterCar = data.filter(toy => toy.addToCart === true)
                setMyToys(filterCar);
                console.log(filterCar);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        fetchToys();
    }, [user.email]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const removeFromCart = (toyId) => {
        fetch(`http://localhost:5000/cart/undofromcart/${toyId}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    setMyToys((prevToys) => {
                        return prevToys.filter((toy) => toy._id !== toyId);
                    });
                }
                fetchToys();
            })
            .catch((error) => {
                console.error('Error removing from cart:', error);
            });
    };


    return (
        <div className='pt-56 pb-20'>
            <h1 className='text-5xl text-center font-semibold pb-5 text-[#1d7edd]'>Cart</h1>
            {/* <div className='w-3/4 mx-auto mb-5'>
                <select className='border border-slate-400 px-4 py-1'>
                    <option>Sort by</option>
                    <option>High price</option>
                    <option>Low price</option>
                </select>
            </div> */}
            <div className="border w-3/4 h-fit mx-auto border-slate-400">
                <div className='font-semibold grid grid-cols-9 justify-center items-center p-5'>
                    <p className='font-semibold'>Sl no.</p>
                    <p className=''>Image</p>
                    <p className='font-semibold'>Seller</p>
                    <p className='col-span-2 text-left font-semibold'>Toy name</p>
                    <p className='font-semibold'>Sub Category</p>
                    <p className='font-semibold'>Price</p>
                    <p className='font-semibold'>Quantity</p>
                    <p className='font-semibold flex gap-2 justify-start'>Update/Delete</p>
                </div>
            </div>
            {
                myToys.map((cartElement, index) => (
                    <div key={cartElement.id} className='w-3/4 mx-auto'>
                        <div className="border w-full mx-auto border-slate-400">
                            <div className='grid grid-cols-9 justify-start items-center p-5'>
                                <p>{index + 1}</p>
                                <div className='w-20 h-20 flex justify-start items-start'>
                                    <img className='w-full h-full object-cover rounded' src={cartElement.url} alt="" />
                                </div>
                                <p>{cartElement.sname}</p>
                                <p className='col-span-2 text-left'>{cartElement.tname}</p>
                                <p>{cartElement.category}</p>
                                <p>{cartElement.price}$</p>
                                <p>{cartElement.quantity}</p>
                                <p className='flex gap-2 justify-start'>
                                    {/* <div><button className='p-1 rounded text-2xl bg-[#1d7edd] text-white'><HiOutlinePencilAlt /></button></div> */}
                                    <div><button onClick={() => removeFromCart(cartElement._id)} className='p-1 rounded text-2xl bg-red-500 text-white'><RiDeleteBinLine /></button></div>
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Cart;
