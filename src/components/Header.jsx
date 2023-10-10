import InstagramIcon from "../assets/instagram.svg";
import GithubIcon from "../assets/github.svg";
import YoutubeIcon from "../assets/youtube.svg";
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="Header">
            <nav>
                <div className="link-tree">
                        <a href="https://www.instagram.com/raydiant.io/" target="_blank" rel="noopener noreferrer">
                            <img src={InstagramIcon} alt="Instagram" className="socialMediaIcon" />
                        </a>
                        <a href="https://github.com/Fenaum" target="_blank" rel="noopener noreferrer">
                            <img src={GithubIcon} alt="Github" className="socialMediaIcon" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCpU_o87GwZNDgEID50yhaww" target="_blank" rel="noopener noreferrer">
                            <img src={YoutubeIcon} alt="Youtube" className="socialMediaIcon" />
                        </a>
                </div>
                <Link to="/" className="my-title" >RAYMOND.</Link>
                <ul className="links">
                    <li>
                        <Link to="/about" >About</Link>
                    </li>
                    <li>
                        <Link to="/contact" >Contact</Link>
                    </li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    )
}