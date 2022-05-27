import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Home = () => {
    return (
        <div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
            <Navbar/>

            <main className='container mx-auto py-12 px-6'>
                <Outlet/>
            </main>

            <Footer/>
        </div>
    );
};

export default Home;