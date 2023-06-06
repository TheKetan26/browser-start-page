import './Accounts.css'
import User from './User'
import Apps from './Apps'


export default function Accounts(props) {
    return (
        <section>
            <User />
            <Apps apps = { props.apps } />
        </section>
    )
}