import PulseLoader from "react-spinners/PulseLoader"
import "../styles/Loading.css"

export default function Loading() {
    const override = {
        margin: 0
    }
    return (
        <div className="loading-container">
            <PulseLoader
                color="#3e1a75"
                cssOverride={override}
                size="5rem"
            />
        </div>
    )
}