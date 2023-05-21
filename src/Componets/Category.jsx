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
            .catch(error => console.log(error))
    }, []);

    if (!categories) {
        return <div>Loading...</div>
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
                    <div className='flex gap-5 lg:flex-row flex-col'>
                        {categories[0].category.map(toy => (
                            <div className='border w-full border-slate-400 mt-3'>
                                <div className='flex lg:flex-row flex-col'>
                                    <div className='p-5 lg:w-1/2 w-full'>
                                        <img className='' key={toy.name} src={toy.photo} alt={toy.name} />
                                    </div>
                                    <div className='lg:pt-5 px-5 pb-5'>
                                        <div className='lg:pt-3'>
                                            <h3 className='text-3xl text-[#1d7edd] font-semibold mb-3'>{toy.name}</h3>
                                            <div className=''>
                                                <h5 className='text-xl'>Price: {toy.price}$</h5>
                                                <h5 className='text-xl'>Rating: <Rating
                                                    readonly
                                                    placeholderRating={toy.rating}
                                                    emptySymbol={<FaRegStar></FaRegStar>}
                                                    placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                                    fullSymbol={<FaStar></FaStar>}
                                                ></Rating></h5>
                                            </div>
                                        </div>
                                        <button className='px-3 text-white text-xl bg-[#2cae74] py-2 mt-5 font-semibold'>View Display</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex gap-5 lg:flex-row flex-col'>
                        {categories[1].category.map(toy => (
                            <div className='border w-full border-slate-400 mt-3'>
                                <div className='flex lg:flex-row flex-col'>
                                    <div className='p-5 lg:w-1/2 w-full'>
                                        <img className='' key={toy.name} src={toy.photo} alt={toy.name} />
                                    </div>
                                    <div className='lg:pt-5 px-5 pb-5'>
                                        <div className='lg:pt-3'>
                                            <h3 className='text-3xl text-[#1d7edd] font-semibold mb-3'>{toy.name}</h3>
                                            <div className=''>
                                                <h5 className='text-xl'>Price: {toy.price}$</h5>
                                                <h5 className='text-xl'>Rating: <Rating
                                                    readonly
                                                    placeholderRating={toy.rating}
                                                    emptySymbol={<FaRegStar></FaRegStar>}
                                                    placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                                    fullSymbol={<FaStar></FaStar>}
                                                ></Rating></h5>
                                            </div>
                                        </div>
                                        <button className='px-3 text-white text-xl bg-[#2cae74] py-2 mt-5 font-semibold'>View Display</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex gap-5 lg:flex-row flex-col'>
                        {categories[2].category.map(toy => (
                            <div className='border w-full border-slate-400 mt-3'>
                                <div className='flex lg:flex-row flex-col'>
                                    <div className='p-5 lg:w-1/2 w-full'>
                                        <img className='' key={toy.name} src={toy.photo} alt={toy.name} />
                                    </div>
                                    <div className='lg:pt-5 px-5 pb-5'>
                                        <div className='lg:pt-3'>
                                            <h3 className='text-3xl text-[#1d7edd] font-semibold mb-3'>{toy.name}</h3>
                                            <div className=''>
                                                <h5 className='text-xl'>Price: {toy.price}$</h5>
                                                <h5 className='text-xl'>Rating: <Rating
                                                    readonly
                                                    placeholderRating={toy.rating}
                                                    emptySymbol={<FaRegStar></FaRegStar>}
                                                    placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                                                    fullSymbol={<FaStar></FaStar>}
                                                ></Rating></h5>
                                            </div>
                                        </div>
                                        <button className='px-3 text-white text-xl bg-[#2cae74] py-2 mt-5 font-semibold'>View Display</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;
