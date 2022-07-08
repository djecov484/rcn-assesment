import React from 'react'
import { useNavigate } from 'react-router-dom'
import { capitalizeFirstLetter, toTitleCase } from './helpers'
import { selectUser } from './store/actions/userActions'
import { useDispatch } from 'react-redux/es/exports'

export default function Card({
  picture,
  name,
  location,
  phone,
  email,
  user,
  index,
}) {
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const handleCardClick = () => {
    let selectedUser = user
    let selectedUserIndex = index
    dispatch(selectUser(selectedUser))
    navigate('/profile', {
      state: {
        userInfo: selectedUser,
        userIndex: selectedUserIndex,
      },
    })
  }
  return (
    <div onClick={handleCardClick} className="col-md-4 col-sm-6 col-xs-12">
      <div className="thumbnail">
        <img src={picture.large} className="img-circle shadow-light" alt=".." />
        <div className="caption">
          <h3>
            {capitalizeFirstLetter(name.first)}{' '}
            {capitalizeFirstLetter(name.last)}
          </h3>
          <h5>
            {toTitleCase(`${location.city}, ${location.state}`)} <br />
            {location.street.name}
          </h5>
          <h5>
            <span
              className="glyphicon glyphicon-phone"
              aria-hidden="true"
            ></span>{' '}
            {phone}
          </h5>
          <a href={`mailto:${email}`} target="_top">
            <span
              className="btn btn-info glyphicon glyphicon-envelope"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </div>
    </div>
  )
}
