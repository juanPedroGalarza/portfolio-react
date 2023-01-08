import { Link, useLocation } from "react-router-dom"
import "../styles/Nav.css"

export default function Nav() {
    const location = useLocation()
    const links = [
        {to:"/",name:"Home"},
        {to:"/proyects",name:"Proyects"},
        {to:"/#contact",name:"Contact"}
    ]
    function printList(l) {
        let active = ""
        if (location.hash) {
            location.hash === l.to.slice(1)? active = "active":null
        } else if(location.pathname === l.to){
            active = "active"
        }
        return (
            <Link to={l.to}
                key={l.name}
                className={`nav-item ${active}`}
            >{l.name}</Link>
        )
    }
    return (
        <nav className="nav">
            {links.map(printList)}
        </nav>
    )
}