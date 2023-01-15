import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import Work from './components/work';
import About from './components/about';
import Contact from './components/contact';

export default function App(){
    return(
        
        <Routes>
            <Route path='/' element={<Layout/>} >
                <Route index element={<Home/>} />
                <Route path='About' element={<About/>} />
                <Route path='work' element={<Work/>} />
                <Route path='contact' element={<Contact/>} />
            </Route>
        </Routes> 
    );
}