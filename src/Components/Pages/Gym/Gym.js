import React, { useState } from 'react'
import "./gym.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



import { faCalendarDays, faChartBar, faHeart, faUser, } from '@fortawesome/free-regular-svg-icons'
import { faAngleUp, faChevronLeft, faChevronRight, faMagnifyingGlass, faCheck, faStar } from '@fortawesome/free-solid-svg-icons'

// product section images

import p1 from "../../Assets/training/p1.jpg"
import p2 from "../../Assets/training/p2.jpg"
import p3 from "../../Assets/training/p3.jpg"
import p4 from "../../Assets/training/p4.jpg"
import p5 from "../../Assets/training/p5.jpg"
import p6 from "../../Assets/training/p6.jpg"
import p7 from "../../Assets/training/p7.jpg"
import p8 from "../../Assets/training/p8.jpg"
import p9 from "../../Assets/training/p9.jpg"
import p10 from "../../Assets/training/p10.jpg"
import p11 from "../../Assets/training/p11.jpg"
import p12 from "../../Assets/training/p12.jpg"
import p13 from "../../Assets/training/p13.jpg"
import p14 from "../../Assets/training/p14.jpg"
import p15 from "../../Assets/training/p15.jpg"



const Gym = () => {

    // added to your cart product 1

    const [added1, setadded1] = useState("addedinactive")

    const cartbox1active = () => {
        setadded1(".addedactive")
    }

    const cartbox1inactive = () => {
        setadded1("addedinactive")
    }

    // added to your cart product 2

    const [added2, setadded2] = useState("addedinactive")

    const cartbox2active = () => {
        setadded2(".addedactive")
    }

    const cartbox2inactive = () => {
        setadded2("addedinactive")
    }

    // added to your cart product 3

    const [added3, setadded3] = useState("addedinactive")

    const cartbox3active = () => {
        setadded3(".addedactive")
    }

    const cartbox3inactive = () => {
        setadded3("addedinactive")
    }

    // added to your cart product 4

    const [added4, setadded4] = useState("addedinactive")

    const cartbox4active = () => {
        setadded4(".addedactive")
    }

    const cartbox4inactive = () => {
        setadded4("addedinactive")
    }

    // added to your cart product 5

    const [added5, setadded5] = useState("addedinactive")

    const cartbox5active = () => {
        setadded5(".addedactive")
    }

    const cartbox5inactive = () => {
        setadded5("addedinactive")
    }
    // added to your cart product 6

    const [added6, setadded6] = useState("addedinactive")

    const cartbox6active = () => {
        setadded6(".addedactive")
    }

    const cartbox6inactive = () => {
        setadded6("addedinactive")
    }
    // added to your cart product 7

    const [added7, setadded7] = useState("addedinactive")

    const cartbox7active = () => {
        setadded7(".addedactive")
    }

    const cartbox7inactive = () => {
        setadded7("addedinactive")
    }
    // added to your cart product 8

    const [added8, setadded8] = useState("addedinactive")

    const cartbox8active = () => {
        setadded8(".addedactive")
    }

    const cartbox8inactive = () => {
        setadded8("addedinactive")
    }
    // added to your cart product 9

    const [added9, setadded9] = useState("addedinactive")

    const cartbox9active = () => {
        setadded9(".addedactive")
    }

    const cartbox9inactive = () => {
        setadded9("addedinactive")
    }
    // added to your cart product 10

    const [added10, setadded10] = useState("addedinactive")

    const cartbox10active = () => {
        setadded10(".addedactive")
    }

    const cartbox10inactive = () => {
        setadded10("addedinactive")
    }
    // added to your cart product 11

    const [added11, setadded11] = useState("addedinactive")

    const cartbox11active = () => {
        setadded11(".addedactive")
    }

    const cartbox11inactive = () => {
        setadded11("addedinactive")
    }
    // added to your cart product 12

    const [added12, setadded12] = useState("addedinactive")

    const cartbox12active = () => {
        setadded12(".addedactive")
    }

    const cartbox12inactive = () => {
        setadded12("addedinactive")
    }
    // added to your cart product 13

    const [added13, setadded13] = useState("addedinactive")

    const cartbox13active = () => {
        setadded13(".addedactive")
    }

    const cartbox13inactive = () => {
        setadded13("addedinactive")
    }
    // added to your cart product 14

    const [added14, setadded14] = useState("addedinactive")

    const cartbox14active = () => {
        setadded14(".addedactive")
    }

    const cartbox14inactive = () => {
        setadded14("addedinactive")
    }
    // added to your cart product 15

    const [added15, setadded15] = useState("addedinactive")

    const cartbox15active = () => {
        setadded15(".addedactive")
    }

    const cartbox15inactive = () => {
        setadded15("addedinactive")
    }






    return (
        <main className='w-screen h-auto'>
            {/* home > TRAINING CLOTHES section from here */}
            <div className='w-full px-[50px] py-[15px] 2k:px-[250px]'>
                <div className='w-full h-[24px] bg-white flex justify-start items-center gap-x-[9px] text-[13px] font-[500] '>
                    <Link to={"/"} className='hover:text-red-500 duration-200 leading-[24px]' >Home</Link>
                    <span className='text-[13px]  pt-[4px]'><FontAwesomeIcon icon={faAngleRight} /></span>
                    <p className='font-[400]'>Training Clothes</p>
                </div>
            </div>
            {/* home > Shop section ends here */}

            {/* Shop heading  */}
            <div className='px-[50px] 2k:px-[250px]'>
                <h1 className='text-[40px] leading-[40px] font-oswald font-[600] text-start mb-[20px]'>TRAINING CLOTHES</h1>
            </div>

            {/* product section from here */}

            {/* section container */}
            <div className='w-full h-auto px-[50px] pt-[15px] 2k:px-[250px]  mb-[80px]'>
                <div className='w-full h-full bg-white flex flex-col'>
                    {/* filter tab  */}
                    <div className='w-full h-[44px] bg-white flex justify-between mb-[30px]'>
                        {/* left filter */}
                        <div className='w-[716.862px] h-[44px] bg-white flex gap-x-[30px] items-center'>
                            <span className='text-[16px] leading-[24px] font-[400]'>Filter</span>
                            {/* category */}
                            <div className='categorykey flex flex-col justify-center items-center relative   cursor-pointer   '>
                                <div className='tab flex justify-center items-center gap-x-[3px]'>
                                    <h3 className='text-[16px] leading-[34px] font-[600]'>Categories</h3>
                                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px] ' />
                                    <span className='underline absolute bottom-[4px] w-[1%] opacity-0  bg-black h-[0.5px] transition-all duration-300 ease-out '></span>
                                    {/* categorydown */}
                                    <div className=' categorydown invisible opacity-0 absolute left-[-17px] top-[40px] w-auto  bg-white border-[1px] border-black z-[10] pt-[5px] px-[20px] pb-[20px] cursor-default transition-all duration-300 '>
                                        <div className='w-full h-full flex flex-col gap-y-[15px]'>
                                            {/* list 1 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                <h4 className='text-[16px] leading-[20px] font-[500]'>Accessories</h4>
                                            </div>
                                            {/* list 2 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                <h4 className='text-[16px] leading-[20px] font-[500] text-nowrap'>Sports & Outdoors</h4>
                                            </div>
                                            {/* list 3 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                <h4 className='text-[16px] leading-[20px] font-[500]'>Training Clothes</h4>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* category ends here */}

                            {/* color */}
                            <div className='colorkey flex flex-col justify-center items-center relative   cursor-pointer   '>
                                <div className=' tab flex justify-center items-center gap-x-[3px]'>
                                    <h3 className='text-[16px] leading-[34px] font-[600]'>Color</h3>
                                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px]' />
                                    <span className='underline absolute bottom-[4px] w-[1%] opacity-0  bg-black h-[0.5px] transition-all duration-300 ease-out '></span>
                                    {/* colordown */}
                                    <div className=' colordown invisible opacity-0 absolute left-[-17px] top-[40px] w-auto  bg-white border-[1px] border-black z-[10] pt-[5px] px-[20px] pb-[20px] cursor-default transition-all duration-300 '>
                                        <div className='w-full h-full flex flex-col gap-y-[6px]'>
                                            {/* color section 1 from here on*/}
                                            <div className='w-full h-auto flex gap-x-[6px]'>
                                                {/* black */}
                                                <div className='colorbox px-[15px] flex justify-center items-center cursor-pointer gap-x-[10px] border-[1px] border-gray-200 hover:bg-white hover:text-red-500 hover:border-black duration-300 bg-gray-200 ease-out'>
                                                    <div className='w-[15px] h-[15px] flex justify-center items-center '>
                                                        <span className='color w-[10.5px] h-[10.5px] rounded-full bg-black duration-300 ease-out'></span>
                                                    </div>
                                                    <span className='leading-[34px] text-[14px] font-[400]'>Black</span>
                                                </div>

                                                {/* blue */}
                                                <div className='colorbox px-[15px] flex justify-center items-center cursor-pointer gap-x-[10px] border-[1px] border-gray-200 hover:bg-white hover:text-red-500 hover:border-black duration-300 bg-gray-200 ease-out'>
                                                    <div className='w-[15px] h-[15px] flex justify-center items-center '>
                                                        <span className='color w-[10.5px] h-[10.5px] rounded-full bg-[#4684bd] duration-300 ease-out'></span>
                                                    </div>
                                                    <span className='leading-[34px] text-[14px] font-[400]'>Blue</span>
                                                </div>

                                                {/* brown */}
                                                <div className='colorbox px-[15px] flex justify-center items-center cursor-pointer gap-x-[10px] border-[1px] border-gray-200 hover:bg-white hover:text-red-500 hover:border-black duration-300 bg-gray-200 ease-out'>
                                                    <div className='w-[15px] h-[15px] flex justify-center items-center '>
                                                        <span className='color w-[10.5px] h-[10.5px] rounded-full bg-[#be926b] duration-300 ease-out'></span>
                                                    </div>
                                                    <span className='leading-[34px] text-[14px] font-[400]'>Brown</span>
                                                </div>

                                                {/* gray */}
                                                <div className='colorbox px-[15px] flex justify-center items-center cursor-pointer gap-x-[10px] border-[1px] border-gray-200 hover:bg-white hover:text-red-500 hover:border-black duration-300 bg-gray-200 ease-out'>
                                                    <div className='w-[15px] h-[15px] flex justify-center items-center '>
                                                        <span className='color w-[12px] h-[12px] rounded-full bg-[#999999] duration-300 ease-out'></span>
                                                    </div>
                                                    <span className='leading-[34px] text-[14px] font-[400]'>Gray</span>
                                                </div>

                                            </div>
                                            {/* color section 2 from here on */}
                                            <div className='w-full h-auto flex gap-x-[6px]'>
                                                {/* green */}
                                                <div className='colorbox px-[15px] flex justify-center items-center cursor-pointer gap-x-[10px] border-[1px] border-gray-200 hover:bg-white hover:text-red-500 hover:border-black duration-300 bg-gray-200 ease-out'>
                                                    <div className='w-[15px] h-[15px] flex justify-center items-center '>
                                                        <span className='color w-[10.5px] h-[10.5px] rounded-full bg-[#a7dbc7] duration-300 ease-out'></span>
                                                    </div>
                                                    <span className='leading-[34px] text-[14px] font-[400]'>Green</span>
                                                </div>

                                                {/* orange */}
                                                <div className='colorbox px-[15px] flex justify-center items-center cursor-pointer gap-x-[10px] border-[1px] border-gray-200 hover:bg-white hover:text-red-500 hover:border-black duration-300 bg-gray-200 ease-out'>
                                                    <div className='w-[15px] h-[15px] flex justify-center items-center '>
                                                        <span className='color w-[10.5px] h-[10.5px] rounded-full bg-[#f09000] duration-300 ease-out'></span>
                                                    </div>
                                                    <span className='leading-[34px] text-[14px] font-[400]'>Orange</span>
                                                </div>

                                                {/* pink */}
                                                <div className='colorbox px-[15px] flex justify-center items-center cursor-pointer gap-x-[10px] border-[1px] border-gray-200 hover:bg-white hover:text-red-500 hover:border-black duration-300 bg-gray-200 ease-out'>
                                                    <div className='w-[15px] h-[15px] flex justify-center items-center '>
                                                        <span className='color w-[10.5px] h-[10.5px] rounded-full bg-[#e7bdc2] duration-300 ease-out'></span>
                                                    </div>
                                                    <span className='leading-[34px] text-[14px] font-[400]'>Pink</span>
                                                </div>

                                                {/* red */}
                                                <div className='colorbox px-[15px] flex justify-center items-center cursor-pointer gap-x-[10px] border-[1px] border-gray-200 hover:bg-white hover:text-red-500 hover:border-black duration-300 bg-gray-200 ease-out'>
                                                    <div className='w-[15px] h-[15px] flex justify-center items-center '>
                                                        <span className='color w-[10.5px] h-[10.5px] rounded-full bg-[#c91313] duration-300 ease-out'></span>
                                                    </div>
                                                    <span className='leading-[34px] text-[14px] font-[400]'>Red</span>
                                                </div>
                                            </div>
                                            {/* color section 3 from here */}
                                            <div className='w-full h-auto flex gap-x-[6px]'>
                                                {/* white */}
                                                <div className='colorbox px-[15px] flex justify-center items-center cursor-pointer gap-x-[10px] border-[1px] border-gray-200 hover:bg-white hover:text-red-500 hover:border-black duration-300 bg-gray-200 ease-out'>
                                                    <div className='w-[15px] h-[15px] flex justify-center items-center '>
                                                        <span className='color w-[10.5px] h-[10.5px] rounded-full bg-white duration-300 ease-out'></span>
                                                    </div>
                                                    <span className='leading-[34px] text-[14px] font-[400]'>Blue</span>
                                                </div>

                                                {/* yellow */}
                                                <div className='colorbox px-[15px] flex justify-center items-center cursor-pointer gap-x-[10px] border-[1px] border-gray-200  hover:text-red-500 hover:border-black duration-300 bg-gray-200 ease-out'>
                                                    <div className='w-[15px] h-[15px] flex justify-center items-center '>
                                                        <span className='color w-[10.5px] h-[10.5px] rounded-full bg-yellow-500 duration-300 ease-out'></span>
                                                    </div>
                                                    <span className='leading-[34px] text-[14px] font-[400]'>Blue</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* color ends here */}

                            {/* size */}
                            <div className='sizekey flex flex-col justify-center items-center relative   cursor-pointer   '>
                                <div className='tab flex justify-center items-center gap-x-[3px]'>
                                    <h3 className='text-[16px] leading-[34px] font-[600]'>Size</h3>
                                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px]' />
                                    <span className='underline absolute bottom-[4px] w-[1%] opacity-0  bg-black h-[0.5px] transition-all duration-300 ease-out '></span>
                                    {/* sizedown */}
                                    <div className=' sizedown invisible opacity-0 absolute left-[-17px] top-[40px] w-auto  bg-white border-[1px] border-black z-[10] pt-[5px] px-[20px] pb-[20px] cursor-default transition-all duration-300 '>
                                        <div className='w-full h-full flex flex-col gap-y-[15px]'>
                                            {/* list 1 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400]'>XS</h4>
                                                <span className=' text-end bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>6</p></span>
                                                <span></span>
                                            </div>
                                            {/* list 2 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>S</h4>
                                                <span className=' text-end bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>21</p></span>
                                                <span></span>
                                            </div>
                                            {/* list 3 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>M</h4>
                                                <span className=' text-end bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>38</p></span>
                                                <span></span>
                                            </div>
                                            {/* list 4 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>L</h4>
                                                <span className=' text-end bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>37</p></span>
                                                <span></span>
                                            </div>
                                            {/* list 5 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>XL</h4>
                                                <span className=' text-end bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>29</p></span>
                                                <span></span>
                                            </div>
                                            {/* list 6 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>XXL</h4>
                                                <span className=' text-end bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>19</p></span>
                                                <span></span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* size ends here */}

                            {/* fabric */}
                            <div className='fabrickey flex flex-col justify-center items-center relative   cursor-pointer   '>
                                <div className=' tab flex justify-center items-center gap-x-[3px]'>
                                    <h3 className='text-[16px] leading-[34px] font-[600]'>Fabric</h3>
                                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px]' />
                                    <span className='underline absolute bottom-[4px] w-[1%] opacity-0  bg-black h-[0.5px] transition-all duration-300 ease-out '></span>
                                    {/* fabricdown */}
                                    <div className=' fabricdown invisible opacity-0 absolute left-[-17px] top-[40px] w-auto  bg-white border-[1px] border-black z-[10] pt-[5px] px-[20px] pb-[20px] cursor-default transition-all duration-300 '>
                                        <div className='w-full h-full flex flex-col gap-y-[15px]'>
                                            {/* list 1 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400]'>Cashmere</h4>
                                                <span className=' text-end bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>14</p></span>
                                                <span></span>
                                            </div>
                                            {/* list 2 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Corduroy</h4>
                                                <span className=' text-end bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>7</p></span>
                                                <span></span>
                                            </div>
                                            {/* list 3 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Cotton</h4>
                                                <span className=' text-end bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>29</p></span>
                                                <span></span>
                                            </div>
                                            {/* list 4 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Denim</h4>
                                                <span className=' text-end bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>13</p></span>
                                                <span></span>
                                            </div>
                                            {/* list 5 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Lyocell</h4>
                                                <span className=' text-end bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>19</p></span>
                                                <span></span>
                                            </div>
                                            {/* list 6 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Polyester</h4>
                                                <span className=' text-end bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>28</p></span>
                                                <span></span>
                                            </div>
                                            {/* list 7 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Christian Silk</h4>
                                                <span className=' text-end bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>21</p></span>
                                                <span></span>
                                            </div>
                                            {/* list 8 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Tracksuit</h4>
                                                <span className=' text-end bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>17</p></span>
                                                <span></span>
                                            </div>
                                            {/* list 9 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Viscose</h4>
                                                <span className=' text-end bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>28</p></span>
                                                <span></span>
                                            </div>
                                            {/* list 10 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Wool</h4>
                                                <span className=' text-end bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>8</p></span>
                                                <span></span>
                                            </div>
                                            {/* list 11 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Others</h4>
                                                <span className=' text-end bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>23</p></span>
                                                <span></span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* fabricdown ends here */}
                            </div>
                            {/* fabric ends here */}

                            {/* brands */}
                            <div className='brandkey flex flex-col justify-center items-center relative   cursor-pointer   '>
                                <div className='tab flex justify-center items-center gap-x-[3px]'>
                                    <h3 className='text-[16px] leading-[34px] font-[600]'>Brands</h3>
                                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px]' />
                                    <span className='underline absolute bottom-[4px] w-[1%] opacity-0  bg-black h-[0.5px] transition-all duration-300 ease-out '></span>
                                    {/* branddown */}
                                    <div className=' branddown invisible opacity-0 absolute left-[-17px] top-[40px] w-auto  bg-white border-[1px] border-black z-[10] pt-[5px] px-[20px] pb-[20px] cursor-default transition-all duration-300 '>
                                        <div className='w-full h-full flex flex-col gap-y-[15px]'>
                                            {/* list 1 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400]'>Burberry</h4>
                                            </div>
                                            {/* list 2 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>C&A</h4>
                                            </div>
                                            {/* list 3 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Cartier</h4>
                                            </div>
                                            {/* list 4 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Chanel</h4>
                                            </div>
                                            {/* list 5 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Chopard</h4>
                                            </div>
                                            {/* list 6 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Chow Tai Fook</h4>
                                            </div>
                                            {/* list 7 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Christian Louboutin</h4>
                                            </div>
                                            {/* list 8 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Ecco</h4>
                                            </div>
                                            {/* list 9 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Supersport</h4>
                                            </div>
                                            {/* list 10 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Topshop</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* branddown ends here */}
                            </div>
                            {/* brands ends here */}

                            {/* price */}
                            <div className='pricekey flex flex-col justify-center items-center relative   cursor-pointer   '>
                                <div className='tab flex justify-center items-center gap-x-[3px]'>
                                    <h3 className='text-[16px] leading-[34px] font-[600]'>Price</h3>
                                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px] ' />
                                    <span className='underline absolute bottom-[4px] w-[1%] opacity-0  bg-black h-[0.5px] transition-all duration-300 ease-out '></span>
                                    {/* pricedown */}
                                    <div className=' pricedown invisible opacity-0 absolute left-[-17px] top-[40px] w-auto  bg-white border-[1px] border-black z-[10] pt-[5px] px-[20px] pb-[20px] cursor-default transition-all duration-300 '>
                                        <div className='w-full h-full flex flex-col gap-y-[15px]'>
                                            {/* list 1 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400]'>All</h4>
                                            </div>
                                            {/* list 2 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>$0 - $199</h4>
                                            </div>
                                            {/* list 3 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>$200 - $300</h4>
                                            </div>
                                            {/* list 4 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>$400 - $599</h4>
                                            </div>
                                            {/* list 5 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>$600 - $799</h4>
                                            </div>
                                            {/* list 6 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Over $799</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* pricedown ends here */}
                            </div>
                            {/* price ends here */}

                            {/* ratings */}
                            <div className='ratingkey flex flex-col justify-center items-center relative   cursor-pointer   '>
                                <div className='tab flex justify-center items-center gap-x-[3px] '>
                                    <h3 className='text-[16px] leading-[34px] font-[600]'>Ratings</h3>
                                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px]' />
                                    <span className='underline absolute bottom-[4px] w-[1%] opacity-0  bg-black h-[0.5px] transition-all duration-300 ease-out '></span>
                                    {/* ratingdropdown */}
                                    <div className=' ratingdown invisible opacity-0 absolute left-[-17px] top-[40px] w-[200px]  bg-white border-[1px] border-black z-[10] pt-[5px] px-[20px] pb-[20px] cursor-default transition-all duration-300 '>
                                        <div className='w-full h-full flex flex-col gap-y-[15px]'>
                                            {/* list 1 */}
                                            <div className='list w-[158.4px] h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                {/* starbox */}
                                                <div className='flex h-full items-center gap-x-[5px]'>
                                                    <FontAwesomeIcon icon={faStar} className='text-[15px] text-black' />
                                                    <FontAwesomeIcon icon={faStar} className='text-[15px] text-black' />
                                                    <FontAwesomeIcon icon={faStar} className='text-[15px] text-black' />
                                                    <FontAwesomeIcon icon={faStar} className='text-[15px] text-black' />
                                                    <FontAwesomeIcon icon={faStar} className='text-[15px] text-black' />
                                                </div>
                                                {/* counter */}
                                                <span className=' bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>8</p></span>
                                            </div>
                                            {/* list 2 */}
                                            <div className='list w-[158.4px] h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                {/* starbox */}
                                                <div className='flex h-full items-center gap-x-[5px]'>
                                                    <FontAwesomeIcon icon={faStar} className='text-[15px] text-black' />
                                                    <FontAwesomeIcon icon={faStar} className='text-[15px] text-black' />
                                                    <FontAwesomeIcon icon={faStar} className='text-[15px] text-black' />
                                                    <FontAwesomeIcon icon={faStar} className='text-[15px] text-black' />
                                                </div>
                                                {/* counter */}
                                                <span className=' bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>10</p></span>
                                            </div>
                                            {/* list 3 */}
                                            <div className='list w-[158.4px] h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                {/* starbox */}
                                                <div className='flex h-full items-center gap-x-[5px]'>
                                                    <FontAwesomeIcon icon={faStar} className='text-[15px] text-black' />
                                                    <FontAwesomeIcon icon={faStar} className='text-[15px] text-black' />
                                                    <FontAwesomeIcon icon={faStar} className='text-[15px] text-black' />
                                                </div>
                                                {/* counter */}
                                                <span className=' bg-black px-[4px] flex justify-center items-center'><p className='counter text-white text-[11px]'>1</p></span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* ratingdropdown ends here */}
                            </div>
                            {/* ratings ends here */}
                        </div>
                        {/* right filter */}
                        <div className="w-[298.887px] h-full white flex items-center justify-between gap-x-[10px]">
                            {/* sort by laeates  */}
                            <div className='sortkey  w-[183px] h-[32px] bg-white border-[1px] border-black  flex justify-center items-center gap-x-[10px] cursor-pointer relative'>
                                <p className='text-[13px] font-normal'>Sort by</p>
                                <div className='flex gap-x-[5px] justify-center items-center'>
                                    <h3 className='text-[13px] font-[600] leading-[32px]'>Sort by lateast</h3>
                                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[2px] ' />
                                    <span className='underline absolute bottom-[4px] w-[1%] opacity-0  bg-black h-[0.5px] transition-all duration-300 ease-out '></span>
                                    {/* category sorddown */}
                                    <div className=' sortdown invisible opacity-0 absolute right-0 top-[40px] w-auto  bg-white border-[1px] border-black z-[10] pt-[5px] px-[20px] pb-[20px] cursor-default transition-all duration-300 '>
                                        <div className='w-full h-full flex flex-col gap-y-[15px]'>
                                            {/* list 1 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400]'>Sort by popularity</h4>
                                            </div>
                                            {/* list 2 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Sort by average rating</h4>
                                            </div>
                                            {/* list 3 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Sort by leatest</h4>
                                            </div>
                                            {/* list 4 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Sort by price: low to high</h4>
                                            </div>
                                            {/* list 5 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Sort by price: high to low</h4>
                                            </div>
                                            {/* list 6 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap'>Sort by best selling</h4>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* sort by no. */}
                            <div className='sortkey w-auto px-[15px] h-[32px] bg-white border-[1px] border-black  flex justify-center items-center gap-x-[10px] cursor-pointer relative'>
                                <p className='text-[13px] font-normal text-nowrap'>Sort by</p>
                                <div className='flex gap-x-[5px] justify-center items-center'>
                                    <h3 className='text-[13px] font-[600] leading-[32px]'>20</h3>
                                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[2px] ' />
                                    <span className='underline absolute bottom-[4px] w-[1%] opacity-0  bg-black h-[0.5px] transition-all duration-300 ease-out '></span>
                                    {/* number sorddown */}
                                    <div className=' sortdown invisible opacity-0 absolute right-0 top-[40px] w-auto  bg-white border-[1px] border-black z-[10] pt-[5px] px-[20px] pb-[20px] cursor-default transition-all duration-300 '>
                                        <div className='w-full h-full flex flex-col gap-y-[15px]'>
                                            {/* list 1 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] hover:text-red-500 duration-200'>20</h4>
                                            </div>
                                            {/* list 2 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap hover:text-red-500 duration-200'>40</h4>
                                            </div>
                                            {/* list 3 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap hover:text-red-500 duration-200'>60</h4>
                                            </div>
                                            {/* list 4 */}
                                            <div className='list w-auto h-[20px] bg-white flex gap-x-[10px] items-center cursor-pointer '>
                                                {/* checkbox */}
                                                <div className='checkbox w-[20px] h-[20px] border-[1px] border-black bg-white flex justify-center items-center duration-100'>
                                                    <FontAwesomeIcon icon={faCheck} className='check invisible opacity-0 text-[14px] ' />
                                                </div>
                                                <h4 className='text-[13px] leading-[20px] font-[400] text-nowrap hover:text-red-500 duration-200'>80</h4>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                    {/* filter tab ends here */}

                    {/* product section from here */}

                    {/* by leatest product section starts from here */}
                    <div className=''>

                        {/* section 1  from here */}

                        <div className=' flex flex-col gap-y-[15px] 2xl:gap-y-[0px] phone:flex-row 2xl:flex-row  items-center z-0   w-full h-auto 2xl:h-[411.250px] phone:overflow-y-hidden  phone:overflow-x-scroll 2xl:overflow-x-hidden bg-white phone:gap-x-[15px] mb-[40px]  2xl:gap-x-[20px] relative productsection transition-all duration-500  '>

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
                                    <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out' onClick={cartbox1active}>
                                        <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                                    </div>

                                    <Link to={"/gym-accessory/color-sports-tank-top"}>
                                        <img src={p1} alt='Product 1' className='2xl:w-full' />

                                    </Link>

                                </div>
                                {/* product price */}
                                <div className='w-[268px] 2xl:w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] 2xl:gap-y-[0px] '>
                                    <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Color sports tank top</a>
                                    <p>$90.00</p>
                                </div>
                            </div>
                            {/* product 2  */}
                            <div className='w-[80%] 2xl:w-[20%] h-full bg-white product flex flex-col items-center 2xl:block'>
                                {/* product image 2 */}
                                <div className='w-[268px] h-[357.25px] bg-white relative cursor-pointer  overflow-hidden flex justify-center'>
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
                                                <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2xp] hover:bg-black hover:text-white duration-300 cursor-pointer' onClick={cartbox2active}>Green</span>
                                                <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer' onClick={cartbox2active}>Brown</span>
                                                <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer' onClick={cartbox2active}>Gray</span>
                                                <span className='bg-white border-[0.5px] border-gray-200 px-[10px] py-[2px] hover:bg-black hover:text-white duration-300 cursor-pointer' onClick={cartbox2active}>Pink</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Link to={"/gym-accessory/flamingo-print-tank-top"}>
                                        <img src={p2} alt='Product 2' className='w-full' />
                                    </Link>
                                </div>
                                {/* product price */}
                                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] 2xl:gap-y-[0px] '>
                                    <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Flamingo print tank top</a>
                                    <p>$79.00 &#160; - &#160; $110.00</p>
                                </div>
                            </div>
                            {/* product 3  */}
                            <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product flex flex-col items-center 2xl:block'>
                                {/* product image 3*/}
                                <div className='w-[268px] h-[357.25px] bg-white relative cursor-pointer  overflow-hidden flex justify-center'>
                                    <span className=' absolute top-[10px] left-[10px] px-[10px] text-[12px] font-[400] text-white bg-red-500'>-16%</span>
                                    <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                                        <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                    </div>

                                    {/* add to cart from here */}
                                    <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out' onClick={cartbox3active}>
                                        <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                                    </div>
                                    <Link to={"/gym-accessory/leopard-print-sports-shorts"}>
                                        <img src={p3} alt='Product 3' className='w-full' />
                                    </Link>
                                </div>
                                {/* product price */}
                                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] 2xl:gap-y-[0px]'>
                                    <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Leopard print sports shorts</a>
                                    <p className='text-red-500'>$40.00 &#160;  <span className='text-[#808080] line-through'> $70.00</span></p>
                                </div>
                            </div>
                            {/* product 4  */}
                            <div className='w-[80%] 2xl:w-[20%] h-full bg-white product flex flex-col items-center 2xl:block'>
                                {/* product image 4*/}
                                <div className='w-[268px] h-[357.25px]  cursor-pointer relative  overflow-hidden flex justify-center'>
                                    <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                                        <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                    </div>

                                    {/* add to cart from here */}
                                    <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out' onClick={cartbox4active}>
                                        <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                                    </div>
                                    <Link to={"/gym-accessory/high-crossback-sports-bra"}>
                                        <img src={p4} alt='Product 4' className='w-full' />
                                    </Link>

                                </div>
                                {/* product price */}
                                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] 2xl:gap-y-[0px] '>
                                    <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>High crossback sports bra</a>
                                    <p>$90.00</p>
                                </div>
                            </div>
                            {/* product 5  */}
                            <div className='w-80%] 2xl:w-[20%] h-full bg-white product flex flex-col items-center 2xl:block'>
                                {/* product image 5*/}
                                <div className='w-[268px] h-[357.25px]  cursor-pointer relative  overflow-hidden flex justify-center'>
                                    <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                                        <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                    </div>

                                    {/* add to cart from here */}
                                    <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 hover:shadow-red-500 duration-[400ms] addtocart ease-out shadow-md ' onClick={cartbox5active}>
                                        <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                                    </div>
                                    <Link to={"/gym-accessory/slim-fit-tshirt"}>
                                        <img src={p5} alt='Product 5' className='w-full' />
                                    </Link>
                                </div>
                                {/* product price */}
                                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] 2xl:gap-y-[0px] '>
                                    <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Slim fit T-shirt</a>
                                    <p>$80.00</p>
                                </div>
                            </div>
                        </div>
                        {/* section 1 ends  here */}

                        {/* section 2 starts from here*/}

                        <div className='flex flex-col gap-y-[15px] 2xl:gap-y-[0px] 2xl:flex-row mb-[40px]  items-center z-0   w-full h-auto 2xl:h-[411.250px] bg-white   2xl:gap-x-[20px] relative productsection transition-all duration-500 '>

                            {/* product 1  */}
                            <div className='w-[80%] 2xl:w-[20%] h-full bg-white product'>
                                {/* product image 1*/}
                                <div className='w-full h-[357.25px]  cursor-pointer relative  overflow-hidden flex justify-center '>

                                    {/* stats from here */}
                                    <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                                        <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                    </div>

                                    {/* add to cart from here */}
                                    <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out' onClick={cartbox6active}>
                                        <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                                    </div>
                                    <Link to={"/gym-accessory/solid-crop-slim-sports-tee"}>
                                        <img src={p6} alt='Product 1' className='w-full' />
                                    </Link>
                                </div>
                                {/* product price */}
                                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                                    <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Solid crop slim sports tee</a>
                                    <p>$60.00</p>
                                </div>
                            </div>
                            {/* product 2  */}
                            <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                                {/* product image 2 */}
                                <div className='w-full h-[357.25px]  relative cursor-pointer  overflow-hidden flex justify-center'>

                                    <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                                        <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                    </div>

                                    {/* add to cart from here */}
                                    <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out' onClick={cartbox7active}>
                                        <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                                    </div>
                                    <Link to={"/gym-accessory/contrast-binding-layered-dress"}>
                                        <img src={p7} alt='Product 2' className='w-full' />
                                    </Link>

                                </div>
                                {/* product price */}
                                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                                    <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Contrast binding layered dress</a>
                                    <p>$80.88</p>
                                </div>
                            </div>
                            {/* product 3  */}
                            <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                                {/* product image 3*/}
                                <div className='w-full h-[357.25px]  relative cursor-pointer  overflow-hidden flex justify-center'>

                                    <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                                        <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                    </div>
                                    {/* add to cart from here */}
                                    <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out' onClick={cartbox8active}>
                                        <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                                    </div>
                                    <Link to={"/gym-accessory/topshop-training-tshirt"}>
                                        <img src={p8} alt='Product 3' className='w-full' />
                                    </Link>
                                </div>
                                {/* product price */}
                                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                                    <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Topshop training t-shirt</a>
                                    <p className=''>$60.00</p>
                                </div>
                            </div>
                            {/* product 4  */}
                            <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                                {/* product image 4*/}
                                <div className='w-full h-[357.25px]  cursor-pointer relative  overflow-hidden flex justify-center'>
                                    <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                                        <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                    </div>

                                    {/* add to cart from here */}
                                    <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out' onClick={cartbox9active}>
                                        <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                                    </div>
                                    <Link to={"/gym-accessory/ombre-sports-tank-top"}>
                                        <img src={p9} alt='Product 4' className='w-full' />
                                    </Link>

                                </div>
                                {/* product price */}
                                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                                    <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Ombre sports tank top</a>
                                    <p>$70.00</p>
                                </div>
                            </div>
                            {/* product 5  */}
                            <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                                {/* product image 5*/}
                                <div className='w-full h-[357.25px]  cursor-pointer relative  overflow-hidden flex justify-center'>
                                    <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                                        <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                    </div>

                                    {/* add to cart from here */}
                                    <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out' onClick={cartbox10active}>
                                        <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                                    </div>


                                    <span className=' absolute top-[10px] left-[10px] px-[10px] text-[12px] font-[400] text-white bg-red-500'>-22%</span>
                                    <Link to={"/gym-accessory/cropped-tennis-skirt"}>
                                        <img src={p10} alt='Product 5' className='w-full' />
                                    </Link>
                                </div>
                                {/* product price */}
                                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                                    <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Cropped tennis skirt</a>
                                    <p>$109.00.00</p>
                                </div>
                            </div>
                        </div>

                        {/* section 2 ends here */}

                        {/* section 3 starts from here */}

                        <div className=' flex flex-col gap-y-[15px] 2xl:gap-y-[0px] 2xl:flex-row mb-[40px] items-center z-0   w-full h-auto 2xl:h-[411.250px] bg-white   2xl:gap-x-[20px] relative productsection transition-all duration-500 '>

                            {/* product 1  */}
                            <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                                {/* product image 1*/}
                                <div className='w-full h-[357.25px]  cursor-pointer relative  overflow-hidden flex justify-center '>

                                    {/* stats from here */}
                                    <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                                        <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                    </div>

                                    {/* add to cart from here */}
                                    <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out' onClick={cartbox11active}>
                                        <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                                    </div>
                                    <span className=' absolute top-[10px] left-[10px] px-[10px] text-[12px] font-[400] text-white bg-red-500'>-28%</span>
                                    <Link to={"/gym-accessory/solid-pocket-sport-shorts"}>
                                        <img src={p11} alt='Product 1' className='w-full' />
                                    </Link>
                                </div>
                                {/* product price */}
                                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                                    <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Solid pocket sport shorts</a>
                                    <p>$70.00 &#160;-&#160; $110.00</p>
                                </div>
                            </div>
                            {/* product 2  */}
                            <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                                {/* product image 2 */}
                                <div className='w-full h-[357.25px]  relative cursor-pointer  overflow-hidden flex justify-center'>

                                    <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                                        <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                    </div>

                                    {/* add to cart from here */}
                                    <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out' onClick={cartbox12active}>
                                        <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                                    </div>
                                    <span className=' absolute top-[10px] left-[10px] px-[10px] text-[12px] font-[400] text-white bg-red-500'>-16%</span>

                                    <Link to={"/gym-accessory/high-waisted-leggings"}>
                                        <img src={p12} alt='Product 1' className='w-full' />
                                    </Link>
                                </div>
                                {/* product price */}
                                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                                    <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>High waisted leggings</a>
                                    <p className='text-red-500'>$59.00 &#160;  <span className='text-[#808080] line-through'> $70.00</span></p>
                                </div>
                            </div>
                            {/* product 3  */}
                            <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                                {/* product image 3*/}
                                <div className='w-full h-[357.25px]  relative cursor-pointer  overflow-hidden flex justify-center'>

                                    <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                                        <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                    </div>

                                    {/* add to cart from here */}
                                    <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out' onClick={cartbox13active}>
                                        <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                                    </div>
                                    <span className=' absolute top-[10px] left-[10px] px-[10px] text-[12px] font-[400] text-white bg-red-500'>-14%</span>

                                    <Link to={"/gym-accessory/quick-dry-tshirts"}>
                                        <img src={p13} alt='Product 1' className='w-full' />
                                    </Link>
                                </div>
                                {/* product price */}
                                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                                    <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Quick dry T-shirts</a>
                                    <p className='text-red-500'>$69.00 &#160;  <span className='text-[#808080] line-through'> $80.00</span></p>
                                </div>
                            </div>
                            {/* product 4  */}
                            <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                                {/* product image 4*/}
                                <div className='w-full h-[357.25px]  cursor-pointer relative  overflow-hidden flex justify-center'>
                                    <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                                        <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                    </div>

                                    {/* add to cart from here */}
                                    <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out' onClick={cartbox4active}>
                                        <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                                    </div>
                                    <span className=' absolute top-[10px] left-[10px] px-[10px] text-[12px] font-[400] text-white bg-red-500'>-44%</span>
                                    <span className=' absolute top-[28px] left-[10px] px-[10px] py-[1px] text-[12px] font-[400] text-white bg-green-800'>Feature</span>

                                    <Link to={"/gym-accessory/Athletic-tank-top"}>
                                        <img src={p14} alt='Product 1' className='w-full' />
                                    </Link>
                                </div>
                                {/* product price */}
                                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                                    <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Athletic tank top</a>
                                    <p className='text-red-500'>$39.00 &#160;  <span className='text-[#808080] line-through'> $70.00</span></p>
                                </div>
                            </div>
                            {/* product 5  */}
                            <div className='w-[80%]] 2xl:w-[20%] h-full bg-white product'>
                                {/* product image 5*/}
                                <div className='w-full h-[357.25px]  cursor-pointer relative  overflow-hidden flex justify-center'>
                                    <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                                        <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                        <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                    </div>

                                    {/* add to cart from here */}
                                    <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 shadow-md hover:shadow-red-500 duration-[400ms] addtocart ease-out' onClick={cartbox4active}>
                                        <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                                    </div>

                                    <span className=' absolute top-[10px] left-[10px] px-[10px] text-[12px] font-[400] text-white bg-red-500'>-29%</span>

                                    <Link to={"/gym-accessory/knit-sports-shorts-set"}>
                                        <img src={p15} alt='Product 1' className='w-full' />
                                    </Link>
                                </div>
                                {/* product price */}
                                <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] '>
                                    <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Knit sports shorts set</a>
                                    <p className='text-red-500'>$99.00 &#160;  <span className='text-[#808080] line-through'> $140.00</span></p>
                                </div>
                            </div>





                        </div>
                        {/* section 3 ends here */}
                    </div>
                    {/* product section ends here */}

                    {/* fashion description */}
                    <div className='w-full h-[140px] bg-white mt-[80px] mb-[0px] flex flex-col gap-y-[25px]'>
                        <h4 className='text-[24px] leading-[24px] font-oswald font-[600] text-start'>
                            FASHION ONLINE STORE IS VERY IMPORTANT IN THIS TIME IF YOU ARE TRYING TO SELL CLOTHES. WITH THE NEW FASHION TRENDS AND ALL THE AVAILABLE SHOPPING OPTIONS YOU CAN ORDER YOUR CLOTHES ONLINE AND MAKE MONEY WITHOUT EVEN LEAVING YOUR HOUSE.
                        </h4>
                        <div className='w-[1421px] h-auto text-start text-[16px] leading-[24px] font-[400]'>
                            <p>Fashion online store is very important in this time if you are trying to sell clothes. With the new fashion trends and all the available shopping options you can order your clothes online and make money without even leaving your house. These days you can take your own inspiration and create something new for yourself. All you need to do is read books and magazines about fashion, watch videos on youtube, keep yourself updated on social media, and of course also shop online!</p>
                        </div>
                    </div>


                    {/* added to cart successfull boxes from here */}


                    {/* product 1 successfully added to cart box from here */}

                    <div className={'productbox w-screen h-screen  z-[40] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center ' + added1} >
                        {/* center box from here */}
                        <div className='w-[680px] h-[551.750px] p-[40px] bg-white relative flex flex-col'>

                            {/* cancel btn here on */}
                            <span className='cancel w-[40px] h-[40px] bg-black absolute right-0 top-0 cursor-pointer hover:bg-red-500 hover flex justify-center items-center duration-200 ' onClick={cartbox1inactive}>
                                <FontAwesomeIcon icon={faXmark} className='text-white' />
                            </span>

                            {/* added to cart successfully message here */}
                            <div className=' flex items-center gap-x-[10px] justify-center mb-[20px] '>
                                <FontAwesomeIcon icon={faCheck} />
                                <h4 className='text-[14px] font-[400]'>Succesfully added to cart</h4>
                            </div>

                            {/* content box here */}
                            <div className='w-[600px] h-[426.950px] flex gap-x-[40px]  bg-white'>
                                <div className='w-[280px] h-[426.950px] flex flex-col'>
                                    {/* image box */}
                                    <div className='w-[280px] h-[372.950px] bg-white'>
                                        <img src={p1} alt='' className='' />
                                    </div>

                                    <div className='w-[280px] h-[54px] pt-[10px] flex flex-col items-start gap-y-[5px]'>
                                        <h4 className='text-[14px] font-[500] hover:text-red-500 duration-200 text-start cursor-pointer'>Color sports tank top</h4>
                                        <h4 className='text-[14px] font-[500] text-start '>$90.00</h4>

                                    </div>
                                </div>

                                {/* checkout box section */}
                                <div className='w-[280px] h-[426.950px]  flex flex-col justify-center'>
                                    <div className='w-[280px] h-[233.600px] bg-white flex flex-col gap-y-[20px]'>
                                        <h4 className='text-[14px] font-[400] mb-[5px]'></h4>
                                        {/* total amount  */}
                                        <div className=' flex items-center justify-center gap-x-[10px] '>
                                            <span>Total</span>
                                            <h1 className='text-[20px] leading-[28px] font-[600]'>$90.00</h1>
                                        </div>

                                        {/* checkout btn */}
                                        <button className='mt-[10px] mb-[10px] w-full bg-black px-[40px] py-[7px] text-[16px] leading-[30px] font-[500] text-white hover:bg-red-500 duration-300'>Checkout</button>

                                        {/* view my cart */}
                                        <span className='mx-[100.550px] cursor-pointer hover:text-red-500 duration-200 text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap'>View my cart</span>

                                        {/* continue shopping */}
                                        <span className='mx-[81..575px] cursor-pointer hover:text-red-500 duration-200  text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap '>Continue shopping</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* product 1 successfully added to cart box ends here */}

                    {/* product 2 successfully added to cart box from here */}

                    <div className={'productbox w-screen h-screen  z-[40] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center ' + added2} >
                        {/* center box from here */}
                        <div className='w-[680px] h-[551.750px] p-[40px] bg-white relative flex flex-col'>

                            {/* cancel btn here on */}
                            <span className='cancel w-[40px] h-[40px] bg-black absolute right-0 top-0 cursor-pointer hover:bg-red-500 hover flex justify-center items-center duration-200 ' onClick={cartbox2inactive}>
                                <FontAwesomeIcon icon={faXmark} className='text-white' />
                            </span>

                            {/* added to cart successfully message here */}
                            <div className=' flex items-center gap-x-[10px] justify-center mb-[20px] '>
                                <FontAwesomeIcon icon={faCheck} />
                                <h4 className='text-[14px] font-[400]'>Succesfully added to cart</h4>
                            </div>

                            {/* content box here */}
                            <div className='w-[600px] h-[426.950px] flex gap-x-[40px]  bg-white'>
                                <div className='w-[280px] h-[426.950px] flex flex-col'>
                                    {/* image box */}
                                    <div className='w-[280px] h-[372.950px] bg-white'>
                                        <img src={p2} alt='' className='' />
                                    </div>

                                    <div className='w-[280px] h-[54px] pt-[10px] flex flex-col items-start gap-y-[5px]'>
                                        <h4 className='text-[14px] font-[500] hover:text-red-500 duration-200 text-start cursor-pointer'>Flamingo print tank top</h4>
                                        <h4 className='text-[14px] font-[500] text-start '><p>$79.00 &#160; - &#160; $110.00</p></h4>

                                    </div>
                                </div>

                                {/* checkout box section */}
                                <div className='w-[280px] h-[426.950px]  flex flex-col justify-center'>
                                    <div className='w-[280px] h-[233.600px] bg-white flex flex-col gap-y-[20px]'>
                                        <h4 className='text-[14px] font-[400] mb-[5px]'>Flamingo print tank top</h4>
                                        {/* total amount  */}
                                        <div className=' flex items-center justify-center gap-x-[10px] '>
                                            <span>Total</span>
                                            <h1 className='text-[20px] leading-[28px] font-[600]'><p>$79.00 &#160; - &#160; $110.00</p></h1>
                                        </div>

                                        {/* checkout btn */}
                                        <button className='mt-[10px] mb-[10px] w-full bg-black px-[40px] py-[7px] text-[16px] leading-[30px] font-[500] text-white hover:bg-red-500 duration-300'>Checkout</button>

                                        {/* view my cart */}
                                        <span className='mx-[100.550px] cursor-pointer hover:text-red-500 duration-200 text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap'>View my cart</span>

                                        {/* continue shopping */}
                                        <span className='mx-[81..575px] cursor-pointer hover:text-red-500 duration-200  text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap '>Continue shopping</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* product 2 successfully added to cart box ends here */}

                    {/* product 3 successfully added to cart box from here */}

                    <div className={'productbox w-screen h-screen  z-[40] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center ' + added3} >
                        {/* center box from here */}
                        <div className='w-[680px] h-[551.750px] p-[40px] bg-white relative flex flex-col'>

                            {/* cancel btn here on */}
                            <span className='cancel w-[40px] h-[40px] bg-black absolute right-0 top-0 cursor-pointer hover:bg-red-500 hover flex justify-center items-center duration-200 ' onClick={cartbox3inactive}>
                                <FontAwesomeIcon icon={faXmark} className='text-white' />
                            </span>

                            {/* added to cart successfully message here */}
                            <div className=' flex items-center gap-x-[10px] justify-center mb-[20px] '>
                                <FontAwesomeIcon icon={faCheck} />
                                <h4 className='text-[14px] font-[400]'>Succesfully added to cart</h4>
                            </div>

                            {/* content box here */}
                            <div className='w-[600px] h-[426.950px] flex gap-x-[40px]  bg-white'>
                                <div className='w-[280px] h-[426.950px] flex flex-col'>
                                    {/* image box */}
                                    <div className='w-[280px] h-[372.950px] bg-white'>
                                        <img src={p3} alt='' className='' />
                                    </div>

                                    <div className='w-[280px] h-[54px] pt-[10px] flex flex-col items-start gap-y-[5px]'>
                                        <h4 className='text-[14px] font-[500] hover:text-red-500 duration-200 text-start cursor-pointer'>Leopard print sports shorts</h4>
                                        <h4 className='text-[14px] font-[500] text-start '>$40.00 - 70.00</h4>

                                    </div>
                                </div>

                                {/* checkout box section */}
                                <div className='w-[280px] h-[426.950px]  flex flex-col justify-center'>
                                    <div className='w-[280px] h-[233.600px] bg-white flex flex-col gap-y-[20px]'>
                                        <h4 className='text-[14px] font-[400] mb-[5px]'>Leopard print sports shorts</h4>
                                        {/* total amount  */}
                                        <div className=' flex items-center justify-center gap-x-[10px] '>
                                            <span>Total</span>
                                            <h1 className='text-[20px] leading-[28px] font-[600]'>$80.00</h1>
                                        </div>

                                        {/* checkout btn */}
                                        <button className='mt-[10px] mb-[10px] w-full bg-black px-[40px] py-[7px] text-[16px] leading-[30px] font-[500] text-white hover:bg-red-500 duration-300'>Checkout</button>

                                        {/* view my cart */}
                                        <span className='mx-[100.550px] cursor-pointer hover:text-red-500 duration-200 text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap'>View my cart</span>

                                        {/* continue shopping */}
                                        <span className='mx-[81..575px] cursor-pointer hover:text-red-500 duration-200  text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap '>Continue shopping</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* product 3 successfully added to cart box ends here */}

                    {/* product 4 successfully added to cart box from here */}

                    <div className={'productbox w-screen h-screen  z-[40] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center ' + added4} >
                        {/* center box from here */}
                        <div className='w-[680px] h-[551.750px] p-[40px] bg-white relative flex flex-col'>

                            {/* cancel btn here on */}
                            <span className='cancel w-[40px] h-[40px] bg-black absolute right-0 top-0 cursor-pointer hover:bg-red-500 hover flex justify-center items-center duration-200 ' onClick={cartbox4inactive}>
                                <FontAwesomeIcon icon={faXmark} className='text-white' />
                            </span>

                            {/* added to cart successfully message here */}
                            <div className=' flex items-center gap-x-[10px] justify-center mb-[20px] '>
                                <FontAwesomeIcon icon={faCheck} />
                                <h4 className='text-[14px] font-[400]'>Succesfully added to cart</h4>
                            </div>

                            {/* content box here */}
                            <div className='w-[600px] h-[426.950px] flex gap-x-[40px]  bg-white'>
                                <div className='w-[280px] h-[426.950px] flex flex-col'>
                                    {/* image box */}
                                    <div className='w-[280px] h-[372.950px] bg-white'>
                                        <img src={p4} alt='' className='' />
                                    </div>

                                    <div className='w-[280px] h-[54px] pt-[10px] flex flex-col items-start gap-y-[5px]'>
                                        <h4 className='text-[14px] font-[500] hover:text-red-500 duration-200 text-start cursor-pointer'>High crossback sports bra</h4>
                                        <h4 className='text-[14px] font-[500] text-start '>$90.00</h4>

                                    </div>
                                </div>

                                {/* checkout box section */}
                                <div className='w-[280px] h-[426.950px]  flex flex-col justify-center'>
                                    <div className='w-[280px] h-[233.600px] bg-white flex flex-col gap-y-[20px]'>
                                        <h4 className='text-[14px] font-[400] mb-[5px]'>High crossback sports bra</h4>
                                        {/* total amount  */}
                                        <div className=' flex items-center justify-center gap-x-[10px] '>
                                            <span>Total</span>
                                            <h1 className='text-[20px] leading-[28px] font-[600]'>$90.00</h1>
                                        </div>

                                        {/* checkout btn */}
                                        <button className='mt-[10px] mb-[10px] w-full bg-black px-[40px] py-[7px] text-[16px] leading-[30px] font-[500] text-white hover:bg-red-500 duration-300'>Checkout</button>

                                        {/* view my cart */}
                                        <span className='mx-[100.550px] cursor-pointer hover:text-red-500 duration-200 text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap'>View my cart</span>

                                        {/* continue shopping */}
                                        <span className='mx-[81..575px] cursor-pointer hover:text-red-500 duration-200  text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap '>Continue shopping</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* product 4 successfully added to cart box ends here */}

                    {/* product 5 successfully added to cart box from here */}

                    <div className={'productbox w-screen h-screen  z-[40] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center ' + added5} >
                        {/* center box from here */}
                        <div className='w-[680px] h-[551.750px] p-[40px] bg-white relative flex flex-col'>

                            {/* cancel btn here on */}
                            <span className='cancel w-[40px] h-[40px] bg-black absolute right-0 top-0 cursor-pointer hover:bg-red-500 hover flex justify-center items-center duration-200 ' onClick={cartbox5inactive}>
                                <FontAwesomeIcon icon={faXmark} className='text-white' />
                            </span>

                            {/* added to cart successfully message here */}
                            <div className=' flex items-center gap-x-[10px] justify-center mb-[20px] '>
                                <FontAwesomeIcon icon={faCheck} />
                                <h4 className='text-[14px] font-[400]'>Succesfully added to cart</h4>
                            </div>

                            {/* content box here */}
                            <div className='w-[600px] h-[426.950px] flex gap-x-[40px]  bg-white'>
                                <div className='w-[280px] h-[426.950px] flex flex-col'>
                                    {/* image box */}
                                    <div className='w-[280px] h-[372.950px] bg-white'>
                                        <img src={p5} alt='' className='' />
                                    </div>

                                    <div className='w-[280px] h-[54px] pt-[10px] flex flex-col items-start gap-y-[5px]'>
                                        <h4 className='text-[14px] font-[500] hover:text-red-500 duration-200 text-start cursor-pointer'>Slim fit T-shirt</h4>
                                        <h4 className='text-[14px] font-[500] text-start '>$80.00</h4>

                                    </div>
                                </div>

                                {/* checkout box section */}
                                <div className='w-[280px] h-[426.950px]  flex flex-col justify-center'>
                                    <div className='w-[280px] h-[233.600px] bg-white flex flex-col gap-y-[20px]'>
                                        <h4 className='text-[14px] font-[400] mb-[5px]'>Slim fit T-shirt</h4>
                                        {/* total amount  */}
                                        <div className=' flex items-center justify-center gap-x-[10px] '>
                                            <span>Total</span>
                                            <h1 className='text-[20px] leading-[28px] font-[600]'>$80.00</h1>
                                        </div>

                                        {/* checkout btn */}
                                        <button className='mt-[10px] mb-[10px] w-full bg-black px-[40px] py-[7px] text-[16px] leading-[30px] font-[500] text-white hover:bg-red-500 duration-300'>Checkout</button>

                                        {/* view my cart */}
                                        <span className='mx-[100.550px] cursor-pointer hover:text-red-500 duration-200 text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap'>View my cart</span>

                                        {/* continue shopping */}
                                        <span className='mx-[81..575px] cursor-pointer hover:text-red-500 duration-200  text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap '>Continue shopping</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* product 5 successfully added to cart box ends here */}

                    {/* product 6 successfully added to cart box from here */}

                    <div className={'productbox w-screen h-screen  z-[40] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center ' + added6} >
                        {/* center box from here */}
                        <div className='w-[680px] h-[551.750px] p-[40px] bg-white relative flex flex-col'>

                            {/* cancel btn here on */}
                            <span className='cancel w-[40px] h-[40px] bg-black absolute right-0 top-0 cursor-pointer hover:bg-red-500 hover flex justify-center items-center duration-200 ' onClick={cartbox6inactive}>
                                <FontAwesomeIcon icon={faXmark} className='text-white' />
                            </span>

                            {/* added to cart successfully message here */}
                            <div className=' flex items-center gap-x-[10px] justify-center mb-[20px] '>
                                <FontAwesomeIcon icon={faCheck} />
                                <h4 className='text-[14px] font-[400]'>Succesfully added to cart</h4>
                            </div>

                            {/* content box here */}
                            <div className='w-[600px] h-[426.950px] flex gap-x-[40px]  bg-white'>
                                <div className='w-[280px] h-[426.950px] flex flex-col'>
                                    {/* image box */}
                                    <div className='w-[280px] h-[372.950px] bg-white'>
                                        <img src={p6} alt='' className='' />
                                    </div>

                                    <div className='w-[280px] h-[54px] pt-[10px] flex flex-col items-start gap-y-[5px]'>
                                        <h4 className='text-[14px] font-[500] hover:text-red-500 duration-200 text-start cursor-pointer'>Solid crop slim sports tee</h4>
                                        <h4 className='text-[14px] font-[500] text-start '>$60.00</h4>

                                    </div>
                                </div>

                                {/* checkout box section */}
                                <div className='w-[280px] h-[426.950px]  flex flex-col justify-center'>
                                    <div className='w-[280px] h-[233.600px] bg-white flex flex-col gap-y-[20px]'>
                                        <h4 className='text-[14px] font-[400] mb-[5px]'>Solid crop slim sports tee</h4>
                                        {/* total amount  */}
                                        <div className=' flex items-center justify-center gap-x-[10px] '>
                                            <span>Total</span>
                                            <h1 className='text-[20px] leading-[28px] font-[600]'>$60.00</h1>
                                        </div>

                                        {/* checkout btn */}
                                        <button className='mt-[10px] mb-[10px] w-full bg-black px-[40px] py-[7px] text-[16px] leading-[30px] font-[500] text-white hover:bg-red-500 duration-300'>Checkout</button>

                                        {/* view my cart */}
                                        <span className='mx-[100.550px] cursor-pointer hover:text-red-500 duration-200 text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap'>View my cart</span>

                                        {/* continue shopping */}
                                        <span className='mx-[81..575px] cursor-pointer hover:text-red-500 duration-200  text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap '>Continue shopping</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* product 6 successfully added to cart box ends here */}

                    {/* product 7 successfully added to cart box from here */}

                    <div className={'productbox w-screen h-screen  z-[40] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center ' + added7} >
                        {/* center box from here */}
                        <div className='w-[680px] h-[551.750px] p-[40px] bg-white relative flex flex-col'>

                            {/* cancel btn here on */}
                            <span className='cancel w-[40px] h-[40px] bg-black absolute right-0 top-0 cursor-pointer hover:bg-red-500 hover flex justify-center items-center duration-200 ' onClick={cartbox7inactive}>
                                <FontAwesomeIcon icon={faXmark} className='text-white' />
                            </span>

                            {/* added to cart successfully message here */}
                            <div className=' flex items-center gap-x-[10px] justify-center mb-[20px] '>
                                <FontAwesomeIcon icon={faCheck} />
                                <h4 className='text-[14px] font-[400]'>Succesfully added to cart</h4>
                            </div>

                            {/* content box here */}
                            <div className='w-[600px] h-[426.950px] flex gap-x-[40px]  bg-white'>
                                <div className='w-[280px] h-[426.950px] flex flex-col'>
                                    {/* image box */}
                                    <div className='w-[280px] h-[372.950px] bg-white'>
                                        <img src={p4} alt='' className='' />
                                    </div>

                                    <div className='w-[280px] h-[54px] pt-[10px] flex flex-col items-start gap-y-[5px]'>
                                        <h4 className='text-[14px] font-[500] hover:text-red-500 duration-200 text-start cursor-pointer'>Contrast binding layered dress</h4>
                                        <h4 className='text-[14px] font-[500] text-start '>$80.00</h4>

                                    </div>
                                </div>

                                {/* checkout box section */}
                                <div className='w-[280px] h-[426.950px]  flex flex-col justify-center'>
                                    <div className='w-[280px] h-[233.600px] bg-white flex flex-col gap-y-[20px]'>
                                        <h4 className='text-[14px] font-[400] mb-[5px]'>Contrast binding layered dress</h4>
                                        {/* total amount  */}
                                        <div className=' flex items-center justify-center gap-x-[10px] '>
                                            <span>Total</span>
                                            <h1 className='text-[20px] leading-[28px] font-[600]'>$80.00</h1>
                                        </div>

                                        {/* checkout btn */}
                                        <button className='mt-[10px] mb-[10px] w-full bg-black px-[40px] py-[7px] text-[16px] leading-[30px] font-[500] text-white hover:bg-red-500 duration-300'>Checkout</button>

                                        {/* view my cart */}
                                        <span className='mx-[100.550px] cursor-pointer hover:text-red-500 duration-200 text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap'>View my cart</span>

                                        {/* continue shopping */}
                                        <span className='mx-[81..575px] cursor-pointer hover:text-red-500 duration-200  text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap '>Continue shopping</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* product 7 successfully added to cart box ends here */}

                    {/* product 8 successfully added to cart box from here */}

                    <div className={'productbox w-screen h-screen  z-[40] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center ' + added8} >
                        {/* center box from here */}
                        <div className='w-[680px] h-[551.750px] p-[40px] bg-white relative flex flex-col'>

                            {/* cancel btn here on */}
                            <span className='cancel w-[40px] h-[40px] bg-black absolute right-0 top-0 cursor-pointer hover:bg-red-500 hover flex justify-center items-center duration-200 ' onClick={cartbox8inactive}>
                                <FontAwesomeIcon icon={faXmark} className='text-white' />
                            </span>

                            {/* added to cart successfully message here */}
                            <div className=' flex items-center gap-x-[10px] justify-center mb-[20px] '>
                                <FontAwesomeIcon icon={faCheck} />
                                <h4 className='text-[14px] font-[400]'>Succesfully added to cart</h4>
                            </div>

                            {/* content box here */}
                            <div className='w-[600px] h-[426.950px] flex gap-x-[40px]  bg-white'>
                                <div className='w-[280px] h-[426.950px] flex flex-col'>
                                    {/* image box */}
                                    <div className='w-[280px] h-[372.950px] bg-white'>
                                        <img src={p8} alt='' className='' />
                                    </div>

                                    <div className='w-[280px] h-[54px] pt-[10px] flex flex-col items-start gap-y-[5px]'>
                                        <h4 className='text-[14px] font-[500] hover:text-red-500 duration-200 text-start cursor-pointer'>Topshop training t-shirt</h4>
                                        <h4 className='text-[14px] font-[500] text-start '>$60.00</h4>

                                    </div>
                                </div>

                                {/* checkout box section */}
                                <div className='w-[280px] h-[426.950px]  flex flex-col justify-center'>
                                    <div className='w-[280px] h-[233.600px] bg-white flex flex-col gap-y-[20px]'>
                                        <h4 className='text-[14px] font-[400] mb-[5px]'>Topshop training t-shirt</h4>
                                        {/* total amount  */}
                                        <div className=' flex items-center justify-center gap-x-[10px] '>
                                            <span>Total</span>
                                            <h1 className='text-[20px] leading-[28px] font-[600]'>$60.00</h1>
                                        </div>

                                        {/* checkout btn */}
                                        <button className='mt-[10px] mb-[10px] w-full bg-black px-[40px] py-[7px] text-[16px] leading-[30px] font-[500] text-white hover:bg-red-500 duration-300'>Checkout</button>

                                        {/* view my cart */}
                                        <span className='mx-[100.550px] cursor-pointer hover:text-red-500 duration-200 text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap'>View my cart</span>

                                        {/* continue shopping */}
                                        <span className='mx-[81..575px] cursor-pointer hover:text-red-500 duration-200  text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap '>Continue shopping</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* product 8 successfully added to cart box ends here */}

                    {/* product 9 successfully added to cart box from here */}

                    <div className={'productbox w-screen h-screen  z-[40] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center ' + added9} >
                        {/* center box from here */}
                        <div className='w-[680px] h-[551.750px] p-[40px] bg-white relative flex flex-col'>

                            {/* cancel btn here on */}
                            <span className='cancel w-[40px] h-[40px] bg-black absolute right-0 top-0 cursor-pointer hover:bg-red-500 hover flex justify-center items-center duration-200 ' onClick={cartbox9inactive}>
                                <FontAwesomeIcon icon={faXmark} className='text-white' />
                            </span>

                            {/* added to cart successfully message here */}
                            <div className=' flex items-center gap-x-[10px] justify-center mb-[20px] '>
                                <FontAwesomeIcon icon={faCheck} />
                                <h4 className='text-[14px] font-[400]'>Succesfully added to cart</h4>
                            </div>

                            {/* content box here */}
                            <div className='w-[600px] h-[426.950px] flex gap-x-[40px]  bg-white'>
                                <div className='w-[280px] h-[426.950px] flex flex-col'>
                                    {/* image box */}
                                    <div className='w-[280px] h-[372.950px] bg-white'>
                                        <img src={p9} alt='' className='' />
                                    </div>

                                    <div className='w-[280px] h-[54px] pt-[10px] flex flex-col items-start gap-y-[5px]'>
                                        <h4 className='text-[14px] font-[500] hover:text-red-500 duration-200 text-start cursor-pointer'>Ombre sports tank top</h4>
                                        <h4 className='text-[14px] font-[500] text-start '>$70.00</h4>

                                    </div>
                                </div>

                                {/* checkout box section */}
                                <div className='w-[280px] h-[426.950px]  flex flex-col justify-center'>
                                    <div className='w-[280px] h-[233.600px] bg-white flex flex-col gap-y-[20px]'>
                                        <h4 className='text-[14px] font-[400] mb-[5px]'>Ombre sports tank top</h4>
                                        {/* total amount  */}
                                        <div className=' flex items-center justify-center gap-x-[10px] '>
                                            <span>Total</span>
                                            <h1 className='text-[20px] leading-[28px] font-[600]'>$80.00</h1>
                                        </div>

                                        {/* checkout btn */}
                                        <button className='mt-[10px] mb-[10px] w-full bg-black px-[40px] py-[7px] text-[16px] leading-[30px] font-[500] text-white hover:bg-red-500 duration-300'>Checkout</button>

                                        {/* view my cart */}
                                        <span className='mx-[100.550px] cursor-pointer hover:text-red-500 duration-200 text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap'>View my cart</span>

                                        {/* continue shopping */}
                                        <span className='mx-[81..575px] cursor-pointer hover:text-red-500 duration-200  text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap '>Continue shopping</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* product 9 successfully added to cart box ends here */}

                    {/* product 10 successfully added to cart box from here */}

                    <div className={'productbox w-screen h-screen  z-[40] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center ' + added10} >
                        {/* center box from here */}
                        <div className='w-[680px] h-[551.750px] p-[40px] bg-white relative flex flex-col'>

                            {/* cancel btn here on */}
                            <span className='cancel w-[40px] h-[40px] bg-black absolute right-0 top-0 cursor-pointer hover:bg-red-500 hover flex justify-center items-center duration-200 ' onClick={cartbox10inactive}>
                                <FontAwesomeIcon icon={faXmark} className='text-white' />
                            </span>

                            {/* added to cart successfully message here */}
                            <div className=' flex items-center gap-x-[10px] justify-center mb-[20px] '>
                                <FontAwesomeIcon icon={faCheck} />
                                <h4 className='text-[14px] font-[400]'>Succesfully added to cart</h4>
                            </div>

                            {/* content box here */}
                            <div className='w-[600px] h-[426.950px] flex gap-x-[40px]  bg-white'>
                                <div className='w-[280px] h-[426.950px] flex flex-col'>
                                    {/* image box */}
                                    <div className='w-[280px] h-[372.950px] bg-white'>
                                        <img src={p10} alt='' className='' />
                                    </div>

                                    <div className='w-[280px] h-[54px] pt-[10px] flex flex-col items-start gap-y-[5px]'>
                                        <h4 className='text-[14px] font-[500] hover:text-red-500 duration-200 text-start cursor-pointer'>Cropped tennis skirt</h4>
                                        <h4 className='text-[14px] font-[500] text-start '>$109.00</h4>

                                    </div>
                                </div>

                                {/* checkout box section */}
                                <div className='w-[280px] h-[426.950px]  flex flex-col justify-center'>
                                    <div className='w-[280px] h-[233.600px] bg-white flex flex-col gap-y-[20px]'>
                                        <h4 className='text-[14px] font-[400] mb-[5px]'>Cropped tennis skirt</h4>
                                        {/* total amount  */}
                                        <div className=' flex items-center justify-center gap-x-[10px] '>
                                            <span>Total</span>
                                            <h1 className='text-[20px] leading-[28px] font-[600]'>$109.00</h1>
                                        </div>

                                        {/* checkout btn */}
                                        <button className='mt-[10px] mb-[10px] w-full bg-black px-[40px] py-[7px] text-[16px] leading-[30px] font-[500] text-white hover:bg-red-500 duration-300'>Checkout</button>

                                        {/* view my cart */}
                                        <span className='mx-[100.550px] cursor-pointer hover:text-red-500 duration-200 text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap'>View my cart</span>

                                        {/* continue shopping */}
                                        <span className='mx-[81..575px] cursor-pointer hover:text-red-500 duration-200  text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap '>Continue shopping</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* product 10 successfully added to cart box ends here */}

                    {/* product 11 successfully added to cart box from here */}

                    <div className={'productbox w-screen h-screen  z-[40] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center ' + added11} >
                        {/* center box from here */}
                        <div className='w-[680px] h-[551.750px] p-[40px] bg-white relative flex flex-col'>

                            {/* cancel btn here on */}
                            <span className='cancel w-[40px] h-[40px] bg-black absolute right-0 top-0 cursor-pointer hover:bg-red-500 hover flex justify-center items-center duration-200 ' onClick={cartbox11inactive}>
                                <FontAwesomeIcon icon={faXmark} className='text-white' />
                            </span>

                            {/* added to cart successfully message here */}
                            <div className=' flex items-center gap-x-[10px] justify-center mb-[20px] '>
                                <FontAwesomeIcon icon={faCheck} />
                                <h4 className='text-[14px] font-[400]'>Succesfully added to cart</h4>
                            </div>

                            {/* content box here */}
                            <div className='w-[600px] h-[426.950px] flex gap-x-[40px]  bg-white'>
                                <div className='w-[280px] h-[426.950px] flex flex-col'>
                                    {/* image box */}
                                    <div className='w-[280px] h-[372.950px] bg-white'>
                                        <img src={p11} alt='' className='' />
                                    </div>

                                    <div className='w-[280px] h-[54px] pt-[10px] flex flex-col items-start gap-y-[5px]'>
                                        <h4 className='text-[14px] font-[500] hover:text-red-500 duration-200 text-start cursor-pointer'>Solid pocket sport shorts</h4>
                                        <h4 className='text-[14px] font-[500] text-start '>$70.00 - $110.00</h4>

                                    </div>
                                </div>

                                {/* checkout box section */}
                                <div className='w-[280px] h-[426.950px]  flex flex-col justify-center'>
                                    <div className='w-[280px] h-[233.600px] bg-white flex flex-col gap-y-[20px]'>
                                        <h4 className='text-[14px] font-[400] mb-[5px]'>Solid pocket sport shorts</h4>
                                        {/* total amount  */}
                                        <div className=' flex items-center justify-center gap-x-[10px] '>
                                            <span>Total</span>
                                            <h1 className='text-[20px] leading-[28px] font-[600]'>$70.00 -$110.00</h1>
                                        </div>

                                        {/* checkout btn */}
                                        <button className='mt-[10px] mb-[10px] w-full bg-black px-[40px] py-[7px] text-[16px] leading-[30px] font-[500] text-white hover:bg-red-500 duration-300'>Checkout</button>

                                        {/* view my cart */}
                                        <span className='mx-[100.550px] cursor-pointer hover:text-red-500 duration-200 text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap'>View my cart</span>

                                        {/* continue shopping */}
                                        <span className='mx-[81..575px] cursor-pointer hover:text-red-500 duration-200  text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap '>Continue shopping</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* product 11 successfully added to cart box ends here */}

                    {/* product 12 successfully added to cart box from here */}

                    <div className={'productbox w-screen h-screen  z-[40] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center ' + added12} >
                        {/* center box from here */}
                        <div className='w-[680px] h-[551.750px] p-[40px] bg-white relative flex flex-col'>

                            {/* cancel btn here on */}
                            <span className='cancel w-[40px] h-[40px] bg-black absolute right-0 top-0 cursor-pointer hover:bg-red-500 hover flex justify-center items-center duration-200 ' onClick={cartbox12inactive}>
                                <FontAwesomeIcon icon={faXmark} className='text-white' />
                            </span>

                            {/* added to cart successfully message here */}
                            <div className=' flex items-center gap-x-[10px] justify-center mb-[20px] '>
                                <FontAwesomeIcon icon={faCheck} />
                                <h4 className='text-[14px] font-[400]'>Succesfully added to cart</h4>
                            </div>

                            {/* content box here */}
                            <div className='w-[600px] h-[426.950px] flex gap-x-[40px]  bg-white'>
                                <div className='w-[280px] h-[426.950px] flex flex-col'>
                                    {/* image box */}
                                    <div className='w-[280px] h-[372.950px] bg-white'>
                                        <img src={p12} alt='' className='' />
                                    </div>

                                    <div className='w-[280px] h-[54px] pt-[10px] flex flex-col items-start gap-y-[5px]'>
                                        <h4 className='text-[14px] font-[500] hover:text-red-500 duration-200 text-start cursor-pointer'>High waisted leggings</h4>
                                        <h4 className='text-[14px] font-[500] text-start '>$59.00</h4>

                                    </div>
                                </div>

                                {/* checkout box section */}
                                <div className='w-[280px] h-[426.950px]  flex flex-col justify-center'>
                                    <div className='w-[280px] h-[233.600px] bg-white flex flex-col gap-y-[20px]'>
                                        <h4 className='text-[14px] font-[400] mb-[5px]'>High waisted leggings</h4>
                                        {/* total amount  */}
                                        <div className=' flex items-center justify-center gap-x-[10px] '>
                                            <span>Total</span>
                                            <h1 className='text-[20px] leading-[28px] font-[600]'>$59.00</h1>
                                        </div>

                                        {/* checkout btn */}
                                        <button className='mt-[10px] mb-[10px] w-full bg-black px-[40px] py-[7px] text-[16px] leading-[30px] font-[500] text-white hover:bg-red-500 duration-300'>Checkout</button>

                                        {/* view my cart */}
                                        <span className='mx-[100.550px] cursor-pointer hover:text-red-500 duration-200 text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap'>View my cart</span>

                                        {/* continue shopping */}
                                        <span className='mx-[81..575px] cursor-pointer hover:text-red-500 duration-200  text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap '>Continue shopping</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* product 12 successfully added to cart box ends here */}

                    {/* product 13 successfully added to cart box from here */}

                    <div className={'productbox w-screen h-screen  z-[40] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center ' + added13} >
                        {/* center box from here */}
                        <div className='w-[680px] h-[551.750px] p-[40px] bg-white relative flex flex-col'>

                            {/* cancel btn here on */}
                            <span className='cancel w-[40px] h-[40px] bg-black absolute right-0 top-0 cursor-pointer hover:bg-red-500 hover flex justify-center items-center duration-200 ' onClick={cartbox13inactive}>
                                <FontAwesomeIcon icon={faXmark} className='text-white' />
                            </span>

                            {/* added to cart successfully message here */}
                            <div className=' flex items-center gap-x-[10px] justify-center mb-[20px] '>
                                <FontAwesomeIcon icon={faCheck} />
                                <h4 className='text-[14px] font-[400]'>Succesfully added to cart</h4>
                            </div>

                            {/* content box here */}
                            <div className='w-[600px] h-[426.950px] flex gap-x-[40px]  bg-white'>
                                <div className='w-[280px] h-[426.950px] flex flex-col'>
                                    {/* image box */}
                                    <div className='w-[280px] h-[372.950px] bg-white'>
                                        <img src={p13} alt='' className='' />
                                    </div>

                                    <div className='w-[280px] h-[54px] pt-[10px] flex flex-col items-start gap-y-[5px]'>
                                        <h4 className='text-[14px] font-[500] hover:text-red-500 duration-200 text-start cursor-pointer'>Quick dry T-shirts</h4>
                                        <h4 className='text-[14px] font-[500] text-start '>$69.00</h4>

                                    </div>
                                </div>

                                {/* checkout box section */}
                                <div className='w-[280px] h-[426.950px]  flex flex-col justify-center'>
                                    <div className='w-[280px] h-[233.600px] bg-white flex flex-col gap-y-[20px]'>
                                        <h4 className='text-[14px] font-[400] mb-[5px]'>Quick dry T-shirts</h4>
                                        {/* total amount  */}
                                        <div className=' flex items-center justify-center gap-x-[10px] '>
                                            <span>Total</span>
                                            <h1 className='text-[20px] leading-[28px] font-[600]'>$69.00</h1>
                                        </div>

                                        {/* checkout btn */}
                                        <button className='mt-[10px] mb-[10px] w-full bg-black px-[40px] py-[7px] text-[16px] leading-[30px] font-[500] text-white hover:bg-red-500 duration-300'>Checkout</button>

                                        {/* view my cart */}
                                        <span className='mx-[100.550px] cursor-pointer hover:text-red-500 duration-200 text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap'>View my cart</span>

                                        {/* continue shopping */}
                                        <span className='mx-[81..575px] cursor-pointer hover:text-red-500 duration-200  text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap '>Continue shopping</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* product 13 successfully added to cart box ends here */}

                    {/* product 14 successfully added to cart box from here */}

                    <div className={'productbox w-screen h-screen  z-[40] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center ' + added14} >
                        {/* center box from here */}
                        <div className='w-[680px] h-[551.750px] p-[40px] bg-white relative flex flex-col'>

                            {/* cancel btn here on */}
                            <span className='cancel w-[40px] h-[40px] bg-black absolute right-0 top-0 cursor-pointer hover:bg-red-500 hover flex justify-center items-center duration-200 ' onClick={cartbox14inactive}>
                                <FontAwesomeIcon icon={faXmark} className='text-white' />
                            </span>

                            {/* added to cart successfully message here */}
                            <div className=' flex items-center gap-x-[10px] justify-center mb-[20px] '>
                                <FontAwesomeIcon icon={faCheck} />
                                <h4 className='text-[14px] font-[400]'>Succesfully added to cart</h4>
                            </div>

                            {/* content box here */}
                            <div className='w-[600px] h-[426.950px] flex gap-x-[40px]  bg-white'>
                                <div className='w-[280px] h-[426.950px] flex flex-col'>
                                    {/* image box */}
                                    <div className='w-[280px] h-[372.950px] bg-white'>
                                        <img src={p14} alt='' className='' />
                                    </div>

                                    <div className='w-[280px] h-[54px] pt-[10px] flex flex-col items-start gap-y-[5px]'>
                                        <h4 className='text-[14px] font-[500] hover:text-red-500 duration-200 text-start cursor-pointer'>Athletic tank top</h4>
                                        <h4 className='text-[14px] font-[500] text-start '>$.00</h4>

                                    </div>
                                </div>

                                {/* checkout box section */}
                                <div className='w-[280px] h-[426.950px]  flex flex-col justify-center'>
                                    <div className='w-[280px] h-[233.600px] bg-white flex flex-col gap-y-[20px]'>
                                        <h4 className='text-[14px] font-[400] mb-[5px]'>Athletic tank top</h4>
                                        {/* total amount  */}
                                        <div className=' flex items-center justify-center gap-x-[10px] '>
                                            <span>Total</span>
                                            <h1 className='text-[20px] leading-[28px] font-[600]'>$39.00</h1>
                                        </div>

                                        {/* checkout btn */}
                                        <button className='mt-[10px] mb-[10px] w-full bg-black px-[40px] py-[7px] text-[16px] leading-[30px] font-[500] text-white hover:bg-red-500 duration-300'>Checkout</button>

                                        {/* view my cart */}
                                        <span className='mx-[100.550px] cursor-pointer hover:text-red-500 duration-200 text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap'>View my cart</span>

                                        {/* continue shopping */}
                                        <span className='mx-[81..575px] cursor-pointer hover:text-red-500 duration-200  text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap '>Continue shopping</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* product 14 successfully added to cart box ends here */}

                    {/* product 15 successfully added to cart box from here */}

                    <div className={'productbox w-screen h-screen  z-[40] fixed top-0 left-0 bg-[#00000066] flex justify-center items-center ' + added15} >
                        {/* center box from here */}
                        <div className='w-[680px] h-[551.750px] p-[40px] bg-white relative flex flex-col'>

                            {/* cancel btn here on */}
                            <span className='cancel w-[40px] h-[40px] bg-black absolute right-0 top-0 cursor-pointer hover:bg-red-500 hover flex justify-center items-center duration-200 ' onClick={cartbox15inactive}>
                                <FontAwesomeIcon icon={faXmark} className='text-white' />
                            </span>

                            {/* added to cart successfully message here */}
                            <div className=' flex items-center gap-x-[10px] justify-center mb-[20px] '>
                                <FontAwesomeIcon icon={faCheck} />
                                <h4 className='text-[14px] font-[400]'>Succesfully added to cart</h4>
                            </div>

                            {/* content box here */}
                            <div className='w-[600px] h-[426.950px] flex gap-x-[40px]  bg-white'>
                                <div className='w-[280px] h-[426.950px] flex flex-col'>
                                    {/* image box */}
                                    <div className='w-[280px] h-[372.950px] bg-white'>
                                        <img src={p15} alt='' className='' />
                                    </div>

                                    <div className='w-[280px] h-[54px] pt-[10px] flex flex-col items-start gap-y-[5px]'>
                                        <h4 className='text-[14px] font-[500] hover:text-red-500 duration-200 text-start cursor-pointer'>Knit sports shorts set</h4>
                                        <h4 className='text-[14px] font-[500] text-start '>$99.00</h4>

                                    </div>
                                </div>

                                {/* checkout box section */}
                                <div className='w-[280px] h-[426.950px]  flex flex-col justify-center'>
                                    <div className='w-[280px] h-[233.600px] bg-white flex flex-col gap-y-[20px]'>
                                        <h4 className='text-[14px] font-[400] mb-[5px]'>Knit sports shorts set</h4>
                                        {/* total amount  */}
                                        <div className=' flex items-center justify-center gap-x-[10px] '>
                                            <span>Total</span>
                                            <h1 className='text-[20px] leading-[28px] font-[600]'>$99.00</h1>
                                        </div>

                                        {/* checkout btn */}
                                        <button className='mt-[10px] mb-[10px] w-full bg-black px-[40px] py-[7px] text-[16px] leading-[30px] font-[500] text-white hover:bg-red-500 duration-300'>Checkout</button>

                                        {/* view my cart */}
                                        <span className='mx-[100.550px] cursor-pointer hover:text-red-500 duration-200 text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap'>View my cart</span>

                                        {/* continue shopping */}
                                        <span className='mx-[81..575px] cursor-pointer hover:text-red-500 duration-200  text-[15px] leading-[20px] font-[500] underline underline-offset-2 decoration-1 text-nowrap '>Continue shopping</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* product 15 successfully added to cart box ends here */}


                </div>
            </div>
        </main>
    )
}
export default Gym
