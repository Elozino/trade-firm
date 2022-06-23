import React from 'react'
import "./FundsCard.css"
import { IoMdAlert } from 'react-icons/io'


const FundsCard = ({ title, duration, bg }) => {
  return (
    <div className='FundsCard' style={{ borderBottom: `2px solid ${bg}` }}>
      <div>
        <header>
          <h4>{title}</h4>
          <IoMdAlert />
        </header>
        <div>
          <p>
            0 <span>USD</span>
          </p>
        </div>
      </div>
      <div className='FundsCard__period'>
        <h5>{duration}</h5>
        <p>
          0 <span>USD</span>
        </p>
      </div>
    </div>
  )
}

export default FundsCard