import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Auth.css'

const SignIn = () => {
  return (
    <div className='Auth'>
      <div className='Auth__Logo'>BANIWAZ</div>
      <div className='Auth__Wrapper'>
        <h3>Login into Account</h3>
        <p>Sign in into your account using email and passcode</p>
        <form action="" className='Auth__form'>
          <div>
            <label htmlFor="email">Email</label>
            <div className='Auth__Input'>
              <input type="email"
                placeholder='Enter your email address'
                id="email"
                name='email'
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <div className='Auth__Input'>
              <input
                type="password"
                placeholder='Enter your passcode'
                required
              />
            </div>
          </div>
          <div className='Auth__checkbox-wrapper'>
            <div className='Auth__checkbox'>
              <input type="checkbox" />
              <p>&nbsp; Remember Me</p>
            </div>
            <div>
              <Link to="">Forgot Code?</Link>
            </div>
          </div>
          <button className='Auth__btn'>Login</button>
          <div className='Auth__create'>
            <p>
              New on our platform?
              <Link to="">&nbsp; Create an account</Link>
            </p>
          </div>
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
    </div>
  )
}

export default SignIn