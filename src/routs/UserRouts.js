import React from 'react';
import Header from '../user/component/header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from '../user/component/footer/Footer';
import Home from '../user/container/home/Home';
import Shop from '../user/container/shop/Shop';
import About from '../user/container/about/About';
import Blog from '../user/container/blog/Blog';
import Features from '../user/container/features/Features';
import Contect from '../user/container/contect/Contect';

function UserRouts(props) {
    return (
        <>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/shop' element={<Shop />}/>
      <Route exact path='/about' element={<About />}/>
      <Route exact path='/blog' element={<Blog />}/>
      <Route exact path='/features' element={<Features />}/>
      <Route exact path='/contect' element={<Contect />}/>
      </Routes>
    <Footer />
    </>
    );
}

export default UserRouts;