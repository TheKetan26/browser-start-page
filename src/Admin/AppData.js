import React, { useState } from 'react';


function getApps() {
    const storedData = localStorage.getItem('AppData');
    if (storedData) {
      console.log(JSON.parse(storedData));
    }
}


function removeAllApps() {
    localStorage.clear();
};


function removeApp(url) {
    const storedData = JSON.parse(localStorage.getItem('AppData'));

    if (storedData && Array.isArray(storedData)) {
        const index = storedData.findIndex((data) => data.url === url);

        if (index !== -1) {
        storedData.splice(index, 1);

        localStorage.setItem('AppData', JSON.stringify(storedData));
        }
    }
};


function AppData() {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [urlRemove, setUrlRemove] = useState('');


    const removeAppFunction = (event) => {
        event.preventDefault();
        removeApp(urlRemove);
        setUrlRemove('');
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name: name,
            url: url,
        };
        const storedData = JSON.parse(localStorage.getItem('AppData')) || [];
        const updatedData = [...storedData, formData];
        localStorage.setItem('AppData', JSON.stringify(updatedData));
        setName('');
        setUrl('');
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
                        Url:
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        name="url"
                    />
                    </label>
                </div>
                <button type="submit">Add App</button>
            </form>

            <button onClick = { getApps }>Get Apps</button>
            <button onClick = { removeAllApps }>Remove All Apps</button>

            <form onSubmit={removeAppFunction}>
                <label>
                    Url to Remove:
                </label>
                <input 
                    type="text"
                    value={urlRemove}
                    onChange={(e) => setUrlRemove(e.target.value)}
                    name="url"
                />
                <button type="submit">Remove App</button>
            </form>
        </section>
    );
};

export default AppData;
