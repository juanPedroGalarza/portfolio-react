import { lazy, Suspense } from "react"
import Loading from "../components/Loading"

const Contact = lazy(()=>import("../components/Contact"))

export default function Home() {
    return (
        <main className="main">
            <Suspense fallback={<Loading />}>
                <Contact />
            </Suspense>
        </main>
    )
}