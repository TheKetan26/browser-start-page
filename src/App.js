import Background from './Background';
import Search from './Search/Search';
import './App.css';
import Engine from './Engine/Engine';
import Bookmark from './Bookmark/Bookmark';
import Accounts from './Accounts/Accounts';


var bookmarks, users


function getUsers(event) {
    event.preventDefault();
    const data = localStorage.getItem('users');
    if (data === null)
        users = []
    else
        users = data
}


export default function App() {
    return (
        <section>
            <Background />
            <Search />
            <Engine />
            <Bookmark />
            <Accounts />
        </section>
    );
};