import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <h1>SEP</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/studylens">StudyLens</Link>
                <Link to="/modocustomizavel">Modo Customizável</Link>
            </nav>
        </header>
    );
}

export default Header;