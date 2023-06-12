import './Engine.css'


export default function Engine(props) {
    const handleEngine = (e) => {
        props.setEngine(e.target.value)
    }


    const handleType = (e) => {
        props.setType(e.target.value)
    }
 

    return (
        <section className = 'engine'>
            <select value = { props.engine } onChange = { handleEngine } className = 'engine-select'>
                <option value = 'google' className = 'engine-select-option'>Google</option>
                <option value = 'yahoo' className = 'engine-select-option'>Yahoo!</option>
                <option value = 'ddg' className = 'engine-select-option'>DuckDuckGo</option>
                <option value = 'bing' className = 'engine-select-option'>Bing</option>
            </select>
            <select value = { props.type } onChange = { handleType } className = 'engine-select'>
                <option value = 'all' className = 'engine-select-option'>All</option>
                <option value = 'application' className = 'engine-select-option'>Application</option>
                <option value = 'image' className = 'engine-select-option'>Image</option>
                <option value = 'video' className = 'engine-select-option'>Video</option>
                <option value = 'document' className = 'engine-select-option'>Document</option>
            </select>
        </section>
    )
}