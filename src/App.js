import { useState } from 'react';
import Background from './Background';
import Search from './Search/Search';
import './App.css';
import Engine from './Engine/Engine';
import Bookmark from './Bookmark/Bookmark';
import Accounts from './Accounts/Accounts';


export default function App() {
    const [input, setInput] = useState('')
    const [engine, setEngine] = useState('google')
    const [type, setType] = useState('all')


    const search = () => {
        setInput(input.trim())
        var query
        if (input !== '') {
            if (engine === 'google') {
                query = input.split(" ").join("+")
                query = `https://www.google.com/search?q=${query}`
            }
            else if (engine === 'yahoo') 
                query = `https://search.yahoo.com/search?q=${input}`;
            else if (engine === 'ddg') 
                query = `https://duckduckgo.com/?q=${input}`;
            else if (engine === 'bing') {
                query = input.split(" ").join("+")
                query = `https://www.bing.com/search?q=${query}`
            }

            if (type !== 'all' && engine !== 'google') {
                alert('Type searching is only available with Google.')
                return;
            } else if (type === 'video') {
                query = `${query} %2B(mkv|mp4|avi|mov|mpg|wmv|divx|mpeg) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|index-of|wallywashis|downloadmana)`
            } else if (type === 'audio') {
                query = `${query} %2B(mp3|wav|ac3|ogg|flac|wma|m4a|aac|mod) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|index-of|wallywashis|downloadmana)`
            } else if (type === 'application') {
                query = `${query} %2B(exe|iso|dmg|tar|7z|bz2|gz|rar|zip|apk) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|index-of|wallywashis|downloadmana)`
            } else if (type === 'image') {
                query = `${query} %2B(jpg|png|bmp|gif|tif|tiff|psd) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|index-of|wallywashis|downloadmana)`
            } else if (type === 'document') {
                query = `${query} %2B(MOBI|CBZ|CBR|CBC|CHM|EPUB|FB2|LIT|LRF|ODT|PDF|PRC|PDB|PML|RB|RTF|TCR|DOC|DOCX) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|index-of|wallywashis|downloadmana)`
            } 

            window.location.replace(query)
        }
    }


    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            search()
        }
    }


    return (
        <section onKeyDown = { handleEnter }>
            <Background />
            <Search input = { input } setInput = { setInput } search = { search } />
            <Engine engine = { engine } setEngine = { setEngine } type = { type } setType = { setType } />/
            <Bookmark />
            <Accounts />
        </section>
    );
};