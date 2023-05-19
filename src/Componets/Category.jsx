import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaRegStar, FaStar } from "react-icons/fa";

const Category = () => {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error));
    }, []);

    if (!categories) {
        return <div>Loading...</div>;
    }

    return (
        <div className='mb-20'>
            <Tabs>
                <TabList>
                    <Tab>Vintage Cars</Tab>
                    <Tab>Old Taxi</Tab>
                    <Tab>Racing Cars</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex gap-5'>
                        {categories[0].category.map(toy => (
                            <div className='border w-full border-slate-400 mt-3'>
                                <img className='w-full' key={toy.name} src={toy.photo} alt={toy.name} />
                                <div className='w-11/12 mx-auto pt-3'>
                                    <h3 className='text-3xl text-[#1d7edd] font-semibold mb-3'>{toy.name}</h3>
                                    <div className='flex justify-between'>
                                        <p>Price: {toy.price}$</p>
                                        <p>Rating: <Rating
                                            readonly
                                            placeholderRating={toy.rating}
                                            emptySymbol={<FaRegStar></FaRegStar>}
                                            placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                            fullSymbol={<FaStar></FaStar>}
                                        ></Rating></p>
                                    </div>
                                </div>
                                <button className='w-full text-white text-xl bg-[#2cae74] py-2 mt-3 font-semibold'>View Display</button>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex gap-5'>
                        {categories[1].category.map(toy => (
                            <div className='border w-full border-slate-400 mt-3'>
                                <img className='w-full' key={toy.name} src={toy.photo} alt={toy.name} />
                                <div className='w-11/12 mx-auto pt-3'>
                                    <h3 className='text-3xl text-[#1d7edd] font-semibold mb-3'>{toy.name}</h3>
                                    <div className='flex justify-between'>
                                        <p>Price: {toy.price}$</p>
                                        <p>Rating: <Rating
                                            readonly
                                            placeholderRating={toy.rating}
                                            emptySymbol={<FaRegStar></FaRegStar>}
                                            placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                            fullSymbol={<FaStar></FaStar>}
                                        ></Rating></p>
                                    </div>
                                </div>
                                <button className='w-full text-white text-xl bg-[#2cae74] py-2 mt-3 font-semibold'>View Display</button>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex gap-5'>
                        {categories[2].category.map(toy => (
                            <div className='border w-full border-slate-400 mt-3'>
                                <img className='w-full' key={toy.name} src={toy.photo} alt={toy.name} />
                                <div className='w-11/12 mx-auto pt-3'>
                                    <h3 className='text-3xl text-[#1d7edd] font-semibold mb-3'>{toy.name}</h3>
                                    <div className='flex justify-between'>
                                        <p>Price: {toy.price}$</p>
                                        <p>Rating: <Rating
                                            readonly
                                            placeholderRating={toy.rating}
                                            emptySymbol={<FaRegStar></FaRegStar>}
                                            placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                            fullSymbol={<FaStar></FaStar>}
                                        ></Rating></p>
                                    </div>
                                </div>
                                <button className='w-full text-white text-xl bg-[#2cae74] py-2 mt-3 font-semibold'>View Display</button>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;
