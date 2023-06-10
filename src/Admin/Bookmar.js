import React, { useState } from 'react';


function getBookmarks() {
    const storedData = localStorage.getItem('BookmarkData');
    if (storedData) {
      console.log(JSON.parse(storedData));
    }
}


function removeAllBookmarks() {
    localStorage.clear();
};


function removeBookmark(url) {
    const storedData = JSON.parse(localStorage.getItem('BookmarkData'));

    if (storedData && Array.isArray(storedData)) {
        const index = storedData.findIndex((data) => data.url === url);

        if (index !== -1) {
        storedData.splice(index, 1);

        localStorage.setItem('BookmarkData', JSON.stringify(storedData));
        }
    }
};


function BookmarkData() {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [urlRemove, setUrlRemove] = useState('');


    const removeBookmarkFunction = (event) => {
        event.preventDefault();
        removeBookmark(urlRemove);
        setUrlRemove('');
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name: name,
            url: url,
        };
        const storedData = JSON.parse(localStorage.getItem('BookmarkData')) || [];
        const updatedData = [...storedData, formData];
        localStorage.setItem('BookmarkData', JSON.stringify(updatedData));
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
                <button type="submit">Add Bookmark</button>
            </form>

            <button onClick = { getBookmarks }>Get Bookmarks</button>
            <button onClick = { removeAllBookmarks }>Remove All Bookmarks</button>

            <form onSubmit={removeBookmarkFunction}>
                <label>
                    Url to Remove:
                </label>
                <input 
                    type="text"
                    value={urlRemove}
                    onChange={(e) => setUrlRemove(e.target.value)}
                    name="url"
                />
                <button type="submit">Remove Bookmark</button>
            </form>
        </section>
    );
};

export default BookmarkData;
