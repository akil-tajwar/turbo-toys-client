import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import MyToyElements from './MyToyElements';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `http://localhost:5000/mytoys?email=${user.email}`;
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
    return (
        <div className='pt-56 pb-20'>
            {/* <h1>{user.length}</h1> */}
            <div className="border w-3/4 h-fit mx-auto border-slate-400">
                <div className='font-semibold grid grid-cols-9 justify-center items-center p-5'>
                    <p className='font-semibold'>Sl no.</p>
                    <p className=''>Image</p>
                    <p className='font-semibold'>Seller</p>
                    <p className='col-span-2 text-leftfont-semibold'>Toy name</p>
                    <p className='font-semibold'>Sub Category</p>
                    <p className='font-semibold'>Price</p>
                    <p className='font-semibold'>Quantity</p>
                    <p className='font-semibold flex gap-2 justify-start'>Update/Delete</p>
                </div>
            </div>
            {
                myToys.map(mytoy => <MyToyElements mytoy={mytoy} key={mytoy._id}></MyToyElements>)
            }
        </div>
    );
};

export default MyToys;