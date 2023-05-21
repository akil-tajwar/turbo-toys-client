import React from 'react';

const AddToy = () => {
    return (
        <div className='pt-40 pb-14'>
            <div className='mx-auto lg:w-fit w-11/12 border-slate-200 border p-8 mt-20 mb-4'>
            <h2 className='text-4xl text-center font-semibold mb-3'>Add toy</h2>
                <form>
                    <div className='pb-2'>
                        <label htmlFor="password">Toy Photo URL</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="text" name="photo" id="" required />
                    </div>
                    <div className='pb-2'>
                        <label htmlFor="email">Toy Name</label><br />
                        <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="text" name="t-name" id="" required />
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='pb-2'>
                            <label htmlFor="email">Seller Name</label><br />
                            <input className='bg-[#f5f5f5] p-2 border-slate-300 border w-full' type="text" name="s-name" id="" required />
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
                    <button className='w-full bg-[#2cae74] text-white font-semibold p-2 mt-4 mb-3'>Add toy</button><br />
                </form>
            </div>
        </div>
    );
};

export default AddToy;