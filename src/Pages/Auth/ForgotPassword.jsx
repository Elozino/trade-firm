import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';
import './Auth.css'

function ForgotPassword() {
  const [email, setEmail] = useState("")

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  return (
    <div className='Auth'>
      <div className='Auth__Logo'>BANIWAZ</div>
      <div 
      className='Auth__Wrapper'
      style={{width: "500px"}}
      >
        <h3>Forgot Password</h3>
        <p>Enter your email address</p>
        <form onSubmit={""} className='Auth__form'>
          <div>
            <label htmlFor="email">Email</label>
            <div className='Auth__Input'>
              <input type="email"
                placeholder='Enter your email address'
                id="email"
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            onClick={""}
            className='Auth__btn'>
            Submit
          </button>
        </form>
      </div>
      <footer className='Auth__footer'>
        <hr />
        <div className='Auth__footer-wrapper'>
          <div className='Auth__footer-link'>
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
          <div className='Auth__footer-rights'>
            <p>Secure Trade Firm © 2022. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div >
  )
}

export default ForgotPassword