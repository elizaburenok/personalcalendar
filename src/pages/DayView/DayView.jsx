import { useState } from 'react'
import { useCalendar } from '../../context/CalendarContext'
import { formatDate, getDayName } from '../../utils/dateUtils'
import './DayView.css'

const DayView = () => {
  const { activities, addActivity, deleteActivity } = useCalendar()
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [newActivity, setNewActivity] = useState({ title: '', time: '' })

  const dateStr = formatDate(selectedDate)
  const dayActivities = activities.filter((activity) => activity.date === dateStr)

  const handleAddActivity = () => {
    if (newActivity.title && newActivity.time) {
      addActivity({
        ...newActivity,
        date: dateStr,
      })
      setNewActivity({ title: '', time: '' })
    }
  }

  const sortedActivities = [...dayActivities].sort((a, b) => {
    return a.time.localeCompare(b.time)
  })

  return (
    <div className="day-view">
      <div className="day-view-header">
        <h1>Day View</h1>
        <input
          type="date"
          value={dateStr}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
          className="date-picker"
        />
      </div>

      <div className="day-info-card">
        <h2>{getDayName(selectedDate)}</h2>
        <p className="day-date-full">{formatDate(selectedDate, 'MMMM DD, YYYY')}</p>
      </div>

      <div className="add-activity-card">
        <h3>Add Activity</h3>
        <div className="activity-form">
          <input
            type="text"
            placeholder="Activity title"
            value={newActivity.title}
            onChange={(e) =>
              setNewActivity({ ...newActivity, title: e.target.value })
            }
          />
          <input
            type="time"
            placeholder="Time"
            value={newActivity.time}
            onChange={(e) =>
              setNewActivity({ ...newActivity, time: e.target.value })
            }
          />
          <button onClick={handleAddActivity}>Add Activity</button>
        </div>
      </div>

      <div className="activities-list">
        <h3>Planned Activities</h3>
        {sortedActivities.length === 0 ? (
          <div>
            <p className="no-activities">No activities planned for this day</p>
          </div>
        ) : (
          sortedActivities.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-time">{activity.time}</div>
              <div className="activity-content">
                <h4>{activity.title}</h4>
              </div>
              <button
                onClick={() => deleteActivity(activity.id)}
                className="activity-delete"
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default DayView
