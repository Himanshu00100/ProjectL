import React, { useState } from 'react'
import "./home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//  hero 1 video here

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

// leatest product images from here on 

import product1 from "../Assets/leatest products/p1.jpg"
import product2 from "../Assets/leatest products/p2.jpg"
import product3 from "../Assets/leatest products/p3.jpg"
import product4 from "../Assets/leatest products/p4.jpg"
import product5 from "../Assets/leatest products/p5.jpg"
import { faCalendarDays, faChartBar, faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faChevronLeft, faChevronRight, faMagnifyingGlass, faPersonSkating, faPersonSkiing, faPersonSnowboarding } from '@fortawesome/free-solid-svg-icons'

// best seller images from here

import bestproduct1 from "../Assets/best seller/p1.jpg"
import bestproduct2 from "../Assets/best seller/p2.jpg"
import bestproduct3 from "../Assets/best seller/p3.jpg"
import bestproduct4 from "../Assets/best seller/p4.jpg"
import bestproduct5 from "../Assets/best seller/p5.jpg"

// on sale products from here

import saleproduct1 from "../Assets/onsale products/p1.jpg"
import saleproduct2 from "../Assets/onsale products/p2.jpg"
import saleproduct3 from "../Assets/onsale products/p3.jpg"
import saleproduct4 from "../Assets/onsale products/p4.jpg"
import saleproduct5 from "../Assets/onsale products/p5.jpg"

// hero 2 image
import hero2 from "../Assets/hero 2/hero2.jpg"

// hero 3 image from here

import hero3 from "../Assets/hero 3/hero3.jpg"

// hero 4 image 
import hero4 from "../Assets/hero 4/hero4.jpg"

// instagram section images from here

import img1 from "../Assets/instagram/one.jpg"
import img2 from "../Assets/instagram/two.jpg"
import img3 from "../Assets/instagram/three.jpg"
import img4 from "../Assets/instagram/four.jpg"
import img5 from "../Assets/instagram/five.jpg"
import img6 from "../Assets/instagram/six.jpg"
import img7 from "../Assets/instagram/seven.jpg"
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


//  blog section images from here

import blog1 from "../Assets/blog/blog 1.jpg"
import blog2 from "../Assets/blog/blog 2.jpg"
import blog3 from "../Assets/blog/blog3.jpg"



