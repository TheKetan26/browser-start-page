import { FiSearch } from 'react-icons/fi'
import './Search.css'

export default function SearchBar(props) {
    const search = (e) => {
        e.preventDefault()
        props.search()
    }


    const handleInput = (event) => {
        props.setInput(event.target.value)
    }


    return (
        <section className = "search-bar">
            <input onChange = { handleInput } value = { props.input } className = 'search-bar-input' type = "text" placeholder = 'Search Here...' />
            <button onClick = { search } className = 'search-bar-button'><FiSearch /></button>
        </section>
    )
}