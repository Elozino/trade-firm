import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='Auth'>
      <div className='Logo'>BANIWAZ</div>
      <div className='Auth__Wrapper'>
        <h3>Create an Account</h3>
        <p>Sign up with your email and get started with your free account.</p>
        <form action="" className='Auth__form'>
          <div>
            <label htmlFor="fullname">Full Name</label>
            <div className='Auth__Input'>
              <input
                type="text"
                placeholder='Enter your Full Name'
                id="fullname"
                name='fullname'
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <div className='Auth__Input'>
              <input
                type="email"
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
              <p>&nbsp; I have agree to the {" "} <Link to="">Terms & Condition</Link> </p>
            </div>
          </div>
          <button className='Auth__btn'>Sign Up</button>
          <div className='Auth__create'>
            <p>
              Already have an account?
              <Link to=""> Sign in instead</Link>
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

export default SignUp