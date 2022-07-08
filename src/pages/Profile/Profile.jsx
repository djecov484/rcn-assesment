import React from 'react'
import { useLocation } from 'react-router-dom'

import { capitalizeFirstLetter, toTitleCase } from '../../helpers'
import { useSelector } from 'react-redux/es/exports'

function Profile() {
  const gUser = useSelector((state) => state.selectedUser)
  console.log('g user', gUser)
  const location = useLocation()

  const individualUser = location.state.userInfo
  console.log(location.state.userInfo)
  const event = new Date(individualUser.dob.date)

  let myBirthday, today, bday, diff, days

  myBirthday = [
    parseInt(event.getDate().toString()),
    parseInt(event.getMonth().toString()),
  ]
  today = new Date()
  bday = new Date(today.getFullYear(), myBirthday[1] - 1, myBirthday[0])
  if (today.getTime() > bday.getTime()) {
    bday.setFullYear(bday.getFullYear() + 1)
  }
  diff = bday.getTime() - today.getTime()
  days = Math.floor(diff / (1000 * 60 * 60 * 24))

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{ padding: '20px' }}
        className="col-md-8 col-sm-6 col-xs-12 shadow-light  "
      >
        <div className="text-center ">
          <img
            src={individualUser.picture.large}
            className="img-circle shadow-light"
            alt=".."
          />
          <div className="caption text-center ">
            <h3>
              {capitalizeFirstLetter(individualUser.name.first)}{' '}
              {capitalizeFirstLetter(individualUser.name.last)}
            </h3>
            <h5>
              {toTitleCase(
                `${individualUser.location.city}, ${individualUser.location.state}`,
              )}{' '}
              <br />
              {individualUser.location.street.name}
            </h5>
            <h5>Age: {individualUser.dob.age} </h5>
            <h5>
              {' '}
              Month: {event.getMonth()}, Date: {event.getDate()}, Year:{' '}
              {event.getFullYear()},{' '}
            </h5>
            <h5>Days till birthday: {days} </h5>
            <h5>
              <span
                className="glyphicon glyphicon-phone"
                aria-hidden="true"
              ></span>{' '}
              {individualUser.phone}
            </h5>
            <a href={`mailto:${individualUser.email}`} target="_top">
              <span
                className="btn btn-info glyphicon glyphicon-envelope"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
