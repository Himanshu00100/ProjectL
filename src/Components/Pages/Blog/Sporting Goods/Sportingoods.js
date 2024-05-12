import React from 'react'
import "./sportinggoods.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faAngleRight, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons'

// section 1

import left from "../../../Assets/blog/about2.jpg"

const Sportinggoods = () => {
  return (
    <>
      <main className='w-screen h-auto'>
        {/* Home > Blog > Sport section from here */}
        <div className='w-full px-[50px] py-[15px] 2k:px-[250px]'>
          <div className='w-full h-[24px] bg-white flex justify-start items-center gap-x-[9px] text-[13px] font-[500] '>
            <Link to={"/"} className='hover:text-red-500 duration-200 leading-[24px]' >Home</Link>
            <span className='text-[13px]  pt-[4px]'><FontAwesomeIcon icon={faAngleRight} /></span>
            <Link to={"/blog"} className='hover:text-red-500 duration-200 leading-[24px]' >Blog</Link>
            <span className='text-[13px]  pt-[4px]'><FontAwesomeIcon icon={faAngleRight} /></span>
            <p className='font-[400]'>Sporting Goods</p>
          </div>
        </div>
        {/* Home > Blog section ends here */}

        {/* gallery heading */}
        <div className='w-full h-[40px] px-[50px] 2k:px-[250px] mb-[50px]'>
          <h1 className='text-[40px] leading-[40px] font-oswald font-[600] text-start'> CATEGORY: SPORTING GOODS</h1>
        </div>

        {/* section starts from here */}
        <div className='w-full h-auto px-[50px] 2k:px-[250px]'>
          <div className='w-[660.388px] h-[487.987px] bg-white'>
            {/* right image */}
            <div className='w-full h-[380.978px] overflow-hidden'>
              <img src={left} alt='' className='hover:scale-[1.15] duration-300 ease-out' />
            </div>
            {/* right content */}
            <div className='w-full h-[92px] bg-white pl-[15px] sm:pl-[0px] pt-[15px]  flex flex-col gap-y-[5px]'>
              <div className='w-full h-[58px] bg-white flex flex-col gap-x-[10px] gap-y-[10px] '>
                {/* date and user  from here */}
                <div className='w-full h-[20px] bg-white flex items-center gap-x-[20px] text-gray-500 '>
                  {/* date */}
                  <span className='flex items-center gap-x-[10px]'>
                    <FontAwesomeIcon icon={faCalendarDays} className='text-[13px]' />
                    <p className='text-[13px] font-[400]'>March 20,2024</p>
                  </span>

                  {/* user */}
                  <span className='flex items-center gap-x-[10px]'>
                    <FontAwesomeIcon icon={faUser} className='text-[13px]' />
                    <a href='#' className='text-[13px] hover:text-red-500 duration-200 font-[400]'>Park John</a>
                  </span>

                </div>
                <h4 className='text-[15px] sm:text-[20px] leading-[28px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>THE HEALTH BENEFITS OF ICE-SKATING</h4>
              </div>
              {/* readmore  */}
              <div className='w-full h-[24px] flex justify-start bg-white '>
                <a href='#' className=' text-start underline underline-offset-1 hover:text-red-500 duration-200 hover:underline hover:underline-offset-2'>Read more</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Sportinggoods