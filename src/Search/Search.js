import SearchBar from './SearchBar'
import './Search.css'


export default function Search(props) {
    return (
        <section className = "search-section">
            <SearchBar input = { props.input } setInput = { props.setInput } search = { props.search } />
        </section>
    )
}