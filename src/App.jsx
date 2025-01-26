import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import AdAnalysis from './AdAnalysis'
import Uploading from './Uploading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ad-analysis" element={<AdAnalysis />} />
        <Route path="/uploading" element={<Uploading />} />
      </Routes>
    </Router>
  )
}

export default App
