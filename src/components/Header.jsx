import InstagramIcon from "../assets/instagram.svg";
import GithubIcon from "../assets/github.svg";
import YoutubeIcon from "../assets/youtube.svg";
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="Header">
            <nav>
                <div className="link-tree">
                    <div className="link-tree">
                        <a>
                            <img src={InstagramIcon} alt="Instagram" className="socialMediaIcon" />
                        </a>
                        <a>
                            <img src={GithubIcon} alt="Github" className="socialMediaIcon" />
                        </a>
                        <a>
                            <img src={YoutubeIcon} alt="Youtube" className="socialMediaIcon" />
                        </a>
                    </div>
                </div>
                <Link to="/" className="my-title">RAYMOND.</Link>
                <ul className="links">
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    )
}