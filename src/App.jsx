import { useState } from 'react'
import { CalendarProvider } from './context/CalendarContext'
import { WeekView, DayView } from './pages'
import { Button } from './components'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('week')

  return (
    <CalendarProvider>
      <div className="app">
        <header className="app-header">
          <h1>Personal Calendar</h1>
          <nav className="app-nav">
            <Button
              variant={currentView === 'week' ? 'primary' : 'outline'}
              onClick={() => setCurrentView('week')}
            >
              Week View
            </Button>
            <Button
              variant={currentView === 'day' ? 'primary' : 'outline'}
              onClick={() => setCurrentView('day')}
            >
              Day View
            </Button>
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
