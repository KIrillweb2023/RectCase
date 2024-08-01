import { Link } from "react-router-dom";
import { Logo } from "../SVG/Logo"
import "./Header.scss";

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <Logo/>
                    </div>
                    <nav className="header__navigation">
                            <Link to="/" className="header__navigation_item">
                                ГЛАВНАЯ
                            </Link>
                            <Link to="/Action" className="header__navigation_item">
                                АУКЦИОН
                            </Link>
                            <li className="header__navigation_item">КРАФТ</li>
                            <Link to="/Inventory" className="header__navigation_item">
                                МОЙ ИНВЕНТАРЬ
                            </Link>
                    </nav>
                    <div className="header__accaunt">
                        <img src="/Accaunt.png" alt="Accaunt" />
                    </div>
                </div>
            </header>
        </>
    )
}