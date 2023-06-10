import React, { useState } from 'react';


function getUsers() {
    const storedData = localStorage.getItem('UsersData');
    if (storedData) {
      console.log(JSON.parse(storedData));
    }
}


function removeAllUsers() {
    localStorage.clear();
};


function removeUser(email) {
    const storedData = JSON.parse(localStorage.getItem('UsersData'));

    if (storedData && Array.isArray(storedData)) {
        const index = storedData.findIndex((data) => data.email === email);

        if (index !== -1) {
        storedData.splice(index, 1);

        localStorage.setItem('UsersData', JSON.stringify(storedData));
        }
    }
};


const UserData = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailRemove, setEmailRemove] = useState('');


    const removeUserFunction = (event) => {
        event.preventDefault();
        removeUser(emailRemove);
        setEmailRemove('');
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name: name,
            email: email,
        };
        const storedData = JSON.parse(localStorage.getItem('UsersData')) || [];
        const updatedData = [...storedData, formData];
        localStorage.setItem('UsersData', JSON.stringify(updatedData));
        setName('');
        setEmail('');
    };


    return (
        <section>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                    />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                    />
                    </label>
                </div>
                <button type="submit">Add User</button>
            </form>

            <button onClick = { getUsers }>Get Users</button>
            <button onClick = { removeAllUsers }>Remove All Users</button>

            <form onSubmit={removeUserFunction}>
                <label>
                    Email to Remove:
                </label>
                <input 
                    type="email"
                    value={emailRemove}
                    onChange={(e) => setEmailRemove(e.target.value)}
                    name="email"
                />
                <button type="submit">Remove User</button>
            </form>
        </section>
    );
};

export default UserData;
