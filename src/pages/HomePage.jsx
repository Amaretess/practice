import { useState } from "react";
import Modal from "../components/Modal";
import LoginForm from "../components/LoginForm";
import Card from "../components/Card";
import SignUpForm from "../components/SignupForm";
import Search from "../components/Search";

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClosed = () => setIsOpen(false);


    const data = [
        {
            id: 1,
            username: "ashlynbarna7",
            password: "dummypassword"
        },
        {
            id: 2,
            username: "babe999",
            password: "dummypassword"
        },
        {
            id: 3,
            username: "ashlynbarna7",
            password: "dummypassword"
        },
        {
            id: 4,
            username: "babe999",
            password: "dummypassword"
        },

    ]

    return (
        <>
        <Search />
        <button onClick={handleOpen}>open me</button>
        <Modal isClosed={handleClosed} isOpen={isOpen}>
            <h1>hello modal</h1>
        </Modal>
        <LoginForm />
        <SignUpForm />
        {data.map((user) => <Card key={user.id} username={user.username} password={user.password} /> )}
        </>
    );
}

export default HomePage;