import React from 'react'
import AccountCard from '../../components/DashBoard/AccountCard/AccountCard'
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <h5>Welcome!</h5>
      <h2>Perfect Bani</h2>
      <small>Here's a summary of your account. Have fun!</small>
      <section>
        <AccountCard title="Add an Account that you'd like to receive payment or withdraw fund."
          BtnTitle="Add account"
        />
        <AccountCard title="Update your account information from your profile to complete account setup."
          BtnTitle="Update Profile"
        />
      </section>
    </div>
  )
}

export default Dashboard