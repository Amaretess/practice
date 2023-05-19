import { useState } from "react"

const SignUpForm = () => {

    const [users, setUsers] = useState({
        email: "",
        username: "",
        password: ""
    })


    const handleChange = (e) => {
        setUsers({
            ...users,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(users)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" placeholder="email" name="email" value={users.email} />
            <input onChange={handleChange} type="text" placeholder="username" name="username" value={users.username}/>
            <input onChange={handleChange} type="password" placeholder="password" name="password" value={users.password}/>
            <input type="submit" />
        </form>
    );
}

export default SignUpForm;