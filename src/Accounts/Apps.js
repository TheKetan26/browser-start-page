import { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Accounts.css'
import { RiAppsFill } from 'react-icons/ri'


const getApps = () => {
    const storedData = localStorage.getItem('AppData');
    if (storedData) {
        return JSON.parse(storedData);
    }
    return [];
};


function Drawer(props) {
    var className = ''
    if (!props.display) {
        className = 'drawer no-display'
    }
    else {
        className = 'drawer'
    }

    var appElements = [], rowAppElement = []
    props.apps.map(async app => {
        let url = `https://${app.url}`
        appElements.push(
            <Link to = { url } className = 'app-drawer-row'>
                { app.name }
            </Link>
        )
    })

    return (
        <section className = { className }>
            { appElements }
        </section>
    )
}


export default function Apps(props) {
    const [displayDrawer, setDisplayDrawer] = useState(false)
    const [apps, setApps] = useState(getApps())


    const handleDrawer = () => {
        setDisplayDrawer(!displayDrawer)
    }


    return (
        <section>
            <div className = 'apps' onClick = { handleDrawer } >
                <RiAppsFill size = { 24 } className = 'apps-icon' />
            </div>
            <Drawer display = { displayDrawer } apps = { apps } />
        </section>
    )
}