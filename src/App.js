import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import { About } from './components/about';


export default function App(){
    return(
        
        <Routes>
            <Route path='/' element={<Layout/>} >
                <Route index element={<Home/>} />
                {/* <Route path='About' element={<About/>} /> */}
                {/* <Route path='Work' element={<Work/>} />
                <Route path='Contact' element={<Contact/>} /> */}
            </Route>
        </Routes> 
    );
}