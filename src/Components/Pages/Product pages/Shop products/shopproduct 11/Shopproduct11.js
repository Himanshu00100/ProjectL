import React, { useState } from 'react'
// import "./product1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faAngleDown, faAngleRight, faChartBar, faChevronLeft, faChevronRight, faEnvelope, faHeart, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons'

// color varient images from here
import color1 from "../../../../Assets/cycling/product 1/color1.jpg"
import color2 from "../../../../Assets/cycling/product 1/color2.jpg"
import color3 from "../../../../Assets/cycling/product 1/color3.jpg"
import color4 from "../../../../Assets/cycling/product 1/color4.jpg"
import color5 from "../../../../Assets/cycling/product 1/color5.jpg"
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'



// leatest product images from here on 

import product1 from "../../../../Assets/leatest products/p1.jpg"
import product2 from "../../../../Assets/leatest products/p2.jpg"
import product3 from "../../../../Assets/leatest products/p3.jpg"
import product4 from "../../../../Assets/leatest products/p4.jpg"
import product5 from "../../../../Assets/leatest products/p5.jpg"


// best seller images from here

import bestproduct1 from "../../../../Assets/best seller/p1.jpg"
import bestproduct2 from "../../../../Assets/best seller/p2.jpg"
import bestproduct3 from "../../../../Assets/best seller/p3.jpg"
import bestproduct4 from "../../../../Assets/best seller/p4.jpg"
import bestproduct5 from "../../../../Assets/best seller/p5.jpg"



