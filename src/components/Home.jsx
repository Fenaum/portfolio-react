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
                    <div className="links-buttons">
                        <a href="https://docs.google.com/document/d/1cPPrVMeQnm8LUGbE-LPDBTgGhnBnD-uGOlWO_DdARyw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="resume-link">
                                <span>Resume</span> <img src={externalLinkIcon} alt="Resume Icon" className="external-icon"/>
                            </button>
                        </a>
                        <Link to="/contact">
                            <button className="contact-link">
                                Let's talk!
                            </button>
                        </Link>
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
