import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

// image import from here 
import english from "../Assets/flags/english.png"
import espenol from "../Assets/flags/espanol.png"
import duestch from "../Assets/flags/deutsch.png"
import logo from "../Assets/logo/logo.png"

// image import ends  here 

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
import yoga from "../Assets/shopdrop/mg-menu-sport.jpg"

// accessory's dropdown images from here


import acfootball from "../Assets/accessory/football.png"
import acbasketball from "../Assets/accessory/basketball.png"
import acvolleyball from "../Assets/accessory/volleyball.png"
import acswimming from "../Assets/accessory/swimming.png"
import acrugby from "../Assets/accessory/rugby.png"
import acgolf from "../Assets/accessory/golf.png"
import acsurfing from "../Assets/accessory/surfboat.png"
import accycling from "../Assets/accessory/cycling.png"
import acbadminton from "../Assets/accessory/badminton.png"
import acboxing from "../Assets/accessory/boxing.png"
import acracing from "../Assets/accessory/racing.png"
import actennis from "../Assets/accessory/tennis.png"

import Main from '../Main/Main'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Blog from '../Pages/Blog/Blog'
import Help from '../Pages/Help/Help'






import { faAngleDown, faBars, faBaseballBatBall, faBasketball, faCartPlus, faDumbbell, faFootball, faFutbol, faGolfBallTee, faHeart, faMagnifyingGlass, faPersonBiking, faPersonHiking, faPersonSkating, faPersonSnowboarding, faPersonSwimming, faSkating, faUserPlus, faVolleyball } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom'


