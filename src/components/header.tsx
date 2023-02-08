import { scrollToElement, scrollToTop } from "../data/Entry";

function Header() {
    return (  
        <header className="header">   
                <h1  onClick={() => scrollToTop()}>Sarawoot</h1>
                {/* <img className="logo" src="/public/images/logo.png" alt="logo"  /> */}
                <nav>
                    <ul className="nav__links">
                        <li onClick={() => scrollToElement('.position', 100)}>Information</li>
                        <li onClick={() => scrollToElement('.education', 100)}>Education</li>
                        <li onClick={() => scrollToElement('.experience', 100)}>Experience</li>
                        <li onClick={() => scrollToElement('.skill', 100)}>Skill</li>
                    </ul>
                </nav>
                <a href="#" className="contact-me"><button>Contact Me</button></a>
            </header>
    );
}

export default Header;