export default function Header() {
    return (
        <header className="Header">
            <nav>
                <div className="link-tree">
                    <a className="socialMediaLink">Instagram</a>
                    <a className="socialMediaLink">Github</a>
                    <a className="socialMediaLink">Youtube</a>
                </div>
                <h2 className="my-title">RAYMOND.</h2>
                <ul className="links">
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    )
}