import './About.css';
const profilePic = new URL("/src/assets/profile.JPG", import.meta.url);

export default function About() {
    return (
        <div className="about-card">
            <img src={profilePic} alt="Profile" className="profile-pic" /> 
            <div className="profile-title"> 
                <h3 className="developer-role">Front-end Web Developer</h3>
                <h3 className='skills-set'>Stacks:</h3>
                <p className='skills-set'>JavaScript, CSS, MongoDB, Node.js, Express.js, React.js., Next.js, Redux.js</p>
            </div>
            <div className='bio' >
                <h2>About me</h2>
                <p className='bio-description'>
                    Hi there! I'm a passionate front-end developer with a focus on creating stunning web experiences. <br />

                    💻 With a knack for CSS, I breathe life into designs, ensuring they not only look pixel-perfect but also function flawlessly. <br />

                    🚀 JavaScript is my playground. I love crafting interactive and dynamic user interfaces that captivate and engage visitors. <br />

                    ⚛️ React is my superpower. I wield its capabilities to build efficient, scalable, and maintainable web applications that leave a lasting impression. <br />

                </p>
                <h5>
                    Let's create beautiful webpages together! 💻✨
                </h5>
            </div>
        </div>
    )
}