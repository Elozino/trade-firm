import React from 'react'
import "./Profile.css"
import Account from '../../components/DashBoard/Account/Account'
import Activity from '../../components/DashBoard/Activity/Activity'
import Settings from '../../components/DashBoard/Settings/Settings'
import { Link, useLocation } from 'react-router-dom'
import ProfileDetails from '../../components/DashBoard/ProfileSettings/ProfileDetails'

const Profile = () => {
  const { pathname } = useLocation()
  console.log(pathname);
  console.log(window.location.href);

  const renderScreen = () => {
    if (pathname === "/dashboard/profile") {
      return <ProfileDetails />
    } else if (pathname === "/dashboard/account") {
      return <Account />
    } else if (pathname === "/dashboard/security") {
      return <Settings />
    } else if (pathname === "/dashboard/activity") {
      return <Activity />
    }
  }

  return (
    <div className='Profile'>
      <header>
        <h2>Profile Info</h2>
        <small>You have full control to manage your own account setting.</small>
      </header>
      <section className='Profile__profileContent'>
        <div className='Profile__profileHeader'>
          <p className='Profile__profileTitle active'>
            <Link to="profile">Profile</Link>
          </p>
          <p className='Profile__profileTitle'>
            <Link to="account">Accounts</Link>
          </p>
          <p className='Profile__profileTitle'>
            <Link to="security">Security</Link>
          </p>
          <p className='Profile__profileTitle'>
            <Link to="activity">Activity</Link>
          </p>
        </div>
      </section>
      {renderScreen()}
      {/* <Account /> */}
      {/* <Activity /> */}
      {/* <Settings /> */}

    </div>
  )
}

export default Profile