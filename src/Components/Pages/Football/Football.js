import React, { useState } from 'react'
// import "./cycling.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faAngleDown, faAngleRight, faStar, faCheck, faHeart, faMagnifyingGlass, faChartBar, faXmark } from '@fortawesome/free-solid-svg-icons'

import p1 from "../../Assets/football/p1/color1.jpg"
import p2 from "../../Assets/football/p1/color2.jpg"



export default function Football() {

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





    return (
        <main className='w-screen h-auto'>
            {/* home > Sale section from here */}
            <div className='w-full px-[50px] py-[15px] 2k:px-[250px]'>
                <div className='w-full h-[24px] bg-white flex justify-start items-center gap-x-[9px] text-[13px] font-[500] '>
                    <Link to={"/"} className='hover:text-red-500 duration-200 leading-[24px]' >Home</Link>
                    <span className='text-[13px]  pt-[4px]'><FontAwesomeIcon icon={faAngleRight} /></span>
                    <p className='font-[400]'>Football</p>
                </div>
            </div>
            {/* home > Sale section ends here */}

            {/* Shop heading  */}
            <div className='px-[50px] 2k:px-[250px]'>
                <h1 className='text-[40px] leading-[40px] font-oswald font-[600] text-start mb-[20px] mt-[7px]'>Football</h1>
            </div>

            {/* product section starts from here  */}

            {/* section container */}
            <div className='w-full h-auto px-[50px] pt-[15px] 2k:px-[250px]  mb-[80px]'>
                <div className='w-full h-full bg-white flex flex-col'>
                    {/* filter tab  */}
                    <div className='flex w-full h-[44px] bg-white  justify-between mb-[30px]'>
                        {/* left filter */}
                        <div className='w-[716.862px] h-[44px] bg-white flex gap-x-[30px] items-center'>
                            <span className='text-[16px] leading-[24px] font-[400]'>Filter</span>
                            {/* category */}
                            <div className='categorykey flex flex-col justify-center items-center relative   cursor-pointer   '>
                                <div className=' flex justify-center items-center gap-x-[3px]'>
                                    <h3 className='text-[16px] leading-[34px] font-[600]'>Categories</h3>
                                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px] ' />
                                </div>
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
                            {/* category ends here */}

                            {/* color */}
                            <div className='colorkey flex flex-col justify-center items-center relative   cursor-pointer   '>
                                <div className=' flex justify-center items-center gap-x-[3px]'>
                                    <h3 className='text-[16px] leading-[34px] font-[600]'>Color</h3>
                                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px]' />
                                </div>
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
                            {/* color ends here */}

                            {/* size */}
                            <div className='sizekey flex flex-col justify-center items-center relative   cursor-pointer   '>
                                <div className=' flex justify-center items-center gap-x-[3px]'>
                                    <h3 className='text-[16px] leading-[34px] font-[600]'>Size</h3>
                                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px]' />
                                </div>
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
                            {/* size ends here */}

                            {/* fabric */}
                            <div className='fabrickey flex flex-col justify-center items-center relative   cursor-pointer   '>
                                <div className=' flex justify-center items-center gap-x-[3px]'>
                                    <h3 className='text-[16px] leading-[34px] font-[600]'>Fabric</h3>
                                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px]' />
                                </div>
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
                                {/* fabricdown ends here */}
                            </div>
                            {/* fabric ends here */}

                            {/* brands */}
                            <div className='brandkey flex flex-col justify-center items-center relative   cursor-pointer   '>
                                <div className=' flex justify-center items-center gap-x-[3px]'>
                                    <h3 className='text-[16px] leading-[34px] font-[600]'>Brands</h3>
                                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px]' />
                                </div>
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
                                {/* branddown ends here */}
                            </div>
                            {/* brands ends here */}

                            {/* price */}
                            <div className='pricekey flex flex-col justify-center items-center relative   cursor-pointer   '>
                                <div className=' flex justify-center items-center gap-x-[3px]'>
                                    <h3 className='text-[16px] leading-[34px] font-[600]'>Price</h3>
                                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px] ' />
                                </div>
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
                                {/* pricedown ends here */}
                            </div>
                            {/* price ends here */}

                            {/* ratings */}
                            <div className='ratingkey flex flex-col justify-center items-center relative   cursor-pointer   '>
                                <div className=' flex justify-center items-center gap-x-[3px] '>
                                    <h3 className='text-[16px] leading-[34px] font-[600]'>Ratings</h3>
                                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px]' />
                                </div>
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
                                </div>
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
                            {/* sort by no. */}
                            <div className='sortkey w-auto px-[15px] h-[32px] bg-white border-[1px] border-black  flex justify-center items-center gap-x-[10px] cursor-pointer relative'>
                                <p className='text-[13px] font-normal text-nowrap'>Sort by</p>
                                <div className='flex gap-x-[5px] justify-center items-center'>
                                    <h3 className='text-[13px] font-[600] leading-[32px]'>20</h3>
                                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[2px] ' />
                                </div>
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
                    {/* filter tab ends here */}

                    {/* product section from here */}
                    <div className='w-full 
            2k:px-[250px] flex  justify-start '>

                        {/* product 1  */}
                        <div className='w-80%] 2xl:w-[20%] h-full bg-white product flex flex-col items-center 2xl:block'>

                            {/* product image 1*/}
                            <div className='w-[268px] h-[357.25px]  cursor-pointer relative  overflow-hidden flex justify-center'>
                                <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                                    <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                    <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                </div>

                                {/* add to cart from here */}
                                <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 hover:shadow-red-500 duration-[400ms] addtocart ease-out shadow-md ' onClick={cartbox1active}>
                                    <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                                </div>

                                <Link to={"/football/drawing-waist-shorts"}>
                                    <img src={p1} alt='Product 5' className='w-full' />
                                </Link>
                            </div>
                            {/* product price */}
                            <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] 2xl:gap-y-[0px] '>
                                <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Cycling shorts green</a>
                                <p>$120.00</p>
                            </div>
                        </div>
                        {/* product 2  */}
                        <div className='w-80%] 2xl:w-[20%] h-full bg-white product flex flex-col items-center 2xl:block'>
                            {/* product image 5*/}
                            <div className='w-[268px] h-[357.25px]  cursor-pointer relative  overflow-hidden flex justify-center'>
                                <div className='flex flex-col absolute top-[10px] gap-y-[6px] right-[-100%] stats transition-[right] duration-500 ease-out'>
                                    <FontAwesomeIcon icon={faHeart} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                    <FontAwesomeIcon icon={faChartBar} className='bg-white px-[10px] py-[10px] shadow-md hover:bg-black hover:text-white duration-200' />
                                </div>

                                {/* add to cart from here */}
                                <div className='w-[250px]  bg-black absolute bottom-[-100%] cursor-pointer text-white hover:bg-red-500 hover:shadow-red-500 duration-[400ms] addtocart ease-out shadow-md ' onClick={cartbox2active}>
                                    <h2 className='py-[8px] font-semibold'>+ Add to cart</h2>
                                </div>
                                <Link to={"/cycling-accessory/wristband-cycling-gloves"}>
                                    <img src={p2} alt='Product 5' className='w-full' />
                                </Link>
                            </div>
                            {/* product price */}
                            <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] 2xl:gap-y-[0px] '>
                                <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Drawstring waist shorts</a>
                                <p>$90.00</p>
                            </div>
                        </div>




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
                                <h4 className='text-[14px] font-[500] hover:text-red-500 duration-200 text-start cursor-pointer'>Cycling shorts green</h4>
                                <h4 className='text-[14px] font-[500] text-start '>$120.00</h4>

                            </div>
                        </div>

                        {/* checkout box section */}
                        <div className='w-[280px] h-[426.950px]  flex flex-col justify-center'>
                            <div className='w-[280px] h-[233.600px] bg-white flex flex-col gap-y-[20px]'>
                                <h4 className='text-[14px] font-[400] mb-[5px]'>Cycling shorts green</h4>
                                {/* total amount  */}
                                <div className=' flex items-center justify-center gap-x-[10px] '>
                                    <span>Total</span>
                                    <h1 className='text-[20px] leading-[28px] font-[600]'>$120.00</h1>
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
                                <h4 className='text-[14px] font-[500] hover:text-red-500 duration-200 text-start cursor-pointer'>Drawstring waist shorts</h4>
                                <h4 className='text-[14px] font-[500] text-start '>$90.00</h4>

                            </div>
                        </div>

                        {/* checkout box section */}
                        <div className='w-[280px] h-[426.950px]  flex flex-col justify-center'>
                            <div className='w-[280px] h-[233.600px] bg-white flex flex-col gap-y-[20px]'>
                                <h4 className='text-[14px] font-[400] mb-[5px]'>Wristband cycling gloves</h4>
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

            {/* product 2 successfully added to cart box ends here */}






        </main>
    )
}
