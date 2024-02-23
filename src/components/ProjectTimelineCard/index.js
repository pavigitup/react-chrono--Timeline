import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {project} = props
  const {projectTitle, imageUrl, duration, projectUrl, description} = project
  console.log(project)

  return (
    <div className="project-con">
      <h1>{projectTitle}</h1>
      <img src={imageUrl} alt="project" className="image-project" />
      <div className="time">
        <AiFillCalendar />
        <p>{duration}</p>
      </div>

      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
