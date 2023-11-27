// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import ContactPage from './components/pages/ContactPage';
import EventsPage from './components/pages/EventPage';
import BlogPage from './components/pages/BlogPage';
import HomePage from './components/pages/Homepage';
import Layout from './components/Layout';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>  
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='contact' element={<ContactPage/>}/>
          <Route path='blog' element={<BlogPage/>}/>
          <Route path='event' element={<EventsPage/>}/>
        </Route> 
    </Routes>
  </BrowserRouter>
  );
};

export default App;
