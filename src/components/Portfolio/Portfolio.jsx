import './Portfolio.css'
import projects from '../../../db/projects'

export default function Portfolio() {
    return (
        <a href={projects.imgUrl} className="portfolio-container">
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a></a>
                        {/* Add more project details here */}
                    </div>
                ))}
            </div>
        </a>
    )
}