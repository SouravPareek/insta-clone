import { Link } from "react-router";
import "../styles/landing.scss";

const Landing = () => {
    return (
        <main className="landing-page">
            <section className="landing-card">
                <p className="eyebrow">Insta Clone</p>
                <h1>Welcome to your feed</h1>
                <p className="subtext">
                    Jump back in, create an account, or head straight to the feed.
                </p>

                <div className="landing-actions">
                    <Link className="button landing-button" to="/login">
                        Login
                    </Link>
                    <Link className="button landing-button" to="/register">
                        Register
                    </Link>
                    <Link className="button landing-button" to="/feed">
                        Go to Feed
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Landing;