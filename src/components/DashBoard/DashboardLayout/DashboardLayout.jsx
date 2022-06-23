import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./DashboardLayout.css"
import { BsFillPersonFill } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'

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
      </div>
    </div>
  )
}

export default DashboardLayout