import { useState } from 'react';
import Background from './Background';
import Search from './Search/Search';
import './App.css';
import Engine from './Engine/Engine';
import Bookmark from './Bookmark/Bookmark';
import Accounts from './Accounts/Accounts';


var bookmarks


function getUsers(event) {
    event.preventDefault();
    const users = localStorage.getItem('users');
    if (users === null)
        console.log('User not found.');
    else
        console.log(users);
}


function getBookmarks() {
    const data = localStorage.getItem('bookmarks');
    if (data === null) 
        bookmarks = []
    else 
        bookmarks = data
}


var apps = [
    {
        name: 'doc',
        url: '',
    },
    {
        name: 'doc',
        url: '',
    },
    {
        name: 'doc',
        url: '',
    },
    {
        name: 'doc',
        url: '',
    },
    {
        name: 'doc',
        url: '',
    },
    {
        name: 'doc',
        url: '',
    },
    {
        name: 'doc',
        url: '',
    },
    {
        name: 'doc',
        url: '',
    },
    {
        name: 'doc',
        url: '',
    },
    {
        name: 'doc',
        url: '',
    },
    {
        name: 'doc',
        url: '',
    },
]


export default function App() {
    getBookmarks();

    return (
        <section>
            <Background />
            <Search />
            <Engine />
            <Bookmark bookmarks = { bookmarks } />
            <Accounts apps = { apps } />
        </section>
    );
};