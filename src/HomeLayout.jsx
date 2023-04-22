import React from 'react'
import {Outlet} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header/Header';

const HomeLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default HomeLayout