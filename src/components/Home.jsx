import RingMenu from "./RingMenu/RingMenu";
import { Link } from 'react-router-dom'
import externalLinkIcon from '../assets/external-link.svg'

export default function Home() {
    return (
        <div className="home">
            <section className="hook-body">
                <h2 className="introduction">
                    Hi, I'm Raymond Nguyen
                    <br />
                    <span id="developer-role"> Front-end Developer</span>
                </h2>
                <p>Building Beautiful UIs, One React Component at a Time.</p>
                    <div className="links-button">
                        <button className="resume-link">
                            <a href="https://docs.google.com/document/d/1cPPrVMeQnm8LUGbE-LPDBTgGhnBnD-uGOlWO_DdARyw/edit?usp=sharing" className="resume" target="blank" rel="noopener noreferrer" >
                                Resume <img src={externalLinkIcon} alt="Resume Icon" className="external-icon"/>
                            </a>
                        </button>
                        <button className="contact-link">
                            <Link to="/contact">
                                Let's talk!
                            </Link>
                        </button>
                    </div>
            </section>
            <hr></hr>
            <section className="my-portfolio">
                <div className="my-projects">
                    <Link to="/portfolio" className="my-projects-text">:MY PROJECTS</Link>
                </div>
                <RingMenu />
            </section>
    </div>
    );
}
