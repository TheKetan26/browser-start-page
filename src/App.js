import Background from './Background';
import Search from './Search/Search';
import './App.css';
import Engine from './Engine/Engine';
import Bookmark from './Bookmark/Bookmark';
import Accounts from './Accounts/Accounts';


var bookmarks = [
    {
        label: 'Github',
        url: 'github.com'
    },
    {
        label: 'CodeChef',
        url: 'codechef.com'
    },
    {
        label: 'Linedin',
        url: 'Linkedin.in'
    },
    {
        label: 'Hackerrank',
        url: 'hackerranck.com'
    }
]


export default function App() {
    return (
        <section>
            <Background />
            <Search />
            <Engine />
            <Bookmark bookmarks = { bookmarks } />
            <Accounts />
        </section>
    );
};