import { Link } from "react-router-dom";
import { Logo } from "../SVG/Logo"
import "./Header.scss";

export const Header = () => {
    return (
        <>
            <header className="app__header">
                <div className="app__header_wrapper">
                    <div className="app__header_logo">
                        <Logo/>
                    </div>
                    <nav className="app__header_navigation">
                            <Link to="/" className="app__header_navigation-item">
                                ГЛАВНАЯ
                            </Link>
                            <Link to="/Action" className="app__header_navigation-item">
                                АУКЦИОН
                            </Link>
                            <li className="app__header_navigation-item">КРАФТ</li>
                            <Link to="/Inventory" className="app__header_navigation-item">
                                МОЙ ИНВЕНТАРЬ
                            </Link>
                    </nav>
                    <div className="app__header_accaunt">
                        <img src="/Accaunt.png" alt="Accaunt" />
                    </div>
                </div>
            </header>
        </>
    )
}