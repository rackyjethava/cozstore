import React from 'react';
import Header from './user/component/header/Header';
import Home from './user/container/home/Home';
import Footer from './user/component/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Shop from './user/container/shop/Shop';
import About from './user/container/about/About';
import Blog from './user/container/blog/Blog';
import Features from './user/container/features/Features';
import Contect from './user/container/contect/Contect';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/shop' element={<Shop />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route exact path='/blog' element={<Blog />}></Route>
      <Route exact path='/features' element={<Features />}></Route>
      <Route exact path='/contect' element={<Contect />}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
