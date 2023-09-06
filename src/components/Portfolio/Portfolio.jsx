import './Portfolio.css'
import projects from '../../../db/projects'
import githubImg from '../../assets/github.svg'
import externalLink from '../../assets/external-link.svg'

export default function Portfolio() {
    const projectCards = projects.map((project, index) => {
        return (
            <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <img className='card-img' src={project.imgUrl} alt='project image' ></img>
                <p className='projectDescription'>{project.description}</p>
                <a className='githublink' href={project.githubUrl} target='_blank' >
                    Repo <img src={githubImg} alt='github icon' ></img>
                </a>
                <a className='projectLink' href={project.url} target='_blank' >
                    App <img src={externalLink} alt='External Link' ></img>
                </a>
            </div>
        )
    })

    return (
        <div className="portfolio-container">
            <div className="portfolio-grid">
                {projectCards}
            </div>
        </div>
    )
}