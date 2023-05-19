import { useState } from "react";

const LoginForm = () => {

    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" name="username" value={data.username} onChange={handleChange}/>
            <input type="password" placeholder="password" name="password" value={data.password} onChange={handleChange}/>
            <input type="submit" />
        </form>
    );
}

export default LoginForm;