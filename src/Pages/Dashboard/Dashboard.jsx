import React from 'react'
import AccountCard from '../../components/DashBoard/AccountCard/AccountCard'
import DashboardLayout from '../../components/DashBoard/DashboardLayout/DashboardLayout'
import "./Dashboard.css"
import { TiWarning } from "react-icons/ti"
import { IoIosAlert } from 'react-icons/io'
import { BsArrowRight } from 'react-icons/bs'

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className='Dashboard'>
        <header>
          <div>
            <h5>Welcome!</h5>
            <h2>Perfect Bani</h2>
            <small>Here's a summary of your account. Have fun!</small>
          </div>
          <div className='Dashboard__headerBtn'>
            <button className='invest'>Invest & Earn
              <BsArrowRight size={18} style={{ marginLeft: "10px" }} />
            </button>
            <button className='deposit'>Deposit
              <BsArrowRight size={18} style={{ marginLeft: "10px" }} />
            </button>
          </div>
        </header>
        <section>
          <AccountCard
            icon={<TiWarning color="#F4BD0E" />}
            color="#fff"
            bg="#F4BD0E"
            title="Add an Account that you'd like to receive payment or withdraw fund."
            BtnTitle="Add account"
          />
          <AccountCard
            icon={<IoIosAlert color="#037DFF" />}
            bg="transparent"
            color="#037DFF"
            title="Update your account information from your profile to complete account setup."
            BtnTitle="Update Profile"
          />
        </section>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard