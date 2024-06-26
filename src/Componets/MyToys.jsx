import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import MyToyElements from './MyToyElements';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `https://turbo-toys-server-xi.vercel.app/mytoys?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
            .catch(error => console.log(error))
    }, [])
    if (isLoading) {
        <p>Loading...</p>
    }

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
                fetch(`https://turbo-toys-server-xi.vercel.app/mytoys/${_id}`, {
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
                            setMyToys(remaining);

                        }
                    })
                    .catch(error => console.log(error))
            }
        })
    }
    return (
        <div className='pt-56 pb-20'>
            <h1 className='text-5xl text-center font-semibold pb-5 text-[#1d7edd]'>My Toys</h1>
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
                    <p className='col-span-2 text-leftfont-semibold'>Toy name</p>
                    <p className='font-semibold'>Sub Category</p>
                    <p className='font-semibold'>Price</p>
                    <p className='font-semibold'>Quantity</p>
                    <p className='font-semibold flex gap-2 justify-start'>Delete</p>
                </div>
            </div>
            {
                myToys.map((myToyElements, index) => <MyToyElements index={index} handleDelete={handleDelete} myToyElements={myToyElements} key={myToyElements._id}></MyToyElements>)
            }
        </div>
    );
};

export default MyToys;