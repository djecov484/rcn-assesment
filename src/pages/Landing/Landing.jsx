import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="bg">
      <h2 style={{ fontWeight: 'bold' }} className="text-center ">
        Landing Page
      </h2>
      <Link to="/users">
        <h2 style={{ fontWeight: 'bold' }} className="text-center ">
          Users
        </h2>
      </Link>
    </div>
  )
}

export default Landing
