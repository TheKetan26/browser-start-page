import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './index.css';
import App from './App';
import Admin from './Admin/Admin';
import UserData from './Admin/UserData';
import BookmarkData from './Admin/Bookmar';
import AppData from './Admin/AppData';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router basename = { process.env.PUBLIC_URL }>
        <Routes>
            <Route path = '/' element = { <App /> } />
            <Route path = '/admin' element = { <Admin /> } />
            <Route path = '/admin/user' element = { <UserData /> } />
            <Route path = '/admin/bookmark' element = { <BookmarkData /> } />
            <Route path = '/admin/app' element = { <AppData /> } />
        </Routes>
    </Router>
);

