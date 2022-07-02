import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"
import { RiDashboardLine, RiUserSettingsLine } from "react-icons/ri"
import { MdOutlineSwapHorizontalCircle } from "react-icons/md"
import { AiOutlineTransaction } from "react-icons/ai"
import { sidebar } from '../../../Data/sidebar'

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  // console.log(activeIndex);

  return (
    <div className='Sidebar'>
      <div className='Sidebar__header'>
        BANIWAZ
      </div>
      <div className="Sidebar__content">
        <section className='Sidebar__account'>
          <h5>MAIN ACCOUNT BALANCE</h5>
          <p className="Sidebar__usd">0.00 <span>USD</span></p>
          <p className="Sidebar__btc">0.00 BTC</p>
          <div className='Sidebar__profit'>
            <p>Profits (7d)</p>
            <p>0.00 USD</p>
          </div>
          <div className="Sidebar__btn">
            <button className='deposit'>DEPOSIT</button>
            <button className='withdraw'>WITHDRAW</button>
          </div>
        </section>
        <section className='Sidebar__menu'>
          <h5>MENU</h5>
          <div className='Sidebar__menuLink'>
            {sidebar.map((item, i) => (
              <div
                key={i + item.linkName.slice(0, 3)}
                onClick={() => {
                  setActiveIndex(i)
                  console.log({ i })
                  console.log({ activeIndex })
                }}
                className='Sidebar__link'
                style={{ backgroundColor: activeIndex === i && "#192839" }}
              >
                <Link to={item.url}>
                  <span>
                    <RiDashboardLine />
                  </span>
                  <span>{item.linkName}</span>
                </Link>
              </div>
            ))}
            {/* <div className='Sidebar__link'>
              <Link to="">
                <MdOutlineSwapHorizontalCircle />
                <span>Transaction</span>
              </Link>
            </div>
            <div className='Sidebar__link'>
              <Link to="">
                <AiOutlineTransaction />
                <span>Investment</span>
              </Link>
            </div>
            <div className='Sidebar__link'>
              <Link to="">
                <AiOutlineTransaction />
                <span>Our Plans</span>
              </Link>
            </div>
            <div className='Sidebar__link'>
              <Link to="">
                <RiUserSettingsLine />
                <span>My Profile</span>
              </Link>
            </div> */}
          </div>
        </section>
        <section className='Sidebar__add'>
          <h5>ADDITIONAL</h5>
          <div className='Sidebar__link'>
            <Link to="/">Go to Main Website</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Sidebar