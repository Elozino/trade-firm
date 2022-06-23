import React from 'react'
import "./Investment.css"
import { BsArrowRight } from 'react-icons/bs'
import DashboardLayout from '../../components/DashBoard/DashboardLayout/DashboardLayout'

const Investment = () => {
  return (
    <DashboardLayout>
      <div className="Investment">
        <header>
          <div>
            <h5>Investment</h5>
            <h2>Invested Plans</h2>
            <small>At a glance summary of your investment.</small>
          </div>
          <div className='Investment__headerBtn'>
            <button className='deposit'>Deposit Funds
              <BsArrowRight size={16} style={{ marginLeft: "10px" }} />
            </button>
            <button className='invest'>Invest & Earn
              <BsArrowRight size={16} style={{ marginLeft: "10px" }} />
            </button>
          </div>
        </header>
      </div>
    </DashboardLayout>
  )
}

export default Investment