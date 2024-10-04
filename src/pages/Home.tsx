import React from 'react';
import Banner from '../components/main/banner';
import Newsletter from '../components/main/input-newslatter';
import SectionVideos from '../components/main/section-videos';
import RecipeLibrary from '../components/main/recipe-vibrary';

const Home: React.FC = () => {
    return (
        <>
            <Banner />

            <RecipeLibrary />

            <SectionVideos />

            <Newsletter />
        </>
    );
};

export default Home;