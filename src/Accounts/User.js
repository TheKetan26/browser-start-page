import './Accounts.css'


var users = [
    {
        id: 1,
        name: 'Ketan personal'
    },
    {
        id: 2,
        name: 'Ketan College'
    },
    {
        id: 1,
        name: 'Ketan deve'
    },
]


function Dropdown(props) {
    var userElements = props.users.map(user => {
        return (
            <div className = 'dropdown-item'>
                { user.name }
            </div>
        )
    })

    var className = 'dropdown'
    if (!props.display) {
        className = className.concat(' dropdown-no')
    }

    return (
        <div className = { className }>
            { userElements }
        </div>
    )
}


export default function User(props) {
    return (
        <section>
            <div className = 'user'>
                <div className = 'user-inner'>K</div>
            </div>
            <Dropdown display = { true } users = { users } />
        </section>
    )
}