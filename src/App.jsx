import { useState, useEffect } from 'react'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  // Update body background based on darkMode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-gray-900')
      document.body.classList.remove('bg-gray-50')
    } else {
      document.body.classList.add('bg-gray-50')
      document.body.classList.remove('bg-gray-900')
    }
  }, [darkMode])

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Profile/>
    </div>
  )
}

export default App
