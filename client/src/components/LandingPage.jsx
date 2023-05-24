import { Link } from "react-router-dom";

export const LandingPage = () => {
    return (
        <div>
            <Link to="/home">
                <button>Go Home</button>
            </Link>
        </div>
    )
}