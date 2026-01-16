import { useState } from 'react'
import { useCalendar } from '../../context/CalendarContext'
import { getWeekStart, getWeekDays, formatDate, getDayName } from '../../utils/dateUtils'
import './WeekView.css'

const WeekView = () => {
  const { tasks, addTask, deleteTask } = useCalendar()
  const [currentWeek, setCurrentWeek] = useState(getWeekStart())
  const weekDays = getWeekDays(currentWeek)

  const goToPreviousWeek = () => {
    const newWeek = new Date(currentWeek)
    newWeek.setDate(newWeek.getDate() - 7)
    setCurrentWeek(newWeek)
  }

  const goToNextWeek = () => {
    const newWeek = new Date(currentWeek)
    newWeek.setDate(newWeek.getDate() + 7)
    setCurrentWeek(newWeek)
  }

  const goToCurrentWeek = () => {
    setCurrentWeek(getWeekStart())
  }

  const getTasksForDate = (date) => {
    const dateStr = formatDate(date)
    return tasks.filter((task) => task.date === dateStr)
  }

  return (
    <div className="week-view">
      <div className="week-view-header">
        <h1>Week View</h1>
        <div className="week-navigation">
          <button onClick={goToPreviousWeek}>← Previous</button>
          <button onClick={goToCurrentWeek}>Today</button>
          <button onClick={goToNextWeek}>Next →</button>
        </div>
      </div>

      <div className="week-grid">
        {weekDays.map((day, index) => {
          const dayTasks = getTasksForDate(day)
          const isToday = formatDate(day) === formatDate(new Date())

          return (
            <div key={index} className={`day-card ${isToday ? 'day-card--today' : ''}`}>
              <div className="day-header">
                <h3>{getDayName(day, true)}</h3>
                <span className="day-date">{formatDate(day, 'MM/DD')}</span>
              </div>
              <div className="day-tasks">
                {dayTasks.length === 0 ? (
                  <p className="no-tasks">No tasks</p>
                ) : (
                  dayTasks.map((task) => (
                    <div key={task.id} className="task-item">
                      <span>{task.title}</span>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="task-delete"
                      >
                        ×
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WeekView
