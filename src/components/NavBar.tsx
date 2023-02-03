import { Location, NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import ChangeThemeButton from "./buttons/ChangeThemeButton";
import AppBarStyled from './StyledComponents/AppBarStyled';
import DrawerNav from "./DrawerNav";
import React from "react";
import {
    ButtonGroup,
    Button,
    Typography,
    Toolbar,
    Container
} from "@mui/material";

export interface LinkForButton {
    name: string,
    to: string
};

export default function Nav():JSX.Element {
    const [isTop, setIsTop]:
        [boolean, React.Dispatch<React.SetStateAction<boolean>>]
        = React.useState<boolean>(true);
    function handleScroll():void {
        window.scrollY > 0 ? setIsTop(false) : setIsTop(true);
    };
    React.useEffect(():VoidFunction => {
        window.addEventListener("scroll", handleScroll)
        return ():void => window.removeEventListener("scroll", handleScroll);
    }, []);
    const location: Location = useLocation();
    const navigate: NavigateFunction = useNavigate();
    const links: LinkForButton[] = [
        { to: "/", name: "Home" },
        { to: "/proyects", name: "Proyects" },
        { to: "/#contact", name: "Contact" },
        { to: "/#about", name: "About" },
    ];
    function printList(l:LinkForButton):JSX.Element {
        let active = false;
        if (location.hash) {
            location.hash === l.to.slice(1) ? active = true : null;
        } else if(location.pathname === l.to){
            active = true;
        };
        return (
            <Button
                variant="text"
                color="warning"
                disabled={active}
                onClick={() => {navigate(l.to)}}
                key={l.name}
            >
                <Typography variant="subtitle1">
                    {l.name}
                </Typography>
            </Button>
        );
    };
    return (
        <AppBarStyled
            position="sticky"
            color={isTop ? "transparent" : "default"}
            istop={{ v: isTop }}
        >
            <DrawerNav list={links} />
            <Container maxWidth="xl">
                <Toolbar>
                    <ButtonGroup variant="contained" color="warning">
                        {links.map(printList)}
                    </ButtonGroup>
                    <ChangeThemeButton />
                </Toolbar>
                {isTop ?
                    null
                    : <Typography variant="h5" align="center">
                        Juan Pedro Galarza
                    </Typography>
                }
            </Container>
        </AppBarStyled>
    );
};