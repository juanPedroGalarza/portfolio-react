import { Link } from "react-router-dom"

export default function Nav() {
    const links = [
        {to:"/",name:"Home"},
        {to:"/proyects",name:"Proyects"}
    ]
    function printList(l){
        return (
            <Link to={l.to} key={l.name}>{l.name}</Link>
        )
    }
    return (
        <nav>
            <p>nav</p>
            {links.map(printList)}
        </nav>
    )
}