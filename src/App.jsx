import { useState } from 'react'
import { CalendarProvider } from './context/CalendarContext'
import TypographyTest from './pages/TypographyTest'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('typography')

  return (
    <CalendarProvider>
      <div className="app">
        <header className="app-header">
          <h1>Personal Calendar</h1>
          <nav className="app-nav">
            <button
              onClick={() => setCurrentView('typography')}
            >
              Typography Test
            </button>
          </nav>
        </header>

        <main className="app-main">
          {currentView === 'typography' && <TypographyTest />}
        </main>
      </div>
    </CalendarProvider>
  )
}

export default App
