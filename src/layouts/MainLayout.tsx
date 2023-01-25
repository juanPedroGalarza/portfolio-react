import React from "react";
import Loading from "../components/Loading";
const MainLayoutBody = React.lazy(() => import("../components/StyledComponents/MainLayoutBody"))
const NavBar = React.lazy(() => import("../components/NavBar"))
const ScrollFromPath = React.lazy(() => import("../components/ScrollFromPath"))

const MainLayout: React.FC<{children:React.ReactNode}> = (props) => {
    return (
        <React.Suspense fallback={<Loading />}>
            <MainLayoutBody>
                <NavBar />
                {props.children}
                <ScrollFromPath />
            </MainLayoutBody>
        </React.Suspense>
    )
}
export default MainLayout