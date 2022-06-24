import React from 'react'
import "./Profile.css"
import DashboardLayout from '../../components/DashBoard/DashboardLayout/DashboardLayout'
import AccountCard from '../../components/DashBoard/AccountCard/AccountCard'
import { IoIosAlert, IoIosArrowForward } from 'react-icons/io'

const Profile = () => {
  return (
    <DashboardLayout>
      <div className='Profile'>
        <header>
          <h2>Profile Info</h2>
          <small>You have full control to manage your own account setting.</small>
        </header>
        <section className='Profile__profileContent'>
          <div className='Profile__profileHeader'>
            <p className='Profile__profileTitle active'>Profile</p>
            <p className='Profile__profileTitle'>Accounts</p>
            <p className='Profile__profileTitle'>Security</p>
            <p className='Profile__profileTitle'>Activity</p>
          </div>
        </section>
        <section>
          <AccountCard
            icon={<IoIosAlert color="#037DFF" />}
            bg="transparent"
            color="#037DFF"
            title="Update your account information from your profile to complete account setup."
            BtnTitle="Update Profile"
          />
        </section>
        <section className='Profile__info'>
          <h4>Personal Information</h4>
          <small>Basic info, like your name and address, that you use on our platform.</small>
          <div className='Profile__details'>
            <div className="Profile__row">
              <p>Full Name</p>
              <div>
                <p>Perfect Bani</p>
                <span><IoIosArrowForward /></span>
              </div>
            </div>
            <div className="Profile__row">
              <p>Display Name</p>
              <div>
                <p>Perfect Bani</p>
                <span><IoIosArrowForward /></span>
              </div>
            </div>
            <div className="Profile__row">
              <p>Email</p>
              <div>
                <p>email@email.com</p>
                <span><IoIosArrowForward /></span>
              </div>
            </div>
            <div className="Profile__row">
              <p>Phone Number</p>
              <div>
                <p>Not added yet</p>
                <span><IoIosArrowForward /></span>
              </div>
            </div>
            <div className="Profile__row">
              <p>Telegram</p>
              <div>
                <p>Not added yet</p>
                <span><IoIosArrowForward /></span>
              </div>
            </div>
            <div className="Profile__row">
              <p>Gender</p>
              <div>
                <p>Not added yet</p>
                <span><IoIosArrowForward /></span>
              </div>
            </div>
            <div className="Profile__row">
              <p>Date of Birth</p>
              <div>
                <p>Not added yet</p>
                <span><IoIosArrowForward /></span>
              </div>
            </div>
            <div className="Profile__row">
              <p>Country</p>
              <div>
                <p>Not added yet</p>
                <span><IoIosArrowForward /></span>
              </div>
            </div>
            <div className="Profile__row">
              <p>Address</p>
              <div>
                <p>Not added yet</p>
                <span><IoIosArrowForward /></span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}

export default Profile