const Home = () => {

  //  active tabs and its sections from here

  // tabs
  const [tab1, settab1] = useState("activetab")
  const [tab2, settab2] = useState("")
  const [tab3, settab3] = useState("")

  // product sections

  const [newarrival, setnewarrival] = useState("activesection")
  const [bestseller, setbestseller] = useState("inactivesection")
  const [onsale, setonsale] = useState("inactivesection")

  // tab 
  const tab1active = () => {
    settab1("activetab")
    settab2("")
    settab3("")
    setnewarrival("activesection")
    setbestseller("inactivesection")
    setonsale("inactivesection")

  }
  // tab 2
  const tab2active = () => {
    settab1("")
    settab2("activetab")
    settab3("")
    setnewarrival("inactivesection")
    setbestseller("activesection")
    setonsale("inactivesection")

  }
  //  tab 3
  const tab3active = () => {
    settab1("")
    settab2("")
    settab3("activetab")
    setnewarrival("inactivesection")
    setbestseller("inactivesection")
    setonsale("activesection")

  }


  return (
    <>

      <main className=' flex-col w-screen  z-[-10] '>
        {/* hero one section starts from here */}

        <div className='w-full h-[330.600px] md:h-[403.600px] lg:h-[800px]  flex  bg-white   justify-center items-center overflow-hidden relative'>
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

        <div className='w-screen 2xl:h-[151.600px]  2xl:px-[50px] 2k:px-[250px] mt-[80px] mb-[30px] 2xl:mb-[70px]   '>
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
        <div className=' w-screen py-[10px] mb-[30px] 2xl:mb-[50px]  '>
          <div className='w-full h-[0.800px] bg-gray-200'></div>
        </div>

        {/* New arrival section starts from here  */}
        <div className='w-full 2xl:h-[534.250px] bg-white 2xl:mt-[100px] px-[10px] mb-[20px] 2xl:mb-[0px]  2xl:px-[50px] 2k:px-[250px]'>
          <div className='w-full h-full bg-white-500 flex flex-col gap-y-[20px]'>
            <div className='w-full 2xl:w-[658.787px] 2xl:h-[44px] bg-white text-[28px] phone:text-[22px] 2xl:text-[40px]  leading-[44px] font-oswald font-[600] '>
              {/* product section tabs */}
              <ul className='flex phone:justify-center lg:justify-start gap-x-[35px] text-[#808080] flex-col phone:flex-row phone:gap-x-[20px] 2xl:flex-row'>
                <li className={'cursor-pointer transition-all duration-500 phone:text-nowrap ' + tab1} onClick={tab1active}  >NEW ARRIVALS</li>
                <li className={'cursor-pointer transition-all duration-500 phone:text-nowrap ' + tab2} onClick={tab2active}>BEST SELLERS</li>
                <li className={'cursor-pointer transition-all duration-500 phone:text-nowrap ' + tab3} onClick={tab3active} >ON SALE</li>
              </ul>
              {/* tabs end here */}
            </div>
            {/* product section starts from here */}

            {/* new arrival products section from here */}

            <div className={' flex flex-col gap-y-[15px] 2xl:gap-y-[0px] phone:flex-row 2xl:flex-row  items-center z-0   w-full h-auto 2xl:h-[411.250px] phone:overflow-y-hidden  phone:overflow-x-scroll 2xl:overflow-x-hidden bg-white phone:gap-x-[15px]   2xl:gap-x-[20px] relative productsection transition-all duration-500  ' + newarrival}>

              {/* left arrow */}

              <span className='sticky 2xl:absolute hidden phone:flex left-0 2xl:flex justify-center items-center bg-white arrow z-10 shadow-md cursor-pointer  inviaible shadow-red-500 opacity-0 duration-500 ease-out'>
                <FontAwesomeIcon icon={faChevronLeft} className='bg-white px-[10px] py-[10px] hover:bg-black hover:text-white  duration-300' />
              </span>

              {/* product 1  */}
              <div className='w-[80%] 2xl:w-[20%] h-full bg-white product flex flex-col items-center 2xl:block'>
                {/* product image 1*/}
                <div className='w-[268px] 2xl:w-full h-[357.25px] bg-white cursor-pointer relative  overflow-hidden flex justify-center '>

                  {/* stats from here */}
                  <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                    <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                  </div>

                  {/* add to cart from here */}
                  <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out'>
                    <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                  </div>

                  <img src={product1} alt='Product 1' className='2xl:w-full' />
                </div>
                {/* product price */}
                <div className='w-[268px] 2xl:w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                  <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Swim shorts in black</a>
                  <p>$40.00</p>
                </div>
              </div>
              {/* product 2  */}
              <div className='w-[80%] 2xl:w-[20%] h-full bg-white product flex flex-col items-center 2xl:block'>
                {/* product image 2 */}
                <div className='w-[268px] h-[357.25px] bg-green-500 relative cursor-pointer  overflow-hidden flex justify-center'>
                  <span className=' absolute top-[10px] left-[10px] px-[10px] text-[12px] font-[400] text-white bg-red-500'>-28%</span>
                  <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                    <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                  </div>

                  {/* quick add from here */}

                  <div className='w-[250px] px-[20px] py-[15px] bg-white shadow-md absolute bottom-[-100%] quickbar cursor-default transition-[bottom] duration-500 ease-out'>
                    <div className='w-full h-[53.6px] bg-white flex flex-col justify-center gap-y-[10px]'>
                      <p className='text-[14px]'>Quick add to cart</p>
                      <div className='w-full  bg-white flex justify-between text-[14px]  '>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[8px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>XS</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2xp] hover:bg-black hover:text-white duration-300 cursor-pointer'>S</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>M</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>L</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>XL</span>
                      </div>
                    </div>
                  </div>
                  <img src={product2} alt='Product 2' className='w-full' />
                </div>
                {/* product price */}
                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                  <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>High stretch sports shorts</a>
                  <p>$79.00 &#160; - &#160; $110.00</p>
                </div>
              </div>
              {/* product 3  */}
              <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product flex flex-col items-center 2xl:block'>
                {/* product image 3*/}
                <div className='w-[268px] h-[357.25px] bg-green-500 relative cursor-pointer  overflow-hidden flex justify-center'>
                  <span className=' absolute top-[10px] left-[10px] px-[10px] text-[12px] font-[400] text-white bg-red-500'>-16%</span>
                  <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                    <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                  </div>

                  {/* quick add from here */}

                  <div className='w-[250px] px-[20px] py-[15px] bg-white shadow-md absolute bottom-[-100%] quickbar cursor-default transition-[bottom] duration-500 ease-out'>
                    <div className='w-full h-[53.6px] bg-white flex flex-col justify-center gap-y-[10px]'>
                      <p className='text-[14px]'>Quick add to cart</p>
                      <div className='w-full  bg-white flex justify-between text-[14px]  '>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[8px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>XS</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2xp] hover:bg-black hover:text-white duration-300 cursor-pointer'>S</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>M</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>L</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>XL</span>
                      </div>
                    </div>
                  </div>

                  <img src={product3} alt='Product 3' className='w-full' />
                </div>
                {/* product price */}
                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                  <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Letter sports tank top</a>
                  <p className='text-red-500'>$40.00 &#160;  <span className='text-[#808080] line-through'> $70.00</span></p>
                </div>
              </div>
              {/* product 4  */}
              <div className='w-[80%] 2xl:w-[20%] h-full bg-white product flex flex-col items-center 2xl:block'>
                {/* product image 4*/}
                <div className='w-[268px] h-[357.25px] bg-green-500 cursor-pointer relative  overflow-hidden flex justify-center'>
                  <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                    <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                  </div>

                  {/* add to cart from here */}
                  <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out'>
                    <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                  </div>

                  <img src={product4} alt='Product 4' className='w-full' />
                </div>
                {/* product price */}
                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                  <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Colorsports tank top</a>
                  <p>$90.00</p>
                </div>
              </div>
              {/* product 5  */}
              <div className='w-80%] 2xl:w-[20%] h-full bg-white product flex flex-col items-center 2xl:block'>
                {/* product image 5*/}
                <div className='w-[268px] h-[357.25px] bg-green-500 cursor-pointer relative  overflow-hidden flex justify-center'>
                  <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                    <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                  </div>

                  {/* add to cart from here */}
                  <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 hover:shadow-red-500 duration-[400ms] addtocart ease-out shadow-md '>
                    <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                  </div>

                  <img src={product5} alt='Product 5' className='w-full' />
                </div>
                {/* product price */}
                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                  <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Minimalist training bag</a>
                  <p>$80.00</p>
                </div>
              </div>

              {/* right arrow */}

              <span className='sticky 2xl:absolute hidden phone:flex right-0 2xl:flex justify-center items-center bg-white arrow z-10 shadow-md cursor-pointer shadow-red-500 hover:shadow-red-500 inviaible opacity-0 transition-all duration-500 ease-out'>
                <FontAwesomeIcon icon={faChevronRight} className='bg-white px-[10px] py-[10px] hover:bg-black hover:text-white  duration-300' />
              </span>
            </div>
            {/* new arrival products section ends here */}

            {/* best seller's product section starts from here */}

            <div className={'flex flex-col gap-y-[15px] 2xl:gap-y-[0px] 2xl:flex-row  items-center z-0   w-full h-auto 2xl:h-[411.250px] bg-white   2xl:gap-x-[20px] relative productsection transition-all duration-500 ' + bestseller}>

              {/* left arrow */}

              <span className='absolute hidden left-0 2xl:flex justify-center items-center bg-white arrow z-10 shadow-md cursor-pointer  inviaible shadow-red-500 opacity-0 duration-500 ease-out'>
                <FontAwesomeIcon icon={faChevronLeft} className='bg-white px-[10px] py-[10px] hover:bg-black hover:text-white  duration-300' />
              </span>

              {/* product 1  */}
              <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                {/* product image 1*/}
                <div className='w-full h-[357.25px] bg-green-500 cursor-pointer relative  overflow-hidden flex justify-center '>

                  {/* stats from here */}
                  <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                    <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                  </div>

                  {/* add to cart from here */}
                  <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out'>
                    <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                  </div>

                  <img src={bestproduct1} alt='Product 1' className='w-full' />
                </div>
                {/* product price */}
                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                  <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Asso crop tank top</a>
                  <p>$60.00</p>
                </div>
              </div>
              {/* product 2  */}
              <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                {/* product image 2 */}
                <div className='w-full h-[357.25px] bg-green-500 relative cursor-pointer  overflow-hidden flex justify-center'>

                  <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                    <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                  </div>

                  {/* add to cart from here */}
                  <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out'>
                    <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                  </div>

                  <img src={bestproduct2} alt='Product 2' className='w-full' />
                </div>
                {/* product price */}
                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                  <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Athletic tank top</a>
                  <p>$79.00 &#160; - &#160; $88.00</p>
                </div>
              </div>
              {/* product 3  */}
              <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                {/* product image 3*/}
                <div className='w-full h-[357.25px] bg-green-500 relative cursor-pointer  overflow-hidden flex justify-center'>

                  <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                    <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                  </div>

                  {/* quick add from here */}

                  <div className='w-[250px] px-[20px] py-[15px] bg-white shadow-md absolute bottom-[-100%] quickbar cursor-default transition-[bottom] duration-500 ease-out'>
                    <div className='w-full h-[53.6px] bg-white flex flex-col justify-center gap-y-[10px]'>
                      <p className='text-[14px]'>Quick add to cart</p>
                      <div className='w-full  bg-white flex justify-between text-[14px] px-[20px] '>

                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2xp] hover:bg-black hover:text-white duration-300 cursor-pointer'>M</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>L</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>XL</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>XXL</span>
                      </div>
                    </div>
                  </div>

                  <img src={bestproduct3} alt='Product 3' className='w-full' />
                </div>
                {/* product price */}
                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                  <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Knit sport  wristbands</a>
                  <p className=''>$60.00</p>
                </div>
              </div>
              {/* product 4  */}
              <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                {/* product image 4*/}
                <div className='w-full h-[357.25px] bg-green-500 cursor-pointer relative  overflow-hidden flex justify-center'>
                  <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                    <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                  </div>

                  {/* add to cart from here */}
                  <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out'>
                    <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                  </div>

                  <img src={bestproduct4} alt='Product 4' className='w-full' />
                </div>
                {/* product price */}
                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                  <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Contrast binding  layered  dress</a>
                  <p>$70.00</p>
                </div>
              </div>
              {/* product 5  */}
              <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                {/* product image 5*/}
                <div className='w-full h-[357.25px] bg-green-500 cursor-pointer relative  overflow-hidden flex justify-center'>
                  <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                    <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                  </div>

                  {/* quick add from here */}

                  <div className='w-[250px] px-[20px] py-[15px] bg-white shadow-md absolute bottom-[-100%] quickbar cursor-default transition-[bottom] duration-500 ease-out'>
                    <div className='w-full h-[53.6px] bg-white flex flex-col justify-center gap-y-[10px]'>
                      <p className='text-[14px]'>Quick add to cart</p>
                      <div className='w-full  bg-white flex justify-between text-[14px]  '>

                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2xp] hover:bg-black hover:text-white duration-300 cursor-pointer'>Green</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>Brown</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>Gray</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>Pink</span>
                      </div>
                    </div>
                  </div>
                  <span className=' absolute top-[10px] left-[10px] px-[10px] text-[12px] font-[400] text-white bg-red-500'>-22%</span>

                  <img src={bestproduct5} alt='Product 5' className='w-full' />
                </div>
                {/* product price */}
                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                  <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Colorful sport tank top</a>
                  <p>$109.00.00</p>
                </div>
              </div>


              {/* right arrow */}

              <span className='absolute hidden right-0 2xl:flex justify-center items-center bg-white arrow z-10 shadow-md cursor-pointer shadow-red-500 hover:shadow-red-500 inviaible opacity-0 transition-all duration-500 ease-out'>
                <FontAwesomeIcon icon={faChevronRight} className='bg-white px-[10px] py-[10px] hover:bg-black hover:text-white  duration-300' />
              </span>



            </div>

            {/* best seller's product section ends here */}

            {/* on sale product section starts from here */}

            <div className={' flex flex-col gap-y-[15px] 2xl:gap-y-[0px] 2xl:flex-row  items-center z-0   w-full h-auto 2xl:h-[411.250px] bg-white   2xl:gap-x-[20px] relative productsection transition-all duration-500 ' + onsale}>

              {/* left arrow */}

              <span className='absolute left-0 flex justify-center items-center bg-white arrow z-10 shadow-md cursor-pointer  inviaible shadow-red-500 opacity-0 duration-500 ease-out'>
                <FontAwesomeIcon icon={faChevronLeft} className='bg-white px-[10px] py-[10px] hover:bg-black hover:text-white  duration-300' />
              </span>

              {/* product 1  */}
              <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                {/* product image 1*/}
                <div className='w-full h-[357.25px] bg-green-500 cursor-pointer relative  overflow-hidden flex justify-center '>

                  {/* stats from here */}
                  <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                    <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                  </div>

                  {/* quick add from here */}

                  <div className='w-[250px] px-[20px] py-[15px] bg-white shadow-md absolute bottom-[-100%] quickbar cursor-default transition-[bottom] duration-500 ease-out'>
                    <div className='w-full h-[53.6px] bg-white flex flex-col justify-center gap-y-[10px]'>
                      <p className='text-[14px]'>Quick add to cart</p>
                      <div className='w-full  bg-white flex justify-between text-[14px]  '>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[8px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>XS</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2xp] hover:bg-black hover:text-white duration-300 cursor-pointer'>S</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>M</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>L</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>XL</span>
                      </div>
                    </div>
                  </div>
                  <span className=' absolute top-[10px] left-[10px] px-[10px] text-[12px] font-[400] text-white bg-red-500'>-28%</span>

                  <img src={saleproduct1} alt='Product 1' className='w-full' />
                </div>
                {/* product price */}
                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                  <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>High stretch sports shorts</a>
                  <p>$70.00 &#160;-&#160; $110.00</p>
                </div>
              </div>
              {/* product 2  */}
              <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                {/* product image 2 */}
                <div className='w-full h-[357.25px] bg-green-500 relative cursor-pointer  overflow-hidden flex justify-center'>

                  <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                    <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                  </div>

                  {/* quick add from here */}

                  <div className='w-[250px] px-[20px] py-[15px] bg-white shadow-md absolute bottom-[-100%] quickbar cursor-default transition-[bottom] duration-500 ease-out'>
                    <div className='w-full h-[53.6px] bg-white flex flex-col justify-center gap-y-[10px]'>
                      <p className='text-[14px]'>Quick add to cart</p>
                      <div className='w-full  bg-white flex justify-between text-[14px] px-[20px] '>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>M</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>L</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>XL</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>XXL</span>
                      </div>
                    </div>
                  </div>
                  <span className=' absolute top-[10px] left-[10px] px-[10px] text-[12px] font-[400] text-white bg-red-500'>-16%</span>

                  <img src={saleproduct2} alt='Product 2' className='w-full' />
                </div>
                {/* product price */}
                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                  <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Athletic tank top</a>
                  <p className='text-red-500'>$59.00 &#160;  <span className='text-[#808080] line-through'> $70.00</span></p>
                </div>
              </div>
              {/* product 3  */}
              <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                {/* product image 3*/}
                <div className='w-full h-[357.25px] bg-green-500 relative cursor-pointer  overflow-hidden flex justify-center'>

                  <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                    <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                  </div>

                  {/* quick add from here */}

                  <div className='w-[250px] px-[20px] py-[15px] bg-white shadow-md absolute bottom-[-100%] quickbar cursor-default transition-[bottom] duration-500 ease-out'>
                    <div className='w-full h-[53.6px] bg-white flex flex-col justify-center gap-y-[10px]'>
                      <p className='text-[14px]'>Quick add to cart</p>
                      <div className='w-full  bg-white flex justify-between text-[14px]  '>

                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2xp] hover:bg-black hover:text-white duration-300 cursor-pointer'>Gray</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>Green</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>Pink</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>Brown</span>
                      </div>
                    </div>
                  </div>
                  <span className=' absolute top-[10px] left-[10px] px-[10px] text-[12px] font-[400] text-white bg-red-500'>-14%</span>

                  <img src={saleproduct3} alt='Product 3' className='w-full' />
                </div>
                {/* product price */}
                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                  <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Knit sport  wristbands</a>
                  <p className='text-red-500'>$69.00 &#160;  <span className='text-[#808080] line-through'> $80.00</span></p>
                </div>
              </div>
              {/* product 4  */}
              <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                {/* product image 4*/}
                <div className='w-full h-[357.25px] bg-green-500 cursor-pointer relative  overflow-hidden flex justify-center'>
                  <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                    <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                  </div>

                  {/* add to cart from here */}
                  <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out'>
                    <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                  </div>
                  <span className=' absolute top-[10px] left-[10px] px-[10px] text-[12px] font-[400] text-white bg-red-500'>-44%</span>
                  <span className=' absolute top-[28px] left-[10px] px-[10px] py-[1px] text-[12px] font-[400] text-white bg-green-800'>Feature</span>

                  <img src={saleproduct4} alt='Product 4' className='w-full' />
                </div>
                {/* product price */}
                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                  <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Contrast binding  layered  dress</a>
                  <p className='text-red-500'>$39.00 &#160;  <span className='text-[#808080] line-through'> $70.00</span></p>
                </div>
              </div>
              {/* product 5  */}
              <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                {/* product image 5*/}
                <div className='w-full h-[357.25px] bg-green-500 cursor-pointer relative  overflow-hidden flex justify-center'>
                  <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                    <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                    <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                  </div>

                  {/* quick add from here */}

                  <div className='w-[250px] px-[20px] py-[15px] bg-white shadow-md absolute bottom-[-100%] quickbar cursor-default transition-[bottom] duration-500 ease-out'>
                    <div className='w-full h-[53.6px] bg-white flex flex-col justify-center gap-y-[10px]'>
                      <p className='text-[14px]'>Quick add to cart</p>
                      <div className='w-full  bg-white flex justify-between text-[14px]  '>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[8px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>XS</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2xp] hover:bg-black hover:text-white duration-300 cursor-pointer'>S</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>M</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>L</span>
                        <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer'>XL</span>
                      </div>
                    </div>
                  </div>
                  <span className=' absolute top-[10px] left-[10px] px-[10px] text-[12px] font-[400] text-white bg-red-500'>-29%</span>

                  <img src={saleproduct5} alt='Product 5' className='w-full' />
                </div>
                {/* product price */}
                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                  <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Colorful sport tank top</a>
                  <p className='text-red-500'>$99.00 &#160;  <span className='text-[#808080] line-through'> $140.00</span></p>
                </div>
              </div>

              {/* right arrow */}

              <span className='absolute right-0 flex justify-center items-center bg-white arrow z-10 shadow-md cursor-pointer shadow-red-500 hover:shadow-red-500 inviaible opacity-0 transition-all duration-500 ease-out'>
                <FontAwesomeIcon icon={faChevronRight} className='bg-white px-[10px] py-[10px] hover:bg-black hover:text-white  duration-300' />
              </span>



            </div>


            {/* on sale product section ends here */}

            {/* product section ends here */}
          </div>
        </div>

        {/* new arrival section ends here */}


        {/* hero 2 section starts from here */}

        <div className='hero2 flex md:flex w-screen h-[400px] md:h-[800px] bg-white  relative  justify-center items-center overflow-hidden  '>
          <img src={hero2} alt='' className='scale-[2.6] md:scale-[2]  2xl:hidden ' />
          <div className='overlay absolute w-full h-full bg-gradient-to-r from-[#047EAD] flex   to-transparent to-50% md:to-80%  2xl:to-50%'>
            <div className='absolute left-[15px] top-[20px] sm:top-[80px] sm:left-[50px] 2xl:left-[50px] 2k:left-[250px] md:top-[100px] flex flex-col gap-y-[15px] md:gap-y-[25px]'>
              <h2 className='text-[36px] leading-[36px] md:text-[100px] md:leading-[100px] font-oswald font-[600] text-white text-start'>WINTER <br /> IS COMING. <br /> TIME FOR <br /> THE SLOPE!</h2>
              <p className='text-[16px] md:text-[20px] text-white font-[400] text-start'>Get ready for the winter season</p>
              <div className='flex flex-col justify-center items-start md:justify-normal md:items-baseline sm:flex-row gap-y-[15px] sm:gap-x-[10px] md:gap-x-[10px]'>
                <a href='#' className=' bg-white flex justify-center items-center gap-x-[10px] px-[15px] py-[8px] md:px-[20px] md:py-[10px] border-[1px] border-white hover:bg-transparent hover:text-white duration-300'>
                  <FontAwesomeIcon icon={faPersonSnowboarding} className='text-[23.8px] md:text-[24px]' />
                  <p className='text-[16px] font-[500] '>Snowboard</p>
                </a>

                <a href='#' className=' bg-white flex justify-center items-center gap-x-[10px] px-[15px] py-[8px] md:px-[20px] md:py-[10px] border-[1px] border-white hover:bg-transparent hover:text-white duration-300'>
                  <FontAwesomeIcon icon={faPersonSkiing} className='text-[24px]' />
                  <p className='text-[16px] font-[500] '>Skiing</p>
                </a>

                <a href='#' className=' bg-white flex justify-center items-center gap-x-[10px] px-[15px] py-[8px] md:px-[20px] md:py-[10px] border-[1px] border-white hover:bg-transparent hover:text-white duration-300'>
                  <FontAwesomeIcon icon={faPersonSkating} className='text-[24px]' />
                  <p className='text-[16px] font-[500] '>Snowskating</p>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* hero 2 section ends here */}

        {/* hero 3 section starts from here */}
        <div className=' hero3 w-screen flex h-[400px] lg:h-[450px] xl:h-[800px] mb-[50px] md:mb-[100px]  justify-center md:justify-normal items-center  bg-green-500  flex-col relative overflow-hidden'>
          <img src={hero3} alt='hero 3 bg' className='scale-[1.2] xl:h-full  md:scale-[1.1] lg:hidden' />
          <div className='absolute w-full h-full  flex justify-center '>
            <div className=' absolute top-[60px] md:top-[80px] xl:top-[150px] flex flex-col gap-y-[10px] md:gap-y-[25px] '>
              <h2 className=' text-[36px] leading-[36px] md:text-[44px] md:leading-[44px] xl:text-[100px] xl:leading-[100px] text-white font-oswald font-[600] text-center'>GET INSPIRED <br /> BY READY-MADE SETS <br /> OF CLOTHES</h2>
              <p className='text-white text-[16px] md:text-[20px] font-[400]'>Save time on complete sets</p>
              <div className='flex flex-col md:flex-row md:gap-x-[270px] xl:gap-x-[550px] 2k:gap-x-[1050px] md:mt-[10px] justify-center items-center gap-y-[10px] '>
                <a href='#' className='bg-white border-[1px] border-white px-[15px] py-[8px] xl:px-[40px] xl:py-[10px] text-[16px] leading-[24px] font-[500] hover:bg-transparent hover:text-white duration-300' >Sets for Women</a>
                <a href='#' className=' bg-white border-[1px] border-white px-[15px] py-[8px] xl:px-[40px] xl:py-[10px] text-[16px] leading-[24px] font-[500] hover:bg-transparent hover:text-white duration-300' >Sets for Men</a>
              </div>
            </div>
          </div>

        </div>

        {/* hero 3 section ends here */}

        {/* hero 4 section starts from here */}

        <div className='w-screen flex flex-col md:flex-row 2xl:h-[598.650px] bg-white sm:mb-[50px] 2xl:mb-[100px] 2k:mb-[200px]  md:px-[50px]'>
          <div className='w-full h-[253.238px] phone:h-[362.7px] sm:h-[539.325px] md:h-[306.737px] lg:h-[389.325px] xl:h-[497.19px] 2xl:h-[605.050px] 2k:h-[750px]  md:w-[50%]  bg-white flex justify-center items-center overflow-hidden'>
            <img src={hero4} alt='' className='w-full  scale-[1.1]' />
          </div>
          <div className='w-full full px-[10px] py-[50px] md:p-[0px] md:w-[50%] md:h-[306.737px] lg:h-[389.325px] xl:h-[497.19px] 2xl:h-[605.050px] 2k:h-[750px] bg-[#f0f0f0] flex justify-center items-center '>
            <div className='w-full h-full flex justify-center items-center bg-transparent text-black gap-y-[20px] md:gap-y-[15px] 2xl:gap-y-[30px] flex-col'>
              <h2 className='text-[32px] leading-[32px] lg:text-[40px] lg:leading-[1em] xl:text-[50px] xl:leading-[50px] 2xl:text-[70px] 2xl:leading-[70px] font-[600] font-oswald text-center'>WE SUPPORT <br />PASSIONS AND TRY <br />TO HELP FUTURE <br />ATHLETES</h2>
              <p className='text-[16px] md:text-[20px] font-[400]'>FInd out more about our activities</p>
              <div className='flex gap-x-[10px] mt-[10px] justify-center text-white'>
                <a href='#' className='bg-black border-[1px] border-black px-[20px] py-[8px] 2xl:px-[40px] 2xl:py-[10px] text-[16px] leading-[24px] font-[500] hover:bg-transparent hover:text-black duration-300 text-nowrap' >About us</a>
                <a href='#' className=' bg-black border-[1px] border-black px-[20px] py-[8px] 2xl:px-[40px] 2xl:py-[10px] text-[16px] leading-[24px] font-[500] hover:bg-transparent hover:text-black duration-300 text-nowrap' >Our mission</a>
              </div>
            </div>
          </div>
        </div>

        {/* hero 4 section ends here */}

        {/* From the blog section starts from here */}

        <div className='w-screen flex  sm:h-[442.487px] mb-[50px] sm:mb-[100px] white  sm:px-[50px] flex-col gap-y-[25px]  '>
          <h2 className='text-[40px] leading-[40px] font-oswald font-[600] sm:text-start'>FROM THE BLOG</h2>

          <div className='w-full 2xl:h-[442.487px] flex flex-col sm:flex-row gap-y-[20px] sm:overflow-x-auto'>

            {/* blog 1 from here */}
            <div className='flex'>
              <div className=' sm:h-[349.487px] bg-white sm:pr-[40px] border-r-[1px] border-gray-200 flex flex-col gap-y-[20px]'>

                {/* blog image 1 */}
                <div className='sm:w-[420.325px] sm:h-[242.488px] overflow-hidden bg-green-500 flex justify-center items-center '>
                  <img src={blog1} alt='' className=' sm:hover:scale-[1.20] duration-[400ms] ease-out' />
                </div>
                <div className='w-full h-[92px] bg-white pl-[15px] sm:pl-[0px]'>
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
                    <h4 className='text-[15px] sm:text-[20px] leading-[20px] font-[500] 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>Ranking of the best tennis rackets in year</h4>
                  </div>
                  {/* readmore  */}
                  <div className='w-full h-[24px] flex justify-start bg-white '>
                    <a href='#' className=' text-start underline underline-offset-0 hover:text-red-500 duration-200 hover:underline hover:underline-offset-2'>Read more</a>
                  </div>
                </div>
              </div>
            </div>
            {/* blog 1 ends here */}

            {/* blog 2 from here */}
            <div className='flex'>
              <div className=' sm:h-[349.487px] bg-white 2xl:pl-[40px]  sm:px-[40px] border-r-[1px] border-gray-200 flex flex-col gap-y-[20px]'>

                {/* blog image 2 */}
                <div className='sm:w-[420.325px] sm:h-[242.488px] overflow-hidden bg-green-500 flex justify-center items-center '>
                  <img src={blog2} alt='' className=' sm:hover:scale-[1.20] duration-[400ms] ease-out' />
                </div>
                <div className='w-full h-[92px] bg-white pl-[15px] sm:pl-[0px] '>
                  <div className='w-full h-[58px] bg-white flex flex-col gap-x-[10px] gap-y-[10px]'>
                    {/* date and user  from here */}
                    <div className='w-full h-[20px] bg-white flex items-center gap-x-[20px] text-gray-500'>
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
                    <h4 className='text-[15px] sm:text-[20px] leading-[20px] font-[500] 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>How should I dress for gym workout?</h4>
                  </div>
                  {/* readmore  */}
                  <div className='w-full h-[24px] flex justify-start bg-white'>
                    <a href='#' className=' text-start underline underline-offset-0 hover:text-red-500 duration-200 hover:underline hover:underline-offset-2'>Read more</a>
                  </div>
                </div>
              </div>
            </div>
            {/* blog 2 ends here */}

            {/* blog 3 from here */}
            <div className='sm:flex hidden'>
              <div className='2xl:h-[349.487px] bg-white sm:pl-[40px]   flex flex-col gap-y-[20px]'>

                {/* blog image 3 */}
                <div className='2xl:w-[420.325px] 2xl:h-[242.488px] overflow-hidden bg-green-500 flex justify-center items-center '>
                  <img src={blog3} alt='' className=' 2xl:hover:scale-[1.20] duration-[400ms] ease-out' />
                </div>
                <div className='w-full h-[92px] bg-white'>
                  <div className='w-full h-[58px] bg-white flex flex-col gap-x-[10px] gap-y-[10px]'>
                    {/* date and user  from here */}
                    <div className='w-full h-[20px] bg-white flex items-center gap-x-[20px] text-gray-500'>
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
                    <h4 className='text-[20px] leading-[20px] font-[500] 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-nowrap'>Evolution of strengthening  vital muscles</h4>
                  </div>
                  {/* readmore  */}
                  <div className='w-full h-[24px] flex justify-start bg-white'>
                    <a href='#' className=' text-start underline underline-offset-0 hover:text-red-500 duration-200 hover:underline hover:underline-offset-2'>Read more</a>
                  </div>
                </div>
              </div>
            </div>
            {/* blog 3 ends here */}
          </div>


        </div>

        {/* From the blog section ends here */}

        {/* instagram section from here */}
        <div className='w- hidden 2xl:flex flex-col sm:flex-row h-auto 2xl:h-[464px] bg-[#f1f1f1] 2xl:px-[50px]  justify-center items-center '>
          <div className='w-full flex flex-col gap-y-[30px]'>
            <h2 className='text-[28px]  2xl:text-[40px] 2xl:leading-[40px] font-[600] font-oswald text-start'>WE ARE ON INSTAGRAM</h2>
            <div className='w-full  flex flex-col  gap-y-[20px]  sm:flex-row gap-x-[5px] justify-center items-center overflow-x-auto'>

              {/* post 1 from here */}

              <div className='postsection w-[199.562px] h-[199.562px] bg-white relative overflow-hidden'>
                <img src={img1} alt='' className='post duration-[400ms] ease-out ' />
                <div className='absolute overlay top-0 right-0 bottom-0 left-0  flex justify-center items-center duration-[400ms] ease-out'>
                  <FontAwesomeIcon icon={faInstagram} className='instagram text-white text-[35px] opacity-0 duration-[400ms] ease-out' />
                </div>
              </div>
              {/* post 1 ends here */}

              {/* post 2 from here */}

              <div className='postsection  sm:w-[199.562px] sm:h-[199.562px] bg-white relative overflow-hidden'>
                <img src={img2} alt='' className='post duration-[400ms] ease-out ' />
                <div className='absolute overlay top-0 right-0 bottom-0 left-0  flex justify-center items-center duration-[400ms] ease-out'>
                  <FontAwesomeIcon icon={faInstagram} className='instagram text-white text-[35px] opacity-0 duration-[400ms] ease-out' />
                </div>
              </div>
              {/* post 2 ends here */}

              {/* post 3 from here */}

              <div className='postsection  sm:w-[199.562px] sm:h-[199.562px] bg-white relative overflow-hidden'>
                <img src={img3} alt='' className='post duration-[400ms] ease-out ' />
                <div className='absolute overlay top-0 right-0 bottom-0 left-0  flex justify-center items-center duration-[400ms] ease-out'>
                  <FontAwesomeIcon icon={faInstagram} className='instagram text-white text-[40px] opacity-0 duration-[400ms] ease-out' />
                </div>
              </div>
              {/* post 3 ends here */}

              {/* post 4 from here */}

              <div className='postsection  sm:w-[199.562px] sm:h-[199.562px] bg-white relative overflow-hidden'>
                <img src={img4} alt='' className='post duration-[400ms] ease-out ' />
                <div className='absolute overlay top-0 right-0 bottom-0 left-0  flex justify-center items-center duration-[400ms] ease-out'>
                  <FontAwesomeIcon icon={faInstagram} className='instagram text-white text-[40px] opacity-0 duration-[400ms] ease-out' />
                </div>
              </div>
              {/* post 4 ends here */}

              {/* post 5 from here */}

              <div className='postsection  sm:w-[199.562px] sm:h-[199.562px] bg-white relative overflow-hidden'>
                <img src={img5} alt='' className='post duration-[400ms] ease-out ' />
                <div className='absolute overlay top-0 right-0 bottom-0 left-0  flex justify-center items-center duration-[400ms] ease-out'>
                  <FontAwesomeIcon icon={faInstagram} className='instagram text-white text-[40px] opacity-0 duration-[400ms] ease-out' />
                </div>
              </div>
              {/* post 5 ends here */}

              {/* post 6 from here */}

              <div className='postsection  sm:w-[199.562px] sm:h-[199.562px] bg-white relative overflow-hidden'>
                <img src={img6} alt='' className='post duration-[400ms] ease-out ' />
                <div className='absolute overlay top-0 right-0 bottom-0 left-0  flex justify-center items-center duration-[400ms] ease-out'>
                  <FontAwesomeIcon icon={faInstagram} className='instagram text-white text-[40px] opacity-0 duration-[400ms] ease-out' />
                </div>
              </div>
              {/* post 6 ends here */}

              {/* post 7 from here */}

              <div className='postsection  sm:w-[199.562px] sm:h-[199.562px] bg-white relative overflow-hidden'>
                <img src={img7} alt='' className='post duration-[400ms] ease-out ' />
                <div className='absolute overlay top-0 right-0 bottom-0 left-0  flex justify-center items-center duration-[400ms] ease-out'>
                  <FontAwesomeIcon icon={faInstagram} className='instagram text-white text-[40px] opacity-0 duration-[400ms] ease-out' />
                </div>
              </div>
              {/* post 7 ends here */}

            </div>
          </div>
        </div>
        {/* instagram section ends here */}




      </main></>
  )
}

export default Home
