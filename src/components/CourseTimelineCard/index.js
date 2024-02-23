import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {course} = props
  const {courseTitle, description, duration, tagsList} = course
  return (
    <div>
      <div className="head-time">
        <h1>{courseTitle}</h1>
        <div className="time">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>

      <p>{description}</p>

      <ul>
        {tagsList.map(each => (
          <li key={each.name}>
            <p className="names">{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
