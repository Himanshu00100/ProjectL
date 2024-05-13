import React from 'react'
import "./men.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Men = () => {
  return (
    <>
      <main className='w-screen h-auto'>
        {/* home > Men section from here */}
        <div className='w-full px-[50px] py-[15px] 2k:px-[250px]'>
          <div className='w-full h-[24px] bg-white flex justify-start items-center gap-x-[9px] text-[13px] font-[500] '>
            <Link to={"/"} className='hover:text-red-500 duration-200 leading-[24px]' >Home</Link>
            <span className='text-[13px]  pt-[4px]'><FontAwesomeIcon icon={faAngleRight} /></span>
            <p className='font-[400]'>Men</p>
          </div>
        </div>
        {/* home > Men section ends here */}
      </main>
    </>
  )
}

export default Men
