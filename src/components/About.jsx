import RingMenu from "../components/RingMenu/RingMenu"

export default function About() {
    return (
        <div className="about">
            <section className="hook-body">
                <h2 className="introduction">
                    Hi, I'm Raymond Nguyen
                    <br/>
                    <span id="developer-role">  Front-end Developer</span>
                </h2>
                <p>
                Building Beautiful UIs, One React Component at a Time.
                </p>
                <div className="links-button">
                    <button className="resume-link">
                    Resume
                    </button>
                    <button className="contact-link">
                    Let's talk!
                    </button>
                </div>
            <p className="reviews">5.0 Rating based on reviews from:</p>
            </section>
            <hr></hr>
            <section className="my-portfolio">
                <div className="my-projects">
                    <a className="my-projects-text">:MY PROJECTS</a>
                </div>
                <RingMenu />
            </section>
        </div>
    );
}