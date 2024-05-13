import React from 'react'
import "./tennis.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight, faCheck,faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Tennis() {
    return (
        <>
            <main className='w-screen h-auto'>
                {/* home > Tennis section from here */}
                <div className='w-full px-[50px] py-[15px] 2k:px-[250px]'>
                    <div className='w-full h-[24px] bg-white flex justify-start items-center gap-x-[9px] text-[13px] font-[500] '>
                        <Link to={"/"} className='hover:text-red-500 duration-200 leading-[24px]' >Home</Link>
                        <span className='text-[13px]  pt-[4px]'><FontAwesomeIcon icon={faAngleRight} /></span>
                        <p className='font-[400]'>Tennis</p>
                    </div>
                </div>
                {/* home > Tennis section ends here */}

                {/* Shop heading  */}
                <div className='px-[50px] 2k:px-[250px]'>
                    <h1 className='text-[40px] leading-[40px] font-oswald font-[600] text-start mb-[20px] mt-[7px]'>TENNIS</h1>
                </div>

                {/* product section starts from here  */}

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
                        <div className='w-full h-[250px]  2k:px-[250px] flex gap-x-[20px]  justify-center items-center'>
                            <h4 className='text-[30px] leading-[42px] font-[500] font-oswald'>No products were found matching your selection.</h4>
                            

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
            </main>
        </>
    )
}