const Shopproduct11 = () => {

    // quality counter  


    let [count, setcount] = useState(1)

    const increment = () => {
        setcount(count + 1)
        if (count == 50) {
            setcount(50)
        }

    }
    const decrement = () => {
        setcount(count - 1)
        if (count == 0) {
            setcount(1)
        }
    }

    // description box from here


    // description angle up 
    const [angle, setangle] = useState("rotate-[0deg]")
    const [descriptionbox, setdescriptionbox] = useState("invisible opacity-0 hidden")
    let initial = true
    const angleup = () => {

        if (initial === true) {
            setangle("rotate-[180deg]")
            setdescriptionbox("visible opacity-[1] pt-[20px] block")
            initial = false
        } else {
            setangle("rotate-[0deg]")
            setdescriptionbox("invisible opacity-0 pt-[0px] hidden")
            initial = true
        }


    }



    // additional information angle up 


    return (
        <main className='w-screen h-auto pb-[50px]'>
            {/* home > Training > color sports tank top section from here */}
            <div className='w-full px-[50px] py-[15px] 2k:px-[250px]'>
                <div className='w-full h-[24px] bg-white flex justify-start items-center gap-x-[9px] text-[13px] font-[500] '>
                    <Link to={"/"} className='hover:text-red-500 duration-200 leading-[24px]' >Home</Link>
                    <span className='text-[13px]  pt-[4px]'><FontAwesomeIcon icon={faAngleRight} /></span>
                    <Link to={"/category/gym-accessories"} className='hover:text-red-500 duration-200 leading-[24px]' >Training Clothes</Link>
                    <span className='text-[13px]  pt-[4px]'><FontAwesomeIcon icon={faAngleRight} /></span>
                    <p className='font-[400]'>Minimalist backpack sports</p>
                </div>
            </div>
            {/* home > Training > color sports tank top section ends here */}

            <div className='w-full h-auto px-[50px] 2k:px-[250px] flex flex-col mb-[85px]'>
                {/* image and description section starts from here */}
                <div className='w-full h-auto flex '>
                    {/* color varient images from, here */}
                    <div className='w-[80px] h-[570px] bg-white flex flex-col items-center gap-y-[10px] mr-[10px]'>
                        {/* img 1 */}
                        <div className='w-[80px] h-[104.400px] border-[1px] border-white hover:border-black duration-200 bg-white overflow-hidden cursor-pointer'>
                            <img src={color1} alt='' />
                        </div>
                        {/* img 2 */}
                        <div className='w-[80px] h-[104.400px] border-[1px] border-white hover:border-black duration-200 bg-white overflow-hidden cursor-pointer'>
                            <img src={color2} alt='' />
                        </div>
                        {/* img 3 */}
                        <div className='w-[80px] h-[104.400px] border-[1px] border-white hover:border-black duration-200 bg-white overflow-hidden cursor-pointer'>
                            <img src={color3} alt='' />
                        </div>
                        {/* img 4 */}
                        <div className='w-[80px] h-[104.400px] border-[1px] border-white hover:border-black duration-200 bg-white overflow-hidden cursor-pointer'>
                            <img src={color4} alt='' />
                        </div>
                        {/* img 5 */}
                        <div className='w-[80px] h-[104.400px] border-[1px] border-white hover:border-black duration-200 bg-white overflow-hidden cursor-pointer'>
                            <img src={color5} alt='' />
                        </div>
                    </div>
                    {/* color varient images section ends here */}

                    {/* product image */}
                    <div className='w-[691.438px] h-[920.975px] bg-white overflow-hidden cursor-pointer mr-[50px]'>
                        <img src={color1} alt='' className='h-full hover:scale-125 duration-500 ease-out' />
                        <img src={color2} alt='' className='hidden h-full' />
                        <img src={color3} alt='' className='hidden h-full' />
                        <img src={color4} alt='' className='hidden h-full' />
                        <img src={color5} alt='' className='hidden h-full' />
                    </div>

                    {/* details section */}
                    <div className='w-[529.350px] h-[690.6px] font-[500] flex flex-col'>
                        <h4 className='text-[14px]  text-start mb-[7px]'>Cycling</h4>
                        <h1 className='font-oswald font-[600] text-[40px] leading-[40px] text-start mb-[10px]'>MINIMALIST BACKPACK SPORTS</h1>
                        {/* review */}
                        <div className='flex gap-x-[10px] mb-[25px]'>
                            <span className='text-[14px] font-[400]'>0 Reviews</span>
                            <span className='text-[13px] font-[500] underline decoration-1 hover:text-red-500 duration-200 cursor-pointer'>Write a review</span>
                        </div>

                        {/* brand, product code and in stock section  */}
                        <div className='flex flex-col mb-[30px] gap-y-[5px]'>
                            {/* brand */}
                            <div className='w-full flex gap-x-[60px] text-start'>
                                <span className='text-[14px] font-[400] text-start'>Brand</span>
                                <span className=' text-[14px] font-[500] '>C&A</span>
                            </div>
                            {/* product code */}
                            <div className='w-full flex gap-x-[15px] '>
                                <span className='text-[14px] font-[400] text-start'>Product code</span>
                                <span className=' text-[14px] font-[500] '>0062</span>
                            </div>
                            {/* In stock */}
                            <div className='w-full flex gap-x-[35px]'>
                                <span className='text-[14px] font-[400] text-start'>Availablity</span>
                                <span className=' text-[14px] font-[500] text-start'>10 in stock</span>
                            </div>
                        </div>

                        {/* price */}
                        <h1 className='text-[32px] leading-[1em] font-[700] text-start mb-[35px]'>$90.00</h1>
                        {/* divider */}
                        <div className='w-full h-[0.5px] bg-gray-200'></div>
                        {/* add to cart section here */}
                        <div className='w-full h-[75.6px] bg-white mt-[30px] flex flex-col mb-[20px]'>
                            <label for="" className='text-[14px] font-[400] text-start' >Quantity</label>
                            <div className='w-full h-[44px] flex mt-[10px] gap-x-[10px]'>
                                {/* counter */}
                                <div className='relative flex items-center'>
                                    <input type='button' value="-" className='absolute left-[5px] py-[7px] px-[10px] cursor-pointer' onClick={decrement} />
                                    <input type='tel' className='w-[100.400px] text-[20px] px-[30px] py-[7px] bg-gray-200 focus:outline-none border-[1px] border-white focus:border-black focus:bg-white text-center ' value={count} />
                                    <input type='button' value="+" className='absolute right-[5px] py-[7px] px-[10px] cursor-pointer' onClick={increment} />
                                </div>
                                {/* add to cart btn */}
                                <button type='submit' className='w-[418px] text-[16px] leading-[30px] text-[white] px-[40px] py-[7px] bg-black hover:bg-red-500 hover:shadow-red-500 hover:shadow-md duration-300 ease-out' >+ Add to cart</button>
                            </div>
                        </div>

                        {/* add to wishlist section */}
                        <div className='w-full flex items-center gap-x-[40px] mb-[50px]'>
                            {/* wishlist */}
                            <span className='flex items-center gap-x-[7px] text-[13px] font-[400] hover:underline  hover:text-red-500 duration-200 cursor-pointer'>
                                <FontAwesomeIcon icon={faHeart} />
                                Add to wishlist
                            </span>
                            {/* compare */}
                            <span className='flex items-center gap-x-[7px] text-[13px] font-[400] hover:underline  hover:text-red-500 duration-200 cursor-pointer'>
                                <FontAwesomeIcon icon={faChartBar} />
                                Add to compare
                            </span>
                            {/* ask about */}
                            <span className='flex items-center gap-x-[7px] text-[13px] font-[400] hover:underline  hover:text-red-500 duration-200 cursor-pointer'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                Ask about product
                            </span>
                        </div>
                        {/* divider */}
                        <div className='w-full h-[0.5px] bg-gray-200'></div>

                        {/* description box */}
                        <div className='heading w-full h-auto flex flex-col  bg-white  cursor-pointer relative ' >
                            <div className='w-full  flex justify-between items-center py-[20px] '>
                                <h4 className='text-start text-[16px] leading-[24px] font-oswald font-[600]'>DESCRIPTION</h4>
                                <FontAwesomeIcon icon={faAngleDown} className='faangle text-[10px]  duration-300 ease-in-out  ' />
                            </div>
                            {/* description content */}
                            <div className='absolute top-[64px] descriptionbox w-full h-auto cursor-default opacity-0 invisible  pt-[0px] bg-white z-[10] border-[1px] border-black py-[15px] px-[15px]    text-start text-[14px] font-[400] transition-all duration-500 ease-in-out '>
                                <p>These days you can take your own inspiration and create something new for yourself. All you need to do is read books and magazines about fashion, watch videos on youtube, keep yourself updated on social media, and of course also shop online!</p>
                            </div>
                            {/* divider */}
                            <div className='w-full h-[0.5px] bg-gray-200'></div>
                        </div>
                        {/* divider */}
                        <div className='w-full h-[0.5px] bg-gray-200'></div>
                        {/* additional info box box */}
                        {/* description box */}
                        <div className='heading w-full h-auto flex flex-col  bg-white  cursor-pointer relative ' >
                            <div className='w-full  flex justify-between items-center py-[20px] '>
                                <h4 className='text-start text-[16px] leading-[24px] font-oswald font-[600]'>ADDITIONAL INFORMATION</h4>
                                <FontAwesomeIcon icon={faAngleDown} className='faangle text-[10px]  duration-300 ease-in-out  ' />
                            </div>
                            {/* description content */}
                            <div className='absolute top-[64px] descriptionbox w-full h-auto cursor-default invisible opacity-0   pt-[0px] bg-white z-[10] border-[1px] border-black py-[15px] px-[15px]    text-start text-[14px] font-[400] transition-all duration-500 ease-in-out '>
                                {/* weight */}
                                <div className='flex flex-col'>
                                    <div className='w-full flex gap-x-[80px] text-[14px] leading-[24px] font-[400] pb-[10px]'>
                                        <span>Weight</span>
                                        <span className='font-[600]'>3 kg</span>
                                    </div>
                                </div>
                                {/* divider */}
                                <div className='w-full h-[0.5px] bg-gray-200 mb-[10px]'></div>
                                {/* dimension */}
                                <div className='flex flex-col'>
                                    <div className='w-full flex gap-x-[60px] text-[14px] leading-[24px] font-[400] pb-[10px]'>
                                        <span>Dimension</span>
                                        <span className='font-[600]'>	50 x 50 x 150 cm</span>
                                    </div>
                                </div>
                                {/* divider */}
                                <div className='w-full h-[0.5px] bg-gray-200 mb-[10px]'></div>
                                {/* size */}
                                <div className='flex flex-col'>
                                    <div className='w-full flex gap-x-[60px] text-[14px] leading-[24px] font-[400] pb-[10px]'>
                                        <span>Size clothes</span>
                                        <span className='font-[600]'>S, M, L</span>
                                    </div>
                                </div>
                                {/* divider */}
                                <div className='w-full h-[0.5px] bg-gray-200 mb-[10px]'></div>
                                {/* fabric */}
                                <div className='flex flex-col'>
                                    <div className='w-full flex gap-x-[90px] text-[14px] leading-[24px] font-[400] pb-[10px]'>
                                        <span>Fabric</span>
                                        <span className='font-[600]'>Cotton, Other, Polyester, Silk</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* divider */}
                        <div className='w-full h-[0.5px] bg-gray-200'></div>
                        {/* size and shape box */}
                        {/* description box */}
                        <div className='heading w-full h-auto flex flex-col  bg-white  cursor-pointer relative ' >
                            <div className='w-full  flex justify-between items-center py-[20px] '>
                                <h4 className='text-start text-[16px] leading-[24px] font-oswald font-[600]'>SIZE & SHAPE</h4>
                                <FontAwesomeIcon icon={faAngleDown} className='faangle text-[10px]  duration-300 ease-in-out  ' />
                            </div>
                            {/* description content */}
                            <div className='absolute top-[64px] descriptionbox w-full h-auto cursor-default invisible opacity-0  pt-[0px] bg-white z-[10] border-[1px] border-black py-[15px] px-[15px]    text-start text-[14px] font-[400] transition-all duration-500 ease-in-out '>
                                {/* size */}
                                <div className='flex flex-col'>
                                    <div className='w-full flex gap-x-[80px] text-[14px] leading-[24px] font-[400] pb-[10px]'>
                                        <span>Size</span>
                                        <span className='font-[400] flex gap-x-[35px]'>
                                            <span className='font-[400]'>XS</span>
                                            <span className='font-[400]'>S</span>
                                            <span className='font-[400]'>M</span>
                                            <span className='font-[400]'>L</span>
                                            <span className='font-[400]'>XL</span>
                                            <span className='font-[400]'>XXL</span>
                                            <span className='font-[400]'>3XL</span>

                                        </span>
                                    </div>
                                </div>
                                {/* divider */}
                                <div className='w-full h-[0.5px] bg-gray-200 mb-[10px]'></div>
                                {/* chest */}
                                <div className='flex flex-col'>
                                    <div className='w-full flex gap-x-[70px] text-[14px] leading-[24px] font-[400] pb-[10px]'>
                                        <span>Chest</span>
                                        <span className='font-[600] flex gap-x-[35px]'>
                                            <span className=''>82</span>
                                            <span className=''>88</span>
                                            <span className=''>94</span>
                                            <span className=''>100</span>
                                            <span className=''>106</span>
                                            <span className=''>114</span>
                                            <span className=''>118</span>

                                        </span>
                                    </div>
                                </div>
                                {/* divider */}
                                <div className='w-full h-[0.5px] bg-gray-200 mb-[10px]'></div>
                                {/* waist */}
                                <div className='flex flex-col'>
                                    <div className='w-full flex gap-x-[60px] text-[14px] leading-[24px] font-[400] pb-[10px]'>
                                        <span>Waist</span>
                                        <span className='font-[600] flex gap-x-[35px]'>
                                            <span className=''>64</span>
                                            <span className=''>70</span>
                                            <span className=''>76</span>
                                            <span className=''>82</span>
                                            <span className=''>88</span>
                                            <span className=''>94</span>
                                            <span className=''>99</span>
                                        </span>
                                    </div>
                                </div>
                                {/* divider */}
                                <div className='w-full h-[0.5px] bg-gray-200 mb-[10px]'></div>
                                {/* seat */}
                                <div className='flex flex-col'>
                                    <div className='w-full flex gap-x-[60px] text-[14px] leading-[24px] font-[400] pb-[10px]'>
                                        <span>Seat</span>
                                        <span className='font-[600] flex gap-x-[35px]'>
                                            <span className=''>82</span>
                                            <span className=''>88</span>
                                            <span className=''>94</span>
                                            <span className=''>100</span>
                                            <span className=''>106</span>
                                            <span className=''>114</span>
                                            <span className=''>118</span>
                                        </span>
                                    </div>
                                </div>
                                {/* divider */}
                                <div className='w-full h-[0.5px] bg-gray-200 mb-[10px]'></div>
                                {/* shoulders */}
                                <div className='flex flex-col'>
                                    <div className='w-full flex gap-x-[60px] text-[14px] leading-[24px] font-[400] pb-[10px]'>
                                        <span>Shoulders</span>
                                        <span className='font-[600] flex gap-x-[35px]'>
                                            <span className=''>64</span>
                                            <span className=''>70</span>
                                            <span className=''>76</span>
                                            <span className=''>82</span>
                                            <span className=''>88</span>
                                            <span className=''>94</span>
                                            <span className=''>99</span>
                                        </span>
                                    </div>
                                </div>
                                {/* divider */}
                                <div className='w-full h-[0.5px] bg-gray-200 mb-[10px]'></div>
                                {/* length */}
                                <div className='flex flex-col'>
                                    <div className='w-full flex gap-x-[60px] text-[14px] leading-[24px] font-[400] pb-[10px]'>
                                        <span>Length</span>
                                        <span className='font-[600] flex gap-x-[35px]'>
                                            <span className=''>55</span>
                                            <span className=''>82</span>
                                            <span className=''>98</span>
                                            <span className=''>78</span>
                                            <span className=''>96</span>
                                            <span className=''>118</span>
                                            <span className=''>99</span>
                                        </span>
                                    </div>
                                </div>


                            </div>
                            {/* divider */}
                            <div className='w-full h-[0.5px] bg-gray-200'></div>
                        </div>


                    </div>

                    {/* social media section */}
                    <div className='w-[34px] h-[190px] flex flex-col gap-y-[5px]'>
                        <FontAwesomeIcon icon={faLinkedinIn} className='text-[16px] leading-[34px] bg-gray-300 py-[8px] cursor-pointer hover:bg-sky-500 hover:text-white duration-300 ease-out' />
                        <FontAwesomeIcon icon={faFacebookF} className='text-[16px] leading-[34px] bg-gray-300 py-[8px] cursor-pointer hover:bg-blue-500 hover:text-white duration-300 ease-out' />
                        <FontAwesomeIcon icon={faInstagram} className='text-[16px] leading-[34px] bg-gray-300 py-[8px] cursor-pointer hover:bg-pink-500 hover:text-white duration-300 ease-out' />
                        <FontAwesomeIcon icon={faXTwitter} className='text-[16px] leading-[34px] bg-gray-300 py-[8px] cursor-pointer hover:bg-violet-500 hover:text-white duration-300 ease-out' />
                        <FontAwesomeIcon icon={faYoutube} className='text-[16px] leading-[34px] bg-gray-300 py-[8px] cursor-pointer hover:bg-red-500 hover:text-white duration-300 ease-out' />


                    </div>
                </div>
            </div>

            {/* divider */}
            <div className='w-full h-[0.5px] bg-gray-200 '></div>

            {/* customer review and rating section from here */}
            <div className='w-full mt-[90px] h-auto px-[50px] 2k:px-[250px]    '>

                {/* customer review section  */}
                <div className='w-full  mb-[70px] flex flex-col  items-center  '>
                    <h2 className='text-[40px] font-oswald leading-[40px] font-[600] mb-[30px] text-center  '>CUSTOMER REVIEW</h2>
                    <div className='w-[323.400px] h-[140px] flex flex-col items-center gap-y-[10px]'>
                        <div className='w-full text-[50px] leading-[1em] font-[700] text-red-500'>0.00</div>
                        <div className='text-[14px] leading-[24px] text-center'>Based on 0 reviews</div>
                        <h4 className='text-[14px] leading-[32px] font-[500] px-[30px] mt-[10px] border-[1px] border-black cursor-pointer hover:bg-black hover:text-white duration-300'>Write a review</h4>
                    </div>
                    {/* rating bar */}
                    <div className='w-[600px]   mt-[40px] flex flex-col gap-y-[10px]    '>
                        {/* 5 star bar */}
                        <div className='w-full h-[24px] flex text-[13px] items-center'>
                            <span className='text-[15px] font-[500]'>5</span>
                            <FontAwesomeIcon icon={faStar} className='mx-[7px]' />
                            <span className='w-[532px] h-[7px] bg-gray-300 ml-[5px]'></span>
                            <span className='text-[15px] font-[500] ml-[7px]'>0</span>
                        </div>
                        {/* 4 star bar */}
                        <div className='w-full h-[24px] flex text-[13px] items-center'>
                            <span className='text-[15px] font-[500]'>4</span>
                            <FontAwesomeIcon icon={faStar} className='mx-[7px]' />
                            <span className='w-[532px] h-[7px] bg-gray-300 ml-[5px]'></span>
                            <span className='text-[15px] font-[500] ml-[7px]'>0</span>
                        </div>
                        {/* 3 star bar */}
                        <div className='w-full h-[24px] flex text-[13px] items-center'>
                            <span className='text-[15px] font-[500]'>3</span>
                            <FontAwesomeIcon icon={faStar} className='mx-[7px]' />
                            <span className='w-[532px] h-[7px] bg-gray-300 ml-[5px]'></span>
                            <span className='text-[15px] font-[500] ml-[7px]'>0</span>
                        </div>
                        {/* 2 star bar */}
                        <div className='w-full h-[24px] flex text-[13px] items-center'>
                            <span className='text-[15px] font-[500]'>2</span>
                            <FontAwesomeIcon icon={faStar} className='mx-[7px]' />
                            <span className='w-[532px] h-[7px] bg-gray-300 ml-[5px]'></span>
                            <span className='text-[15px] font-[500] ml-[7px]'>0</span>
                        </div>
                        {/* 1 star bar */}
                        <div className='w-full h-[24px] flex text-[13px] items-center'>
                            <span className='text-[15px] font-[500]'>1</span>
                            <FontAwesomeIcon icon={faStar} className='mx-[7px]' />
                            <span className='w-[532px] h-[7px] bg-gray-300 ml-[5px]'></span>
                            <span className='text-[15px] font-[500] ml-[7px]'>0</span>
                        </div>
                    </div>

                </div>

                {/* review write section from here */}
                <div className='w-full px-[160.4px] mb-[100px]'>
                    {/* write your review section from here */}

                    <div className='w-full  mt-[40px] bg-white pb-[25px]  border-b-[1px] border-gray-300 flex gap-x-[25px] px-[50px] 2k:px-[250px] justify-start '>
                        <div className='key text-[20px] font-oswald font-[600] relative flex flex-col items-center   cursor-pointer'>WITH IMAGES (0)
                            <span className='underline absolute bottom-0 opacity-0  w-[1%] h-[0.8px] bg-black transition-all duration-300 ease-in-out'></span></div>

                        <div className='key text-[20px] font-oswald font-[600] relative flex flex-col items-center   cursor-pointer'>VARIFIED (0)
                            <span className='underline absolute bottom-0 opacity-0  w-[1%] h-[0.8px] bg-black transition-all duration-300 ease-in-out'></span></div>

                        <div className='key text-[20px] font-oswald font-[600] relative flex flex-col items-center   cursor-pointer'>ALL STARS (0)
                            <span className='underline absolute bottom-0 opacity-0  w-[1%] h-[0.8px] bg-black transition-all duration-300 ease-in-out'></span></div>
                    </div>

                    {/* no revies yet section */}

                    <div className='w-full h-[100px] bg-white flex justify-center items-center border-b-[0.8px] border-gray-300 mb-[50px]'>There is no reviews yet</div>
                    {/* be the first to review section */}
                    <div className='w-[1100px]  bg-white flex flex-col '>

                        {/* heading */}
                        <span className='text-[20px] leading-[28px] font-oswald font-[600] text-start mb-[30px]'>BE THE FIRST TO REVIEW </span>
                        {/* para */}
                        <p className='text-start mb-[20px]'>Your email address will not be published. Required fields are marked <span className='text-red-500'>*</span> </p>
                        {/* your rating */}
                        <div className='flex items-center gap-x-[10px] mb-[15px]'>
                            Your rating <span className='text-red-500'>*</span>
                            <div className='flex gap-x-[10px]'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                        {/* upload image */}
                        <div className='flex items-center gap-x-[10px]  mb-[20px]'>
                            <p>Choose pictures (maxsize: 50kB, max files: 2)</p>
                            <input type='file' className='h-full' />
                        </div>

                        {/* review form  */}
                        <form action='' className='w-full flex flex-col  items-start  bg-white '>
                            <div className='w-full flex gap-x-[30px] '>
                                {/* name */}
                                <label for="name" className='flex flex-col text-start gap-y-[5px]'><span className=''>Name <span className='text-red-500'>*</span></span>
                                    <input id='name' type='text' name='Name' className='w-[439.5px] h-[45px] focus:outline-none border-[1px] border-black px-[20px] py-[7px] ' placeholder='' required />
                                </label>
                                {/* email */}
                                <label for="email" className='flex flex-col text-start gap-y-[5px]'><span className=''>Email <span className='text-red-500'>*</span></span>
                                    <input id='email' type='text' name='Name' className='w-[439.5px] h-[45px] focus:outline-none border-[1px] border-black px-[20px] py-[7px] ' placeholder='' required />
                                </label>

                            </div>
                            {/* message section starts here */}
                            <div className='w-full   flex flex-col text-start gap-y-[5px] mt-[10px]'>
                                <label for="msg">Your review<span className=' text-red-500 text-[18px]  '>*</span></label>
                                <textarea id='msg' className='w-[910px] h-[148px] border-[1px] focus:outline-none border-black px-[15px] py-[12px] '></textarea>
                            </div>
                            {/* send message button */}

                            <button type='submit' className='px-[40px] py-[7px]  bg-black text-white text-start mt-[45px] text-[16px] leading-[30px] font-[500] hover:bg-red-500 duration-300'>Submit</button>
                        </form>
                    </div>
                </div>


            </div>

            <div className='w-full h-[1px] bg-gray-200 mb-[50px]'></div>

            {/* you may also like product section from here */}

            <div className='w-full px-[50px] 2k:px-[250px] flex flex-col gap-y-[30px]'>

                <div className='w-full h-auto flex flex-col'>

                    {/* heading */}
                    <h2 className='text-[40px] leading-[40px] font-oswald font-[600] mb-[25px] text-start'>
                        YOU MAY ALSO LIKE…
                    </h2>

                    {/* new arrival products section from here */}

                    <div className=' flex flex-col gap-y-[15px] 2xl:gap-y-[0px] phone:flex-row 2xl:flex-row  items-center z-0   w-full h-auto 2xl:h-[411.250px] phone:overflow-y-hidden  phone:overflow-x-scroll 2xl:overflow-x-hidden bg-white phone:gap-x-[15px]   2xl:gap-x-[20px] relative productsection transition-all duration-500  ' >


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
                            <div className='w-[268px] 2xl:w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] 2xl:gap-y-[0px] '>
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
                            <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] 2xl:gap-y-[0px] '>
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
                            <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] 2xl:gap-y-[0px]'>
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
                            <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] 2xl:gap-y-[0px] '>
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
                            <div className='w-full h-[50px] mt-[10px]  flex flex-col items-start gap-y-[5px] 2xl:gap-y-[0px] '>
                                <a href='' className='hover:text-red-500 duration-200 text-[14px] font-[500]'>Minimalist training bag</a>
                                <p>$80.00</p>
                            </div>
                        </div>

                    </div>
                    {/* new arrival products section ends here */}
                </div>

                <div className='w-full h-auto flex flex-col'>

                    {/* heading */}
                    <h2 className='text-[40px] leading-[40px] font-oswald font-[600] mb-[25px] text-start'>
                        BESTSELLERS
                    </h2>

                    {/* best seller's product section starts from here */}

                    <div className='flex flex-col gap-y-[15px] 2xl:gap-y-[0px] 2xl:flex-row  items-center z-0   w-full h-auto 2xl:h-[411.250px] bg-white   2xl:gap-x-[20px] relative productsection transition-all duration-500 '>


                        {/* product 1  */}
                        <div className='w-[80%] 2xl:w-[20%] h-full bg-white product'>
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
                    </div>

                    {/* best seller's product section ends here */}
                </div>

            </div>





        </main>
    )
}

export default Shopproduct11
