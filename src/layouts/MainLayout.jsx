import { Suspense } from "react";
import { lazy } from "react";
import Loading from "../components/Loading";
const MainLayoutBody = lazy(() => import("../components/StyledComponents/MainLayoutBody"))
const NavBar = lazy(() => import("../components/NavBar"))
const ScrollFromPath = lazy(() => import("../components/ScrollFromPath"))

export default function MainLayout(props) {
    return (
        <Suspense fallback={<Loading />}>
            <MainLayoutBody>
                <NavBar />
                {props.children}
                <ScrollFromPath />
            </MainLayoutBody>
        </Suspense>
    )
}