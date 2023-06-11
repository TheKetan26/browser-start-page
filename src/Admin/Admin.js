import { Link } from 'react-router-dom';
import UserData from './UserData';
import BookmarkData from './Bookmar';


export default function Admin() {
    return (
        <section>
            <Link to='user'>User</Link>
            <Link to='bookmark'>Bookmark</Link>
            <Link to='app'>App</Link>
        </section>
    );
}