const Header = () => {
    const [navbarstatus, setnavbarstatus] = useState("")
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let yscroll = window.pageYOffset

            yscroll > 250 ? setnavbarstatus("activenav") : setnavbarstatus("inactivenav")
        }, [])
    })



    return (

        <>
            <BrowserRouter>
                <header className='shadow-lg z-40 '>

                    {/* header's top section starts here */}
                    <div className=' top hidden md:flex w-screen h-[40px] py-[8px] px-[10px] sm:px-[50px] lg:px-[50px]    border-b-[1px] border-gray-200  justify-center items-center'>
                        <div className='w-[1420.8px] h-[24px] bg-white flex justify-between'>

                            {/* socialmedia section starts from here */}
                            <div className="socialmedia flex  gap-x-[15px] text-gray-700">
                                <a href=' #' >
                                    <FontAwesomeIcon icon={faInstagram} className="w-[18px] h-[18px] hover:text-red-500 duration-200" />
                                </a>
                                <a href=' #' >
                                    <FontAwesomeIcon icon={faYoutube} className="w-[18px] h-[18px] hover:text-red-500 duration-200" />
                                </a>
                                <a href=' #'>
                                    <FontAwesomeIcon icon={faXTwitter} className="w-[18px] h-[18px] hover:text-red-500 duration-200" />
                                </a>
                                <a href=' #' >
                                    <FontAwesomeIcon icon={faFacebookF} className="w-[18px] h-[18px] hover:text-red-500 duration-200" />
                                </a>
                            </div>
                            {/* socialmedia section ends  here */}
                            <div className='flex justify-center items-center gap-x-5'>

                                {/* about, help, contact and blog section starts  here */}
                                <div className="flex gap-x-[23px] text-[13px] font-semibold">
                                    {/* <Link to={"/home"} className="hover:text-red-500 duration-200 " >Home</Link> */}
                                    <Link to={"/about"} className="hover:text-red-500 duration-200 " >About</Link>
                                    <Link to={"/contact"} className="hover:text-red-500 duration-200 " >Contact</Link>
                                    <Link to={"/blog"} className="hover:text-red-500 duration-200 " >Blog</Link>
                                    <Link to={"/help"} className="hover:text-red-500 duration-200 " >Help</Link>
                                </div>
                                {/* about, help, contact and blog section ends  here */}

                                {/* lang and currency section starts from here */}
                                <div className="flex gap-x-[20px] ">
                                    <div className='lang flex  justify-center items-center relative  '>
                                        <a href='' className=" text-sm hover:text-red-500 duration-200 flex justify-center items-center">
                                            <img src={english} alt='' className="mr-[8px] w-[18px] h-[12px]" />
                                            <p>English</p>
                                            <FontAwesomeIcon icon={faAngleDown} className="ml-[3px] text-[11px]" />
                                            <div className='langdrop z-10 bg-white hover:text-black w-[145px] h-[80px]  absolute  top-[150%] border-[1px] border-black py-[10px] flex flex-col justify-center items-center gap-y-2 invisible none opacity-0 transition-all duration-[400ms]'>
                                                <a href=' #' className="flex justify-center items-center hover:text-red-500 duration-200 w-full" >
                                                    <img src={espenol} alt='' className="mr-[8px] w-[18px] h-[12px]" />
                                                    <p>English</p>
                                                </a>
                                                <a href=' #' className="flex justify-center items-center hover:text-red-500 duration-200 w-full" >
                                                    <img src={duestch} alt='' className="mr-[8px] w-[18px] h-[12px]" />
                                                    <p>English</p>
                                                </a>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='currency flex justify-center items-center hover:text-red-500 duration-200 '>
                                        {/* <img src={english} alt='' className="mr-[8px]" /> */}
                                        <a href='' className=" text-sm hover:text-red-500 duration-200 relative">$ USD
                                            <FontAwesomeIcon icon={faAngleDown} className="ml-[3px] text-[11px]" />
                                            <div className="currencydrop z-10 bg-white hover:text-black w-[145px] h-[80px]  absolute right-0  top-[150%] border-[1px] border-black py-[10px] flex flex-col justify-center items-center gap-y-2 invisible none opacity-0 transition-all duration-[400ms]">
                                                <a href=' #' className="flex justify-center items-center hover:text-red-500 duration-200 w-full" >
                                                    <p>€ EUR</p>
                                                </a>
                                                <a href=' #' className="flex justify-center items-center hover:text-red-500 duration-200 w-full" >
                                                    <p>€ GBP</p>
                                                </a>

                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* lang and currency section ends here */}
                            </div>
                        </div>
                    </div>
                    {/* header's top section ends here */}

                    {/* header's bottom section stats from here */}
                    <div className={' bg-white navbar w-screen px-[10px] sm:px-[50px] lg:px-[50px] py-[10px] md:py-[20px] flex justify-center items-center  transition-all duration-500 ' + navbarstatus}>
                        <div className='w-[1420.800px] h-[34px] md:h-[45.600px]  flex justify-between'>

                            <div className='flex justify-center items-center gap-x-6 md:hidden'>
                                <FontAwesomeIcon icon={faBars} className='text-[25px]  hover:text-red-500' />
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[20px]  hover:text-red-500 sm:hidden' />
                            </div>
                            {/* logo and navbar from here */}

                            <div className='flex justify-center items-center'>


                                <div className='logo '>
                                    <img src={logo} alt="" className="w-[110px]  md:w-[172px]" />
                                </div>


                                {/* navbar from here  */}


                                <nav className='navbar hidden  w-[470.663px] h-[38px]  ml-[25px] xl:flex justify-center items-center gap-x-[25px] '>
                                    <div className=" shop relative flex justify-center keys cursor-pointer">
                                        <p className="text-lg font-medium py-7">Shop</p>
                                        <span className=" underline w-[1px] h-[0.7px] bg-black absolute bottom-[30px] transition-all duration-300 ease-in-out opacity-0   "></span>

                                        {/* Shop dropdown starts from here */}

                                        <div className="shopdrop    w-screen h-[460px] bg-white  absolute top-[83px] left-[-269px] border-t-[1px] 2k:left-[-462px] border-gray-300 transition-[height] duration-[300ms] ease-out  opacity-0 invisible shadow-lg shadow-gray-400">
                                            <div className='top w-full h-[40%]  border-b-[1px] border-gray-200 cursor-default flex justify-between items-center px-[100px] 2k:px-[250px]'>
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
                                                <div className='football flex flex-col  items-center cursor-pointer hover:text-red-500 duration-200'>
                                                    <img src={hiking} alt='' className='w-[40px] h-[40px]' />
                                                    <h3 className='mt-[16px] font-semibold hover:text-red-500 duration-200'>Hiking</h3>
                                                </div>
                                            </div>
                                            <div className='bottom w-full h-[60%]   cursor-default  px-[60px] 2k:px-[200px] pt-[50px]'>
                                                <div className='w-full flex'>
                                                    {/* special section starts from here */}
                                                    <div className='w-[200px]  flex flex-col items-start'>
                                                        <h3 className='font-semibold'>Special</h3>
                                                        <div className='flex flex-col gap-y-[10px] mt-[15px] items-start'>
                                                            <a href=' #' className='w-full hover:text-red-500 duration-200'>Leatest products </a>
                                                            <a href=' #' className='w-full hover:text-red-500 duration-200'>Sale </a>
                                                            <a href=' #' className='w-full hover:text-red-500 duration-200'>Bestsellers </a>
                                                            <a href=' #' className='w-full hover:text-red-500 duration-200'>Top rated </a>
                                                            <a href=' #' className='w-full hover:text-red-500 duration-200'>Popularity </a>
                                                        </div>
                                                    </div>

                                                    {/* shop by sports section starts from  here */}

                                                    <div className='w-[165px]'>
                                                        <h3 className='font-semibold'>Shop by sport</h3>
                                                        <div className='w-full mt-[15px] flex flex-col gap-y-[15px]'>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faFutbol} />
                                                                Football
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faBasketball} />
                                                                BasketBall
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faPersonBiking} />
                                                                Cycling
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faGolfBallTee} />
                                                                Golf
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faDumbbell} />
                                                                Gym
                                                            </a>

                                                        </div>
                                                    </div>
                                                    <div className='w-[165px]  flex flex-col gap-y-[15px] mt-[40px] ml-[50px]'>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faPersonHiking} />
                                                            Hiking
                                                        </a>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faPersonSkating} />
                                                            Ice-skating
                                                        </a>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faFootball} />
                                                            Rugby
                                                        </a>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faSkating} />
                                                            Skateboard
                                                        </a>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faPersonSnowboarding} />
                                                            Snowboard
                                                        </a>

                                                    </div>
                                                    <div className='w-[165px]  flex flex-col gap-y-[15px] mt-[40px] ml-[50px]'>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faPersonSwimming} />
                                                            Swimming
                                                        </a>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faBaseballBatBall} />
                                                            Baseball
                                                        </a>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faVolleyball} />
                                                            Volleyball
                                                        </a>
                                                    </div>

                                                    <div className='w-[165px] ml-1 mr-14'>
                                                        <h3 className='font-semibold'>Follow Us</h3>
                                                        <div className='w-full mt-[15px] flex flex-col gap-y-[15px]'>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faInstagram} />
                                                                Instgram
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faXTwitter} />
                                                                Twitter
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faFacebookF} />
                                                                CycFacebookling
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faYoutube} />
                                                                Youtube
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faLinkedinIn} />
                                                                Linkedin
                                                            </a>

                                                        </div>
                                                    </div>
                                                    <div className='flex justify-center items-center  relative w-[424.457px] h-auto  overflow-hidden '>
                                                        <a href=' #'>
                                                            <img src={yoga} alt='' className='h-[100%] hover:scale-110 duration-300' />
                                                            <div className='absolute left-[50px] top-[15px]'>
                                                                <h1 className=' font-[600] font-oswald text-white text-[50px] leading-[50px]'>YES FOR <br /> YOGA!</h1>
                                                                <p className=' mt-[15px] text-white text-lg font-semibold mb-[25px]'>Check out!</p>
                                                                <a href=' #' className=' cta1 w-[76.362px] h-[30px]  px-[40px] py-[10px] bg-white text-black font-semibold duration-300'>Shop now</a>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className=' shopoverlay hidden w-screen h-screen bg-black opacity-50 absolute top-0px]  z-[-20] transition-all duration-200 ease-in-out '></div>
                                        </div>
                                    </div>

                                    <div className="women relative flex justify-center keys cursor-pointer">
                                        <p className="text-lg font-medium py-7">Women</p>
                                        <span className=" underline w-[1px] h-[0.7px] bg-black absolute bottom-[30px] transition-all duration-300 ease-in-out opacity-0   "></span>
                                        {/* women's dropdown section starts from here */}
                                        <div className='womendrop flex w-screen  h-[300px] absolute top-[83px] left-[-336px] 2k:left-[-528px]  bg-white border-t-[1px] border-gray-200 px-[60px] 2k:px-[210px] pt-[50px] p-[40px]  justify-center transition-[padding,height] duration-[300ms] ease-out opacity-0 invisible shadow-lg shadow-gray-400  '>
                                            <div className='h-full w-full ' >
                                                <div className='w-full h-full  flex justify-center 2k:justify-between gap-x-[40px] '>
                                                    {/* special section starts from here */}
                                                    <div className='w-[200px] h-[90%] flex flex-col'>
                                                        <h3 className='font-semibold'>Special</h3>
                                                        <div className='flex flex-col gap-y-[10px] mt-[15px]'>
                                                            <a href=' #' className='w-full hover:text-red-500 duration-200'>Leatest products </a>
                                                            <a href=' #' className='w-full hover:text-red-500 duration-200'>Sale </a>
                                                            <a href=' #' className='w-full hover:text-red-500 duration-200'>Bestsellers </a>
                                                            <a href=' #' className='w-full hover:text-red-500 duration-200'>Top rated </a>
                                                            <a href=' #' className='w-full hover:text-red-500 duration-200'>Popularity </a>
                                                        </div>
                                                    </div>

                                                    {/* shop by sports section starts from  here */}

                                                    <div className='w-[165px] h-[90%]'>
                                                        <h3 className='font-semibold'>Shop by sport</h3>
                                                        <div className='w-full mt-[15px] flex flex-col gap-y-[15px]'>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faFutbol} />
                                                                Football
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faBasketball} />
                                                                BasketBall
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faPersonBiking} />
                                                                Cycling
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faGolfBallTee} />
                                                                Golf
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faDumbbell} />
                                                                Gym
                                                            </a>

                                                        </div>
                                                    </div>
                                                    <div className='w-[165px] h-[90%] flex flex-col gap-y-[15px] mt-[40px] ml-[50px]'>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faPersonHiking} />
                                                            Hiking
                                                        </a>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faPersonSkating} />
                                                            Ice-skating
                                                        </a>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faFootball} />
                                                            Rugby
                                                        </a>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faSkating} />
                                                            Skateboard
                                                        </a>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faPersonSnowboarding} />
                                                            Snowboard
                                                        </a>

                                                    </div>
                                                    <div className='w-[165px] h-[90%]  flex flex-col gap-y-[15px] mt-[40px] ml-[50px]'>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faPersonSwimming} />
                                                            Swimming
                                                        </a>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faBaseballBatBall} />
                                                            Baseball
                                                        </a>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faVolleyball} />
                                                            Volleyball
                                                        </a>
                                                    </div>

                                                    <div className='w-[165px] h-[90%] ml-1 mr-14'>
                                                        <h3 className='font-semibold'>Follow Us</h3>
                                                        <div className='w-full mt-[15px] flex flex-col gap-y-[15px]'>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faInstagram} />
                                                                Instgram
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faXTwitter} />
                                                                Twitter
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faFacebookF} />
                                                                CycFacebookling
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faYoutube} />
                                                                Youtube
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faLinkedinIn} />
                                                                Linkedin
                                                            </a>

                                                        </div>
                                                    </div>

                                                    {/* women's overlay from here */}

                                                    <div className=' womenoverlay hidden w-screen h-screen bg-black opacity-50 absolute top-0px]  z-[-20] transition-all duration-200 ease-in-out '></div>

                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="men relative flex justify-center keys cursor-pointer">
                                        <p className="text-lg font-medium py-7">Men</p>
                                        <span className=" underline w-[1px] h-[0.7px] bg-black absolute bottom-[30px] transition-all duration-300 ease-in-out opacity-0   "></span>

                                        {/* men dropdown section from here on */}

                                        <div className='mendrop flex w-screen  h-[300px] absolute top-[83px] left-[-425px] 2k:left-[-620px] bg-white border-t-[1px] border-gray-200 px-[60px] 2k:px-[210px] pt-[50px] p-[40px]  justify-center transition-[padding,height] duration-[300ms] ease-out opacity-0 invisible shadow-lg shadow-gray-400  '>
                                            <div className='h-full w-full ' >
                                                <div className='w-full h-full  flex justify-center 2k:justify-between gap-x-[40px] '>
                                                    {/* special section starts from here */}
                                                    <div className='w-[200px] h-[90%] flex flex-col'>
                                                        <h3 className='font-semibold'>Special</h3>
                                                        <div className='flex flex-col gap-y-[10px] mt-[15px]'>
                                                            <a href=' #' className='w-full hover:text-red-500 duration-200'>Leatest products </a>
                                                            <a href=' #' className='w-full hover:text-red-500 duration-200'>Sale </a>
                                                            <a href=' #' className='w-full hover:text-red-500 duration-200'>Bestsellers </a>
                                                            <a href=' #' className='w-full hover:text-red-500 duration-200'>Top rated </a>
                                                            <a href=' #' className='w-full hover:text-red-500 duration-200'>Popularity </a>
                                                        </div>
                                                    </div>

                                                    {/* shop by sports section starts from  here */}

                                                    <div className='w-[165px] h-[90%]'>
                                                        <h3 className='font-semibold'>Shop by sport</h3>
                                                        <div className='w-full mt-[15px] flex flex-col gap-y-[15px]'>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faFutbol} />
                                                                Football
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faBasketball} />
                                                                BasketBall
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faPersonBiking} />
                                                                Cycling
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faGolfBallTee} />
                                                                Golf
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faDumbbell} />
                                                                Gym
                                                            </a>

                                                        </div>
                                                    </div>
                                                    <div className='w-[165px] h-[90%] flex flex-col gap-y-[15px] mt-[40px] ml-[50px]'>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faPersonHiking} />
                                                            Hiking
                                                        </a>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faPersonSkating} />
                                                            Ice-skating
                                                        </a>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faFootball} />
                                                            Rugby
                                                        </a>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faSkating} />
                                                            Skateboard
                                                        </a>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faPersonSnowboarding} />
                                                            Snowboard
                                                        </a>

                                                    </div>
                                                    <div className='w-[165px] h-[90%]  flex flex-col gap-y-[15px] mt-[40px] ml-[50px]'>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faPersonSwimming} />
                                                            Swimming
                                                        </a>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faBaseballBatBall} />
                                                            Baseball
                                                        </a>
                                                        <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                            <FontAwesomeIcon icon={faVolleyball} />
                                                            Volleyball
                                                        </a>
                                                    </div>

                                                    <div className='w-[165px] h-[90%] ml-1 mr-14'>
                                                        <h3 className='font-semibold'>Follow Us</h3>
                                                        <div className='w-full mt-[15px] flex flex-col gap-y-[15px]'>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faInstagram} />
                                                                Instgram
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faXTwitter} />
                                                                Twitter
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faFacebookF} />
                                                                CycFacebookling
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faYoutube} />
                                                                Youtube
                                                            </a>
                                                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                                                <FontAwesomeIcon icon={faLinkedinIn} />
                                                                Linkedin
                                                            </a>

                                                        </div>
                                                    </div>

                                                    {/* women's overlay from here */}

                                                    <div className=' menoverlay hidden w-screen h-screen bg-black opacity-50 absolute top-0px]  z-[-20] transition-all duration-200 ease-in-out '></div>

                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="accessory relative flex justify-center keys cursor-pointer">
                                        <p className="text-lg font-medium py-7">Accessories</p>
                                        <span className=" underline w-[1px] h-[0.7px] bg-black absolute bottom-[30px] transition-all duration-300 ease-in-out opacity-0   "></span>
                                        <div className='accessorydrop flex bg-white w-screen  h-[333px] absolute top-[83px] left-[-486px] 2k:left-[-678px]  border-t-[1px] border-gray-200 pl-[80px] px-[50px] 2xl:px-[240px] py-[50px]  justify-center transition-[padding,height] duration-[300ms] ease-out  opacity-0 invisible shadow-lg shadow-gray-400 '>
                                            <div className=' w-full h-full  flex flex-col gap-y-[10px] '>
                                                <div className='w-full h-[33.33%]  flex gap-x-[10px]'>
                                                    <div className='w-[25%] h-full bg-gray-100 flex items-center pl-[20px] pr-[10px] py-[15px] gap-x-[20px]'>
                                                        <img src={acfootball} alt='' className='w-[46px] h-[46px]' />
                                                        <h6 className='hover:text-red-500 duration-200 font-[500]'>Football</h6>
                                                    </div>
                                                    <div className='w-[25%] h-full bg-gray-100 flex items-center pl-[20px] pr-[10px] py-[15px] gap-x-[20px]'>
                                                        <img src={acbasketball} alt='' className='w-[46px] h-[46px]' />
                                                        <h6 className='hover:text-red-500 duration-200 font-[500]'>Basketball</h6>
                                                    </div>
                                                    <div className='w-[25%] h-full bg-gray-100 flex items-center pl-[20px] pr-[10px] py-[15px] gap-x-[20px]'>
                                                        <img src={acvolleyball} alt='' className='w-[46px] h-[46px]' />
                                                        <h6 className='hover:text-red-500 duration-200 font-[500]'>Volleyball</h6>
                                                    </div>
                                                    <div className='w-[25%] h-full bg-gray-100 flex items-center pl-[20px] pr-[10px] py-[15px] gap-x-[20px]'>
                                                        <img src={actennis} alt='' className='w-[46px] h-[46px]' />
                                                        <h6 className='hover:text-red-500 duration-200 font-[500]'>Tennis</h6>
                                                    </div>
                                                </div>
                                                <div className='w-full h-[33.33%]   flex gap-x-[10px]'>
                                                    <div className='w-[25%] h-full bg-gray-100 flex items-center pl-[20px] pr-[10px] py-[15px] gap-x-[20px]'>
                                                        <img src={acswimming} alt='' className='w-[46px] h-[46px]' />
                                                        <h6 className='hover:text-red-500 duration-200 font-[500]'>Swimming</h6>
                                                    </div>
                                                    <div className='w-[25%] h-full bg-gray-100 flex items-center pl-[20px] pr-[10px] py-[15px] gap-x-[20px]'>
                                                        <img src={acrugby} alt='' className='w-[46px] h-[46px]' />
                                                        <h6 className='hover:text-red-500 duration-200 font-[500]'>Rugby</h6>
                                                    </div>
                                                    <div className='w-[25%] h-full bg-gray-100 flex items-center pl-[20px] pr-[10px] py-[15px] gap-x-[20px]'>
                                                        <img src={acgolf} alt='' className='w-[46px] h-[46px]' />
                                                        <h6 className='hover:text-red-500 duration-200 font-[500]'>Golf</h6>
                                                    </div>
                                                    <div className='w-[25%] h-full bg-gray-100 flex items-center pl-[20px] pr-[10px] py-[15px] gap-x-[20px]'>
                                                        <img src={acsurfing} alt='' className='w-[46px] h-[46px]' />
                                                        <h6 className='hover:text-red-500 duration-200 font-[500]'>Surfing</h6>
                                                    </div>
                                                </div>
                                                <div className='w-full h-[33.33%]  flex gap-x-[10px]'>
                                                    <div className='w-[25%] h-full bg-gray-100 flex items-center pl-[20px] pr-[10px] py-[15px] gap-x-[20px]'>
                                                        <img src={accycling} alt='' className='w-[46px] h-[46px]' />
                                                        <h6 className='hover:text-red-500 duration-200 font-[500]'>Cycling</h6>
                                                    </div>
                                                    <div className='w-[25%] h-full bg-gray-100 flex items-center pl-[20px] pr-[10px] py-[15px] gap-x-[20px]'>
                                                        <img src={acbadminton} alt='' className='w-[46px] h-[46px]' />
                                                        <h6 className='hover:text-red-500 duration-200 font-[500]'>Badminton</h6></div>
                                                    <div className='w-[25%] h-full bg-gray-100 flex items-center pl-[20px] pr-[10px] py-[15px] gap-x-[20px]'>
                                                        <img src={acboxing} alt='' className='w-[46px] h-[46px]' />
                                                        <h6 className='hover:text-red-500 duration-200 font-[500]'>Boxing</h6>
                                                    </div>
                                                    <div className='w-[25%] h-full bg-gray-100 flex items-center pl-[20px] pr-[10px] py-[15px] gap-x-[20px]'>
                                                        <img src={acracing} alt='' className='w-[46px] h-[46px]' />
                                                        <h6 className='hover:text-red-500 duration-200 font-[500]'>Racing</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=' accessoryoverlay hidden w-screen h-screen bg-black opacity-50 absolute top-[0px] left-[0]  z-[-20] transition-all duration-200 ease-in-out '></div>
                                        </div>
                                    </div>

                                    <div className="relative flex justify-center keys cursor-pointer">
                                        <p className="text-lg font-medium py-7">Sale</p>
                                        <span className=" underline w-[1px] h-[0.7px] bg-black absolute bottom-[30px] transition-all duration-300 ease-in-out opacity-0   "></span>
                                    </div>

                                    <div className="relative flex justify-center keys cursor-pointer">
                                        <p className="text-lg font-medium py-7">Pages</p>
                                        <span className=" underline w-[1px] h-[0.7px] bg-black absolute bottom-[30px] transition-all duration-300 ease-in-out opacity-0   "></span>
                                    </div>

                                </nav>

                            </div>
                            {/* logo and navbar ends here */}

                            {/* searchbar and profile combined from here */}
                            <div className='flex '>
                                {/* searchbar from here */}

                                <div className=' hidden   pl-[20px] pr-[50px] py-[7px] bg-gray-100  relative sm:flex justify-center items-center'>
                                    <input type="text" className="w-[158.400px] h-[30px] focus:outline-none bg-gray-100 text-sm flex justify-center items-center" placeholder='Search for products' />
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute right-[14px] text-lg' />
                                </div>

                                {/* searchbar ends here */}

                                {/* profile section starts from here */}

                                <div className='profile flex md:gap-x-2 sm:ml-[20px] md:ml-10'>
                                    <div className='user flex justify-center items-center'>
                                        <a href=' #' className=' relative'>
                                            <FontAwesomeIcon icon={faUserPlus} className="text-[20px] px-[8px] py-[8px] md:px-3 md:py-3 hover:text-red-500 duration-200" />
                                            <div className='userdrop absolute  bg-red-500'>

                                            </div>
                                        </a>
                                    </div>
                                    <div className='wishlist hidden md:block'>
                                        <a href=' #' className="  duration-200 relative">
                                            <FontAwesomeIcon icon={faHeart} className="text-[20px]:px-3 py-3 hover:text-red-500 duration-200" />
                                            <div className='wishlistdrop absolute left-[65%] bottom-[-15px] text-white bg-gray-600 px-1 py-[2px] border-[2px] border-white text-sm invisible opacity-0 none  delay-[500ms] ease-out'>
                                                Wishlist
                                            </div>
                                        </a>
                                    </div>
                                    <div className='cart flex justify-center items-center'>
                                        <a href=' #' className='cart flex justify-center relative'>
                                            <FontAwesomeIcon icon={faCartPlus} className="text-[20px] px-[8px] py-[8px] md:px-3 md:py-3 hover:text-red-500 duration-200" />
                                            {/* <div className='cartdrop absolute text-white bg-gray-600 text-nowrap text-sm left-[-70px] bottom-[-15px] px-1 py-[2px] border-[2px] border-white opacity-0 invisible none delay-[1s] ease-out duration-[300ms]'>
                                    View your shopping cart
                                </div> */}
                                        </a>
                                    </div>

                                </div>

                                {/* profile section ends here */}
                            </div>
                            {/* searchbar and profile combined ends here */}
                        </div>
                    </div>

                    {/* header's bottom section ends here */}

                </header>
                <div className=''>
                    <Routes>
                        <Route exact path='/' element={<Main />} />
                        <Route exact path='/about' element={<About />} />
                        <Route exact path='/contact' element={<Contact />} />
                        <Route exact path='/blog' element={<Blog />} />
                        <Route exact path='/help' element={<Help />} />
                    </Routes>
                </div>

            </BrowserRouter>
        </>

    )
}

export default Header
