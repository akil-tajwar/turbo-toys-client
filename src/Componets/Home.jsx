import React, { useEffect, useState } from 'react';
import { GrApple } from 'react-icons/gr';
import { GiHandOk } from 'react-icons/gi';
import { MdHandyman } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { AiFillAndroid, AiFillWindows } from 'react-icons/ai';
import Gallery from './Gallery';
import Category from './Category';

const Home = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toy')
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(error => console.log(error))
    }, [])

    const [buttonText, setButtonText] = useState("+");
    const handleButtonClick = () => {
        setButtonText(prevText => (prevText === "+" ? "-" : "+"));
    };
    return (
        <div>
            <div className='h-fit bg-[url(/public/banner.jpg)] bg-no-repeat bg-center bg-cover pt-36'>
                <div className='w-3/4 mx-auto px-5 py-40 text-white'>
                    <h1 className='lg:text-7xl text-5xl w-2/3 lg:w-1/4 pb-8'>We only sell best quality toy cars in our shop</h1>
                    <p>Download our official app</p>
                    <div className='grid lg:grid-cols-3 grid-cols-2 w-fit gap-5 pt-3 pb-20'>
                        <button className='flex items-center bg-[#2cae74] text-black px-4 py-2 font-bold rounded'><GrApple className='text-2xl mr-1' />Download</button>
                        <button className='flex items-center bg-[#2cae74] text-black px-4 py-2 font-bold rounded'><AiFillWindows className='text-2xl mr-1' />Download</button>
                        <button className='flex items-center bg-[#2cae74] text-black px-4 py-2 font-bold rounded'><AiFillAndroid className='text-2xl mr-1' />Download</button>
                    </div>
                </div>
            </div>
            <div className='w-3/4 mx-auto text-center py-20'>
                <div className='flex lg:flex-row flex-col lg:text-center lg:gap-5 gap-8'>
                    <div className='mx-auto flex flex-col justify-center items-center'>
                        <GiHandOk className='text-6xl text-[#2cae74]' />
                        <h3 className='text-4xl pb-3 font-semibold'>Best Products</h3>
                        <p className='text-slate-600'>We sell best products. We check all of our <br /> products before we sell it.</p>
                    </div>
                    <div className='mx-auto flex flex-col justify-center items-center'>
                        <MdHandyman className='text-6xl text-[#2cae74]' />
                        <h3 className='text-4xl pb-3 font-semibold'>Long Lasting</h3>
                        <p className='text-slate-600'>Our products will last longer than you can <br /> ever expect.</p>
                    </div>
                    <div className='mx-auto flex flex-col justify-center items-center'>
                        <FaUserFriends className='text-6xl text-[#2cae74]' />
                        <h3 className='text-4xl pb-3 font-semibold'>Professional Workers</h3>
                        <p className='text-slate-600'>Our workers are Professional, fast and very <br /> kind at their jobs.</p>
                    </div>
                </div>
            </div>
            <div className='pb-20'>
                <h1 className='text-5xl font-bold text-[#1d7edd] text-center mb-5'>Gallery</h1>
                <div className='grid lg:grid-cols-3 grid-cols-2 w-11/12 lg:w-3/4 mx-auto gap-5'>
                    {
                        toys.map(toy => <Gallery toy={toy} key={toy.id}></Gallery>)
                    }
                </div>
            </div>
            <div>
                <h1 className='text-5xl font-bold text-[#1d7edd] mb-5 text-center'>Shop by Category</h1>
                <div className='w-11/12 lg:w-3/4 mx-auto'>
                    <Category></Category>
                </div>
            </div>
            <div className='mb-20'>
                <h1 className='text-5xl font-bold text-[#1d7edd] text-center mb-5'>FAQ Section</h1>
                <div className='flex lg:flex-row flex-col-reverse gap-10 w-11/12 lg:w-3/4 mx-auto'>
                    <div className='w-11/12 lg:w-3/4 mx-auto flex flex-col gap-5 mt-7'>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                        Can I find remote-controlled toy cars at your shop?
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p>Yes, we offer a wide range of remote-controlled toy cars in various sizes, models, and brands. You'll find both beginner-friendly options and advanced models for enthusiasts.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                        Are your toy cars suitable for children of all ages?
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p>Our toy cars are designed for different age groups, ranging from toddlers to older children and even collectors. Each product description includes age recommendations and safety guidelines to ensure an appropriate match for your child's age and skill level.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                        Do you carry spare parts for toy cars?
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p>Absolutely! We understand that accidents happen, and components can wear out. We stock a variety of spare parts, including batteries, tires, remote controllers, and other essential components, to help you maintain and repair your toy cars.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                        Can I return or exchange a toy car if it's not what I expected?
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p>We have a hassle-free return and exchange policy. If you're not satisfied with your purchase, you can return it within [X] days in its original condition and packaging for a refund or exchange. Please refer to our return policy for detailed instructions.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mx-auto border-2 border-slate-200'>
                            <div className="collapse">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium flex justify-between">
                                    <div>
                                        Do you offer gift-wrapping services for toy car purchases?
                                    </div>
                                    <button onClick={handleButtonClick}>{buttonText}</button>
                                </div>
                                <div className="collapse-content">
                                    <p>Yes, we provide complimentary gift-wrapping services for toy car purchases. Just let our friendly staff know that it's a gift, and they will ensure that it's beautifully wrapped and ready to be presented. We take pride in adding that extra touch to make your gift-giving experience special.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <img src="/public/faq.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;