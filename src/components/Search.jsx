import { useState } from "react";
const Search = () => {
    const [data, setData] = useState()

    const getSearch = async (data) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${data}`);
        const users = await response.json();
        setData(users);
    }
    

    const handleChange = (e) => setData(e.target.value) 

    const handleSubmit = (e) => {
        e.preventDefault()
        getSearch(data)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input placeholder="search" value={data} onChange={handleChange} />
            <input type="submit" />
        </form>
    );
}

export default Search;