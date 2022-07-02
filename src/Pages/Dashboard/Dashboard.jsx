import React, { useEffect, useState } from 'react'
import AccountCard from '../../components/DashBoard/AccountCard/AccountCard'
import "./Dashboard.css"
import { TiWarning } from "react-icons/ti"
import { IoIosAlert } from 'react-icons/io'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import FundsCard from '../../components/DashBoard/FundsCard/FundsCard'
import { collection, getDocs } from 'firebase/firestore'
import { auth, db } from '../../firebase/firebaseConfig'

const Dashboard = () => {
  const [userName, setuserName] = useState("")
  const currentUserId = auth.currentUser.uid
  // console.log(currentUserId);


  useEffect(() => {
    const getUser = async () => {
      const userInfo = await getDocs(collection(db, "users"))
      console.log(userInfo);
      const user = userInfo.docs.map((doc) => (doc._document.data.value.mapValue.fields.fullname.stringValue))
      console.log(user);
      setuserName(user)
    }
    getUser()
  }, [])

  return (
    <div className='Dashboard'>
      <header>
        <div>
          <h5>Welcome!</h5>
          <h2>{userName}</h2>
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
      <section className='Dashboard__fundscard'>
        <FundsCard
          title="Available Balance"
          duration="INVESTMENT ACCOUNT"
          bg="#037DFF"
        />
        <FundsCard
          title="Total Deposit"
          duration="THIS MONTH"
          bg="#364A63"
        />
        <FundsCard
          title="Total Withdrawal"
          duration="THIS MONTH"
          bg="#F4BD0E"
        />
      </section>
    </div>
  )
}

export default Dashboard