import { useLocation, useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import ChangeThemeButton from "./buttons/ChangeThemeButton"
import AppBarStyled from './StyledComponents/AppBarStyled'
import Toolbar from '@mui/material/Toolbar'
import { useEffect, useState } from "react"
import DrawerNav from "./DrawerNav"

export default function Nav() {
    const [isTop, setIsTop] = useState("true")
    function handleScroll() {
        window.scrollY > 0 ? setIsTop(""):setIsTop("true")
    }
    useEffect(() => {
        window.addEventListener("scroll",handleScroll)
        return ()=> window.removeEventListener("scroll",handleScroll)
    },[])
    const location = useLocation()
    const navigate = useNavigate()
    const links = [
        {to:"/",name:"Home"},
        {to:"/proyects",name:"Proyects"},
        {to:"/#contact",name:"Contact"}
    ]
    function printList(l) {
        let active = false
        if (location.hash) {
            location.hash === l.to.slice(1)? active = true:null
        } else if(location.pathname === l.to){
            active = true
        }
        return (
            <Button
                variant="text"
                color="primary"
                disabled={active}
                onClick={() => navigate(l.to)}
                key={l.name}
            >
                <Typography variant="subtitle">
                    {l.name}
                </Typography>
            </Button>
        );
    }
    return (
        <AppBarStyled
            position="sticky"
            color={isTop ? "transparent" : "default"}
            istop={isTop}
        >
            <DrawerNav>
                {links.map(printList)}
            </DrawerNav>
            <Typography variant="h4">
                Juan Pedro Galarza
            </Typography>
            <Toolbar className="tool-bar">
                {links.map(printList)}
                <ChangeThemeButton />
            </Toolbar>
        </AppBarStyled>
    )
}