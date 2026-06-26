import "./Footer.css"

export default function Footer() {
    return (
        <footer className="potion-footer">
            <div className="footer-about">
                <h3>Poções e Soluções</h3>
                <p>Produzindo as melhores poções desde 1867</p>
            </div>

            <div className="footer-contact">
                <h3>Contato</h3>
                <ul>
                    <li>Telefone: (11) 11111-1111</li>
                    <li>Email: pocoes@email.com</li>
                </ul>
            </div>
        </footer>
    );
}