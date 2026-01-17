import { useState } from 'react'
import { CalendarProvider } from './context/CalendarContext'
import TypographyTest from './pages/TypographyTest'
import Calendar from './pages/Calendar'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('calendar')

  return (
    <CalendarProvider>
      <div className="app">
        <header className="app-header">
          <h1>Personal Calendar</h1>
          <nav className="app-nav">
            <button
              onClick={() => setCurrentView('calendar')}
            >
              Calendar
            </button>
            <button
              onClick={() => setCurrentView('typography')}
            >
              Typography Test
            </button>
          </nav>
        </header>

        <main className="app-main">
          {currentView === 'calendar' && <Calendar />}
          {currentView === 'typography' && <TypographyTest />}
        </main>
      </div>
    </CalendarProvider>
  )
}

export default App
