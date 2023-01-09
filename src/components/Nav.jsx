import { useLocation, useNavigate } from "react-router-dom"
import "../styles/Nav.css"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

export default function Nav() {
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
                variant="contained"
                color="secondary"
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
        <nav className="nav">
            {links.map(printList)}
        </nav>
    )
}