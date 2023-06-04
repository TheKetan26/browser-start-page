import Background from './Background';
import Search from './Search/Search';
import './App.css';
import Engine from './Engine/Engine';


export default function App() {
    return (
        <section>
            <Background />
            <Search />
            <Engine />
        </section>
    );
};