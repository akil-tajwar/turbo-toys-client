import React from 'react';

const Blog = () => {
    return (
        <div className='lg:pt-52 pt-60 mb-20 w-11/12 lg:w-3/4 mx-auto'>
            <div className='text-center'>
                <h1 className='font-semibold text-5xl text-[#1d7edd]'>Question/Answer</h1>
            </div>
            <div className='p-6'>
                <div className='pt-8'>
                    <b className='text-[#2cae74] font-bold'>Ques 1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</b>
                    <p className='pt-2 text-justify'><b>Access Token:</b> An access token is a short-lived credential that authorizes a client to access specific resources. It is used for authenticating and authorizing API requests. <br />
                        <b>Refresh Token: </b>A refresh token is a long-lived credential that is used to obtain a new access token after the current one expires. It allows the user to obtain a new access token without re-entering their credentials. <br />
                        Access tokens are typically stored in memory or browser storage, while refresh tokens should be stored securely, such as in HttpOnly cookies or secure storage mechanisms provided by frameworks.</p>
                </div>
                <div className='pt-8'>
                    <b className='text-[#2cae74] font-bold'>Ques 2: Compare SQL and NoSQL databases?</b>
                    <p className='pt-2 text-justify'><b>SQL Database : <br /> </b>1. Structured, with predefined schemas and relations. <br /> 2. Follow the relational data model. <br /> 3. Fixed schema and SQL query language. <br /> 4. Vertically scalable and provide ACID compliance. <br />
                    <b>NoSQL Database : </b> <br /> 1. Flexible, with dynamic and unstructured data. <br /> 2. Offer various data models. <br /> 3. No fixed schema and may have their own query languages. <br /> 4. Horizontally scalable and may sacrifice ACID properties for scalability.</p>
                </div>
                <div className='pt-8'>
                    <b className='text-[#2cae74] font-bold'>Ques 3: What is express js? What is Nest JS?</b>
                    <p className='pt-2 text-justify'><b>Expressjs: </b>Express.js is a lightweight and flexible web application framework for Node.js, ideal for quickly building web applications and APIs.<br />
                        <b>Nestjs: </b>Nest.js is a progressive Node.js framework built on Express.js, providing a structured and organized approach to building scalable server-side applications, with features like dependency injection and declarative syntax.</p>
                </div>
                <div className='pt-8'>
                    <b className='text-[#2cae74] font-bold'>Ques 4: What is MongoDB aggregate and how does it work?</b>
                    <p className='pt-2 text-justify'>MongoDB is an open source NoSQL database management program. NoSQL (Not only SQL) is used as an alternative to traditional relational databases. <br />
                    In MongoDB, the aggregate is a powerful and flexible operation used for data aggregation and processing. It allows you to perform complex data manipulations, transformations, and computations on the documents in a collection.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;