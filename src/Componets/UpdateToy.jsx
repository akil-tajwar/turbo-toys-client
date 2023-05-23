import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const toy = useLoaderData();
    const { _id, tname, sname, url, category, price, quantity, email, description, rating } = toy;

    const updateToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const url = form.url.value;
        const tname = form.tname.value;
        const sname = form.sname.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedToy = { _id, url, tname, sname, email, category, price, rating, quantity, description };
        fetch(`https://turbo-toys-server-akil-tajwar.vercel.app/mytoys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!!',
                        text: 'New toy is added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='pt-40 pb-14'>
            <div className='mx-auto lg:w-fit w-11/12 border-slate-200 border p-8 mt-20 mb-4'>
                <h2 className='text-4xl text-center font-semibold mb-3'>Update Your Toy</h2>
                <form onSubmit={updateToy}>
                    <div className='pb-2'>
                        <label htmlFor="password">Toy Photo URL</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="text" name="photo" id="" required />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="email">Toy Name</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="text" name="tname" id="" required />
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='pb-2'>
                            <label htmlFor="email">Seller Name</label><br />
                            <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="text" name="sname" id="" required />
                        </div>
                        <div className='pb-2'>
                            <label htmlFor="email">Seller Email</label><br />
                            <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="email" name="email" id="" required />
                        </div>
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="email">Sub Category</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="text" name="category" id="" required />
                    </div>
                    <div className='flex gap-5'>
                        <div className='pb-2'>
                            <label htmlFor="email">Price</label><br />
                            <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="text" name="price" id="" required />
                        </div>
                        <div className='pb-2'>
                            <label htmlFor="email">Rating</label><br />
                            <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="text" name="rating" id="" required />
                        </div>
                        <div className='pb-2'>
                            <label htmlFor="email">Quantity</label><br />
                            <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="text" name="quantity" id="" required />
                        </div>
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="email">Description</label><br />
                        <textarea className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' name="description" id="" cols="30" rows="5"></textarea>
                    </div>
                    <button className='w-full bg-[#2cae74] text-white font-semibold p-2 mt-4 mb-3'>Update toy</button><br />
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;