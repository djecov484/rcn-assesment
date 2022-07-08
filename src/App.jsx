import React from 'react'
import './app.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Users from './pages/Users/Users.jsx'
import Profile from './pages/Profile/Profile.jsx'
import Landing from './pages/Landing/Landing.jsx'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
