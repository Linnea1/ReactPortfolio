import "./Footer.css";

function Footer(){
    return (
        <footer>
            <div className="footer-content">
                <p>Made with ❤️ by Linnéa · 2026</p>
                <div className="footer-email">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>linnea.a.14@gmail.com</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;