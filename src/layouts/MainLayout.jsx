import { Suspense } from "react";
import { lazy } from "react";
import Loading from "../components/Loading";
const Header = lazy(() => import("../components/Header"))
const ScrollFromPath = lazy(()=> import("../components/ScrollFromPath"))

export default function MainLayout(props) {
    return (
        <Suspense fallback={<Loading />}>
            <Header />
            {props.children}
            <ScrollFromPath />
        </Suspense>
    )
}