import React from 'react';
import Banner from '../components/main/banner';
import Newsletter from '../components/main/input-newslatter';

const Home: React.FC = () => {
    return (
        <>
            <Banner />

            <br /><h1>Home</h1><br />

            <Newsletter />
        </>
    );
};

export default Home;