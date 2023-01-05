import { Suspense } from "react";
import { lazy } from "react";
const Header = lazy(()=>import("../components/Header"))

export default function MainLayout(props) {
    return (
        <Suspense>
            <Header />
            {props.children}
        </Suspense>
    )
}