import { lazy, Suspense } from "react"
import Loading from "../components/Loading"

const Contact = lazy(()=>import("../components/Contact"))

export default function Home() {
    return (
        <main className="main">
            <h1>Juan Pedro Galarza</h1>
            <Suspense fallback={<Loading />}>
                <Contact />
            </Suspense>
        </main>
    )
}