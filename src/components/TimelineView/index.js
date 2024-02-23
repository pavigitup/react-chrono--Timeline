import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="bg-con">
      <div className="head-con">
        <h1>
          MY JOURNEY OF <span className="sub-head">CCBP 4.0</span>
        </h1>
      </div>

      <div className="chrono-container">
        <Chrono
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          mediaSettings={{fit: 'contain'}}
        >
          {timelineItemsList.map(time => {
            if (time.categoryId === 'PROJECT') {
              return (
                <ProjectTimelineCard project={time} key={time.categoryId} />
              )
            }
            return <CourseTimelineCard course={time} key={time.categoryId} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
