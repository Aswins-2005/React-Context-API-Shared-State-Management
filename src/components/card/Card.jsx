import React, { useContext } from 'react'
import Button from "../button/Button";
import Context from '../Context';

const Card = ({name,email,btname,count,setcount}) => {
    const data = useContext(Context)
  return (
    <div className='card'>
      <div className='data'>
      <h2 className='name'>{name}</h2>
      <p className='email'>{email}</p>
      <p></p>
      </div>
      
      <div className='card-btn'>
        <Button name={btname} />
      </div>
      
    </div>

  
      
    
  )
}
export default Card