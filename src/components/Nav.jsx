import { Link } from "react-router-dom"
import "../styles/Nav.css"

export default function Nav() {
    const links = [
        {to:"/",name:"Home"},
        {to:"/proyects",name:"Proyects"}
    ]
    function printList(l){
        return (
            <Link to={l.to} key={l.name} className="nav-item">{l.name}</Link>
        )
    }
    return (
        <nav className="nav">
            {links.map(printList)}
        </nav>
    )
}