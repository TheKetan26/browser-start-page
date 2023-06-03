import { FiSearch } from 'react-icons/fi'
import './Search.css'

export default function SearchBar() {
    return (
        <section className = "search-bar">
            <input className = 'search-bar-input' type = "text" />
            <div className = 'search-bar-button'><FiSearch /></div>
        </section>
    )
}