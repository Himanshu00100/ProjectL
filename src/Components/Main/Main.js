import React from 'react'
import "./main.css"
import hero1 from "../Assets/hero1/h1.mp4"
import sport1 from "../Assets/sports/sport-1-banner-1.jpg"
import sport2 from "../Assets/sports/sport-1-banner-2.jpg"
import sport3 from "../Assets/sports/sport-1-banner-3.jpg"

// category image from here

import football from "../Assets/category/footbal.png"
import basketball from "../Assets/category/basketball.png"
import volleyball from "../Assets/category/volleyball.png"
import rugby from "../Assets/category/rugby.png"
import swimming from "../Assets/category/swimming.png"
import icesketing from "../Assets/category/icesketing.png"
import golf from "../Assets/category/golf.png"
import skate from "../Assets/category/skate.png"
import snowboard from "../Assets/category/snowboard.png"
import hiking from "../Assets/category/hiking.png"



const Main = () => {

  return (
    <>

      <main className=' flex-col w-screen  z-[-10] '>
        {/* hero one section starts from here */}

        <div className='w-full h-[330.600px] md:h-[403.600px] lg:h-[800px]  flex  bg-green-500   justify-center items-center overflow-hidden relative'>
          <video src={hero1} className='video h-full scale-300 phone:scale-150 md:scale-150 lg:scale-150' loop autoPlay muted>
          </video>
          {/* text inside hero section starts from here */}
          <div className='absolute left-[10px] md:left-[50px] top-[50px] lg:left-[50px] 2k:left-[250px] flex flex-col justify-center   items-start gap-y-[18.5px] lg:gap-y-8'>
            <h1 className=' text-white font-oswald text-[50px] leading-[50px] md:text-[60px] md:leading-[60px] lg:text-[130px]  lg:leading-[130px] font-[600] text-start '>READY<br />STEADY <br />GO!</h1>
            <h2 className='text-[16px] lg:text-[20px] text-white '>Get eady for the running eason</h2>
            <a href="" className='text-black bg-white text-[14px] md:text-[18px]  px-[30px] py-[5px] lg:px-[40px] lg:py-[10px] mt-[10px] lg:mt-0 lg:font-semibold hover:bg-transparent hover:text-white border-[1px] border-white duration-200 ease-out ' >Shop now</a>
          </div>
          {/* text inside hero section ends here */}

        </div>

        {/* hero one section ends here */}



        {/* sport section starts from here */}


        <div className='w-screen h-auto md:-[191.988px] xl:h-[319.987px] 2xl:h-[383.987px] bg-black flex flex-col md:flex-row'>
          <div className='w-full md:w-[33.33%] h-[225px] phone:h-[322.8px] sm:h-[480px] md:h-[191.988px] lg:h-[255.988px] xl:h-[319.987px] 2xl:h-full flex justify-center items-center bg-black overflow-hidden relative sp'>
            <img src={sport1} alt='' className='w-full   duration-300 ease-out' />
            <div className='absolute bottom-[30px] xl:bottom-[50px] 2xl:bottom-[65px] flex flex-col justify-center items-center xl:gap-y-[20px] gap-y-[26px] sm:gap-y-[16px] '>
              <h1 className=' text-[30px] md:text-[24px] lg:text-[30px] xl-[36px] 2xl:text-[50px] text-white leading-[30px] xl:leading-[50px] font-[oswald] font-[600]'>ALL FOR TENNIS</h1>
              <a href='' className='px-[20px] xl:px-[30px] py-[3px] xl:py-[5px]  bg-white border-[1px] border-white hover:bg-transparent hover:text-white duration-200 ease-out'>Shop now</a>
            </div>
          </div>
          <div className='w-full md:w-[33.33%] h-[225px] phone:h-[322.8px] sm:h-[480px] md:h-[191.988px] lg:h-[255.988px] xl:h-[319.987px] 2xl:h-full flex justify-center items-center bg-black overflow-hidden relative sp'>
            <img src={sport2} alt='' className='w-full  duration-300 ease-out' />
            <div className='absolute bottom-[30px] xl:bottom-[50px] 2xl:bottom-[65px] flex flex-col justify-center items-center gap-y-[20px] 2xl:gap-y-[26px]  sm:gap-y-[16px] xl:gap-y-[20px]'>
              <h1 className='text-white text-[30px] md:text-[24px] lg:text-[30px] xl-[36px] 2xl:text-[50px] xl:leading-[50px] font-[oswald] font-[600]  text-center'>GYM <br /> ACCESSORIES</h1>
              <a href='' className=' px-[20px] xl:px-[30px] py-[3px] xl:py-[5px]  bg-white border-[1px] border-white hover:bg-transparent hover:text-white duration-200 ease-out'>Shop now</a>
            </div>
          </div>
          <div className='w-full md:w-[33.33%] h-[225px] phone:h-[322.8px] sm:h-[480px] md:h-[191.988px] lg:h-[255.988px] xl:h-[319.987px] 2xl:h-full  flex justify-center items-center bg-black overflow-hidden relative sp'>
            <img src={sport3} alt='' className='w-full  duration-300 ease-out' />
            <div className='absolute bottom-[30px] xl:bottom-[50px] 2xl:bottom-[65px] flex flex-col justify-center items-center gap-y-[26px]  sm:gap-y-[16px] xl:gap-y-[20px]'>
              <h1 className='text-white text-[30px] md:text-[24px] lg:text-[30px] xl-[36px] 2xl:text-[50px] xl:leading-[50px] font-[oswald] font-[600]'>BE SAFE ON BIKE</h1>
              <a href='' className=' px-[20px] xl:px-[30px] py-[3px] xl:py-[5px]   bg-white border-[1px] border-white hover:bg-transparent hover:text-white duration-200 ease-out'>Shop now</a>
            </div>
          </div>
        </div>
        {/* sports section ends here */}

        {/* shop by category section starts from here */}

        <div className='w-screen 2xl:h-[151.600px]  2xl:px-[50px] 2k:px-[250px] mt-[80px] mb-[70px]   '>
          <h2 className='text-[20px] sm:text-[30px] font-oswald font-[600] mb-[23px] '>SHOP BY CATEGORIES</h2>
          <div className='top w-full   2xl:h-[91.600px] border-gray-200 cursor-default flex flex-col lg:flex-row justify-between items-center gap-y-[20px] lg:gap-x-[35px] xl:justify-between xl:gap-x-[60px] 2xl:gap-x-[100px] '>
            <div className='flex  w-full justify-around lg:justify-between'>
              <div className='football flex flex-col  items-center cursor-pointer hover:text-red-500 duration-200'>
                <img src={football} alt='' className='w-[40px] h-[40px]' />
                <h3 className='mt-[16px] font-semibold hover:text-red-500 duration-200'>Football</h3>
              </div>
              <div className='football flex flex-col  items-center cursor-pointer hover:text-red-500 duration-200'>
                <img src={basketball} alt='' className='w-[40px] h-[40px]' />
                <h3 className='mt-[16px] font-semibold hover:text-red-500 duration-200'>Baskeball</h3>
              </div>
              <div className='football flex flex-col  items-center cursor-pointer hover:text-red-500 duration-200'>
                <img src={volleyball} alt='' className='w-[40px] h-[40px]' />
                <h3 className='mt-[16px] font-semibold hover:text-red-500 duration-200'>Volleyball</h3>
              </div>
            </div>
            <div className='flex w-full justify-around lg:justify-between'>
              <div className='football flex flex-col  items-center cursor-pointer hover:text-red-500 duration-200'>
                <img src={rugby} alt='' className='w-[40px] h-[40px]' />
                <h3 className='mt-[16px] font-semibold hover:text-red-500 duration-200'>Football</h3>
              </div>
              <div className='football flex flex-col  items-center cursor-pointer hover:text-red-500 duration-200'>
                <img src={swimming} alt='' className='w-[40px] h-[40px]' />
                <h3 className='mt-[16px] font-semibold hover:text-red-500 duration-200'>Swimming</h3>
              </div>
              <div className='football flex flex-col  items-center cursor-pointer hover:text-red-500 duration-200'>
                <img src={icesketing} alt='' className='w-[40px] h-[40px]' />
                <h3 className='mt-[16px] font-semibold hover:text-red-500 duration-200'>Ice-skating</h3>
              </div>
            </div>
            <div className='flex w-full justify-around lg:justify-between'>
              <div className='football flex flex-col  items-center cursor-pointer hover:text-red-500 duration-200'>
                <img src={golf} alt='' className='w-[40px] h-[40px]' />
                <h3 className='mt-[16px] font-semibold hover:text-red-500 duration-200'>Golf</h3>
              </div>
              <div className='football flex flex-col  items-center cursor-pointer hover:text-red-500 duration-200'>
                <img src={skate} alt='' className='w-[40px] h-[40px]' />
                <h3 className='mt-[16px] font-semibold hover:text-red-500 duration-200'>Skateboard</h3>
              </div>
              <div className='football flex flex-col  items-center cursor-pointer hover:text-red-500 duration-200'>
                <img src={snowboard} alt='' className='w-[40px] h-[40px]' />
                <h3 className='mt-[16px] font-semibold hover:text-red-500 duration-200'>Snowboard</h3>
              </div>
            </div>
            <div className='football flex flex-col  items-center cursor-pointer hover:text-red-500 duration-200'>
              <img src={hiking} alt='' className='w-[40px] h-[40px]' />
              <h3 className='mt-[16px] font-semibold hover:text-red-500 duration-200'>Hiking</h3>
            </div>
          </div>

        </div>

        {/* shop by category section ends here */}

        {/* a divider */}
        <div className=' w-screen py-[10px] mb-[50px] hidden '>
          <div className='w-full h-[0.800px] bg-gray-200'></div>
        </div>


      </main></>
  )
}

export default Main
