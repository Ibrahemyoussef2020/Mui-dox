import {
    Timeline,
    TimelineItem,
    TimelineDot,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent
} from '@mui/lab'

const TimeLineComp = () => {
  return (
    <div>
        <Timeline position='alternate'>
            <TimelineItem>
            <TimelineOppositeContent>
                45%
            </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='success'/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    languages
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    15%
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='warning'  />
                    <TimelineConnector /> 
                </TimelineSeparator>
                <TimelineContent>
                    liberries
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineOppositeContent>
                40%
            </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='error' />
                </TimelineSeparator>
                <TimelineContent>
                    experiences
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    </div>
  )
}

export default TimeLineComp