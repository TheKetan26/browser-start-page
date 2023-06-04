import './Engine.css'


export default function Engine(props) {
    return (
        <section className = 'engine'>
            <select className = 'engine-select'>
                <option value = 'Google' className = 'engine-select-option'>Google</option>
                <option value = 'Google' className = 'engine-select-option'>Yahoo!</option>
                <option value = 'Google' className = 'engine-select-option'>DuckDuckGo</option>
                <option value = 'Google' className = 'engine-select-option'>Bing</option>
            </select>
            <select className = 'engine-select'>
                <option value = 'all' className = 'engine-select-option'>All</option>
                <option value = 'site' className = 'engine-select-option'>Site</option>
                <option value = 'image' className = 'engine-select-option'>Image</option>
                <option value = 'video' className = 'engine-select-option'>Video</option>
                <option value = 'doc' className = 'engine-select-option'>Document</option>
                <option value = 'other' className = 'engine-select-option'>Other</option>
            </select>
        </section>
    )
}