import { useEffect } from "react"
import { useNavigate } from "react-router"

export default function Protected() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/")
    }, [])
    
    return (
        <>
            
        </>
    )
}