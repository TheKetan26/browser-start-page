import './Accounts.css'
import { RiAppsFill } from 'react-icons/ri'


function Drawer(props) {
    var className = ''
    if (!props.display) {
        className = 'drawer no-display'
    }
    else {
        className = 'drawer'
    }

    var cnt = 1
    var appElements = [], rowAppElement = []
    props.apps.map(app => {
        rowAppElement.push(
            <div className = 'app-img' />
        )
        if (cnt === 5) {
            appElements.push(
                <div className = 'app-drawer-row'>
                    { rowAppElement }
                </div>
            )
            rowAppElement = []
            cnt = 1
        }
        else
            cnt += 1
    })
    if (cnt > 1) 
        appElements.push(
            <div className = 'app-drawer-row'>
                { rowAppElement }
            </div>
        )

    return (
        <section className = { className }>
            { appElements }
        </section>
    )
}


export default function Apps(props) {
    return (
        <section>
            <div className = 'apps'>
                <RiAppsFill size = { 24 } className = 'apps-icon' />
            </div>
            <Drawer display = { false } apps = { props.apps } />
        </section>
    )
}