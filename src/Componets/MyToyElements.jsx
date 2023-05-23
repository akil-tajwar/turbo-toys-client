import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import Swal from 'sweetalert2';

const MyToyElements = ({ myToyElements }) => {
    const { _id, tname, sname, url, category, price, quantity } = myToyElements;
    const [myToys, setmyToys] = useState([]);
    const [count, setCount] = useState(1);

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/mytoys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(myToy => myToy._id !== _id);
                            setmyToys(remaining);

                        }
                    })
                    .catch(error => console.log(error))
            }
        })
    }

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
