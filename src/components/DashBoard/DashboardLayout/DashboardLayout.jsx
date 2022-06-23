import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./DashboardLayout.css"
import { BsFillPersonFill } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'

const DashboardLayout = ({ children }) => {
  return (
    <div className='DashboarLayout'>
      <div className='DashboarLayout__Siderbar'>
        <Sidebar />
      </div>
      <div className='DashboarLayout__Main'>
        <div className='DashboarLayout__nav'>
          <div className="DashboardLayout__image">
            <BsFillPersonFill color="#cecece" />
          </div>
          <div className="DashboardLayout__person">
            <p className='verified'>Verified</p>
            <p style={{ display: "flex", alignItems: "center" }}>Bani &nbsp;<IoIosArrowDown /></p>
          </div>
        </div>
        {children}
        <div className='DashboardLayout__footer'>
          <div className='DashboardLayout__footer-link'>
            <ul>
              <li>
                <Link to="">FAQs</Link>
              </li>
              <li>
                <Link to="">Terms and Condition</Link>
              </li>
              <li>
                <Link to="">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className='DashboardLayout__footer-rights'>
            <p>Secure Trade Firm © 2022. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout