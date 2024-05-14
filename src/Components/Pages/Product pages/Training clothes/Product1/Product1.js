import React from 'react'
import "./product1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faAngleRight, faChartBar, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons'

// color varient images from here
import color1 from "../../../../Assets/training product pages/product 1/color1.jpg"
import color2 from "../../../../Assets/training product pages/product 1/color2.jpg"
import color3 from "../../../../Assets/training product pages/product 1/color3.jpg"
import color4 from "../../../../Assets/training product pages/product 1/color4.jpg"
import color5 from "../../../../Assets/training product pages/product 1/color5.jpg"



const Product1 = () => {
    return (
        <main className='w-screen h-auto mb-[50px]'>
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

            <div className='w-full h-auto px-[50px] 2k:px-[250px] flex flex-col'>
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
                                    <input type='button' value="-" className='absolute left-[5px] py-[7px] px-[10px] cursor-pointer' />
                                    <input type='tel' className='w-[100.400px] text-[20px] px-[30px] py-[7px] bg-gray-200 focus:outline-none border-[1px] border-white focus:border-black focus:bg-white ' />
                                    <input type='button' value="+" className='absolute right-[5px] py-[7px] px-[10px] cursor-pointer' />
                                </div>
                                {/* add to cart btn */}
                                <button type='submit' className='w-[418px] text-[16px] leading-[30px] text-[white] px-[40px] py-[7px] bg-black hover:bg-red-500 hover:shadow-red-500 hover:shadow-md duration-300 ease-out'>+ Add to cart</button>
                            </div>
                        </div>

                        {/* add to wishlist section */}
                        <div className='w-full flex items-center gap-x-[40px]'>
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

                    </div>



                </div>
            </div>


        </main>
    )
}

export default Product1
