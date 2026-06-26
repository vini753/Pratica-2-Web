import { Link } from 'react-router-dom';
import "./About.css";

export default function About() {
    return (
        <div className="about">
            <div className="about-section">
                <div className="about-text">
                    <h1>Quem nós somos</h1>
                    <p>A Poções e Soluções é uma tradicional loja de poções. Localizada no Beco da última Saída, vendemos todo tipo de poções que você puder imaginar!</p>
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/5746/5746859.png" alt="Poção" />
            </div>

            <div className="about-section">
                <div className="about-text">
                    <h1>Nossa História</h1>
                    <p>Fundada em 1867 pela família Merigold, a Poções e Soluções se mantém como uma das principais lojas mágicas da região.</p>
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/7231/7231256.png" alt="Poção" />
            </div>

            <Link to="/potions">
                <button>Conheça nossos produtos!</button>
            </Link>
        </div>
    )
} 