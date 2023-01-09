import Nav from "./Nav";
import "../styles/Header.css"
import { useEffect, useState } from "react";
import Typography from '@mui/material/Typography'
const styleHeaderTop = {
    backgroundColor: "#0000",
    minHeight: "15vh"
}

export default function Header() {
    const [isTop, setIsTop] = useState(true)
    function handleScroll() {
        window.scrollY > 0 ? setIsTop(false):setIsTop(true)
    }
    useEffect(() => {
        window.addEventListener("scroll",handleScroll)
        return ()=> window.removeEventListener("scroll",handleScroll)
    },[])

    return (
        <header className="header"
            style={isTop?styleHeaderTop:null}>
            <Typography variant="h4">
                Juan Pedro Galarza
            </Typography>
            <Nav />
        </header>
    )
}