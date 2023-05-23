import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { HiOutlinePencilAlt } from 'react-icons/hi';

const MyToyElements = ({ myToyElements, handleDelete }) => {
    const { _id, tname, sname, url, category, price, quantity } = myToyElements;
    const [count, setCount] = useState(1);

    return (
        <div className='w-3/4 mx-auto'>
            <div className="border w-full mx-auto border-slate-400">
                <div className='grid grid-cols-9 justify-start items-center p-5'>
                    <p>{count}</p>
                    <div className='w-20 h-20 flex justify-start items-start'>
                        <img className='w-full h-full object-cover rounded' src={url} alt="" />
                    </div>
                    <p>{sname}</p>
                    <p className='col-span-2 text-left'>{tname}</p>
                    <p>{category}</p>
                    <p>{price}$</p>
                    <p>{quantity}</p>
                    <p className='flex gap-2 justify-start'>
                        <div><button className='p-1 rounded text-2xl bg-[#1d7edd] text-white'><HiOutlinePencilAlt /></button></div>
                        <div onClick={() => handleDelete(_id)}><button className='p-1 rounded text-2xl bg-red-500 text-white'><RiDeleteBinLine /></button></div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyToyElements;
