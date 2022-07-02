import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./DashboardLayout.css"
import { BsFillPersonFill } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { Link, Route, Routes, useLocation, useNavigate, useRoutes } from 'react-router-dom'
import Dashboard from '../../../Pages/Dashboard/Dashboard'
import Transaction from '../../../Pages/Transaction/Transaction'
import Investment from '../../../Pages/Investment/Investment'
import OurPlans from '../../../Pages/Plans/OurPlans'
import Profile from '../../../Pages/Profile/Profile'
import { auth, db } from '../../../firebase/firebaseConfig'
import { signOut } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'

const DashboardLayout = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const renderScreen = () => {
    if (pathname === "/dashboard") {
      return <Dashboard />
    } else if (pathname === "/dashboard/transaction") {
      return <Transaction />
    } else if (pathname === "/dashboard/investment") {
      return <Investment />
    } else if (pathname === "/dashboard/ourplans") {
      return <OurPlans />
    } else if (pathname === "/dashboard/profile") {
      return <Profile />
    }
  }

  const logout = async () => {
    await signOut(auth);
    navigate("/signin")
  };

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
            <p
              onClick={logout}
              style={{ display: "flex", alignItems: "center" }}>Bani &nbsp;<IoIosArrowDown /></p>
          </div>
        </div>
        <>
          {renderScreen()}
        </>
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