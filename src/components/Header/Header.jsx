import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <h1>SEP</h1>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/studylens">StudyLens</Link>
                <Link to="/modocustomizavel">Modo Customizável</Link>
                <Link to="/">Inicio</Link>
            </nav>
        </header>
    );
}

export default Header;