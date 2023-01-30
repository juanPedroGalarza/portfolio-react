import { useLocation, useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import ChangeThemeButton from "./buttons/ChangeThemeButton"
import AppBarStyled from './StyledComponents/AppBarStyled'
import Toolbar from '@mui/material/Toolbar'
import DrawerNav from "./DrawerNav"
import React from "react"

export interface LinkForButton {
    name: string,
    to: string
}

export default function Nav() {
    const [isTop, setIsTop] = React.useState<"true"|"false">("true")
    function handleScroll():void {
        window.scrollY > 0 ? setIsTop("false"):setIsTop("true")
    }
    React.useEffect(() => {
        window.addEventListener("scroll",handleScroll)
        return ()=> window.removeEventListener("scroll",handleScroll)
    },[])
    const location = useLocation()
    const navigate = useNavigate()
    const links: LinkForButton[] = [
        {to:"/",name:"Home"},
        {to:"/proyects",name:"Proyects"},
        {to:"/#contact",name:"Contact"}
    ]
    function printList(l:LinkForButton) {
        let active = false
        if (location.hash) {
            location.hash === l.to.slice(1)? active = true:null
        } else if(location.pathname === l.to){
            active = true
        }
        return (
            <Button
                variant="contained"
                color="primary"
                disabled={active}
                onClick={() => {navigate(l.to)}}
                key={l.name}
            >
                <Typography variant="subtitle1">
                    {l.name}
                </Typography>
            </Button>
        );
    }
    return (
        <AppBarStyled
            position="sticky"
            color={isTop==="true" ? "transparent" : "default"}
            istop={isTop}
        >
            <DrawerNav list={links} />
            <Typography variant="subtitle1">
                Juan Pedro Galarza
            </Typography>
            <Toolbar className="tool-bar">
                {links.map(printList)}
                <ChangeThemeButton />
            </Toolbar>
        </AppBarStyled>
    )
}