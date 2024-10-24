import React, {useState} from 'react'
import "./SearchBar.css";

export const SearchBar = () => {
    const {input, setInput} = useState("")

    const fetchData = (value) => {
        
    }

    return (
        <div className="input-wrapper">
        <input placeholder="Enter GitHub username" value={input} onChange={(e) => setInput(e.target.value)} />

        </div>
    );
}