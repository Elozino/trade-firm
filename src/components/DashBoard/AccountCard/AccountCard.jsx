import React from 'react'
import Button from '../../Button/Button'

const AccountCard = ({title, BtnTitle}) => {
  return (
    <div className='AccountCard'>
      <div>
        <img src="" alt="icon" />
      </div>
      <div>
        <p>{title}</p>
        <Button title={BtnTitle}/>
      </div>
    </div>
  )
}

export default AccountCard