import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
    <header>
        <h1>Poções e Soluções</h1>
        <nav>
            <ul>
                <li><NavLink to="/about">Sobre nós</NavLink></li>
                <li><NavLink to="/potions">Compre</NavLink></li>
                <li><NavLink to="/admin">Administração</NavLink></li>
            </ul>
        </nav>
    </header>
    );
}