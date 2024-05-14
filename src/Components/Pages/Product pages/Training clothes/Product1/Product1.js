import React, { useState } from 'react'
import "./product1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faAngleDown, faAngleRight, faChartBar, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons'

// color varient images from here
import color1 from "../../../../Assets/training product pages/product 1/color1.jpg"
import color2 from "../../../../Assets/training product pages/product 1/color2.jpg"
import color3 from "../../../../Assets/training product pages/product 1/color3.jpg"
import color4 from "../../../../Assets/training product pages/product 1/color4.jpg"
import color5 from "../../../../Assets/training product pages/product 1/color5.jpg"
import { faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'



const Product1 = () => {

    // quality counter  


    let [count, setcount] = useState(0)

    const increment = () => {
        setcount(count + 1)
        if (count == 50) {
            setcount(50)
        }

    }
    const decrement = () => {
        setcount(count - 1)
        if (count == 0) {
            setcount(0)
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
        <main className='w-screen h-auto'>
            {/* home > Training > color sports tank top section from here */}
            <div className='w-full px-[50px] py-[15px] 2k:px-[250px]'>
                <div className='w-full h-[24px] bg-white flex justify-start items-center gap-x-[9px] text-[13px] font-[500] '>
                    <Link to={"/"} className='hover:text-red-500 duration-200 leading-[24px]' >Home</Link>
                    <span className='text-[13px]  pt-[4px]'><FontAwesomeIcon icon={faAngleRight} /></span>
                    <Link to={"/category/gym-accessories"} className='hover:text-red-500 duration-200 leading-[24px]' >Training Clothes</Link>
                    <span className='text-[13px]  pt-[4px]'><FontAwesomeIcon icon={faAngleRight} /></span>
                    <p className='font-[400]'>Color sports tank top</p>
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
                        <h4 className='text-[14px]  text-start mb-[7px]'>Men</h4>
                        <h1 className='font-oswald font-[600] text-[40px] leading-[40px] text-start mb-[10px]'>COLOR SPORTS TANK TOP</h1>
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
                                <span className=' text-[14px] font-[500] '>Christian Louboutin</span>
                            </div>
                            {/* product code */}
                            <div className='w-full flex gap-x-[15px] '>
                                <span className='text-[14px] font-[400] text-start'>Product code</span>
                                <span className=' text-[14px] font-[500] '>0051</span>
                            </div>
                            {/* In stock */}
                            <div className='w-full flex gap-x-[35px]'>
                                <span className='text-[14px] font-[400] text-start'>Availablity</span>
                                <span className=' text-[14px] font-[500] text-start'>50 in stock</span>
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
            <div className='w-full mt-[90px] h-auto px-[50px] 2k:px-[250px] flex justify-center'>
                {/* customer review section  */}
                <div className='w-[1100px] h-[376.400px] mb-[40px] flex flex-col  items-center bg-white'>
                    <h2 className='text-[40px] font-oswald leading-[40px] font-[600] mb-[30px] text-center  '>CUSTOMER REVIEW</h2>
                    <div className='w-[323.400px] h-[140px] flex flex-col items-center gap-y-[10px]'>
                        <div className='w-full text-[50px] leading-[1em] font-[700] text-red-500'>0.00</div>
                        <div className='text-[14px] leading-[24px] text-center'>Based on 0 reviews</div>
                        <h4 className='text-[14px] leading-[32px] font-[500] px-[30px] mt-[10px] border-[1px] border-black cursor-pointer hover:bg-black hover:text-white duration-300'>Write a review</h4>
                    </div>
                    {/* rating bar */}
                    <div className='w-[600px] h-[136px] bg-red-500 mt-[40px] flex flex-col'>
                        {/* 5 star bar */}
                        <div className='w-full h-[24px] flex text-[13px]'>
                            <h4></h4>

                        </div>
                    </div>
                </div>
            </div>


        </main>
    )
}

export default Product1
