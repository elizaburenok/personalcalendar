import { useState } from 'react'
import { CalendarProvider } from './context/CalendarContext'
import { WeekView, DayView } from './pages'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('week')

  return (
    <CalendarProvider>
      <div className="app">
        <header className="app-header">
          <h1>Personal Calendar</h1>
          <nav className="app-nav">
            <button
              onClick={() => setCurrentView('week')}
            >
              Week View
            </button>
            <button
              onClick={() => setCurrentView('day')}
            >
              Day View
            </button>
          </nav>
        </header>

        <main className="app-main">
          {currentView === 'week' ? <WeekView /> : <DayView />}
        </main>
      </div>
    </CalendarProvider>
  )
}

export default App
