import React from 'react'
import "./shop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'

// leatest product images from here on 

import product1 from "../../Assets/leatest products/p1.jpg"
import product2 from "../../Assets/leatest products/p2.jpg"
import product3 from "../../Assets/leatest products/p3.jpg"
import product4 from "../../Assets/leatest products/p4.jpg"
import product5 from "../../Assets/leatest products/p5.jpg"
import { faCalendarDays, faChartBar, faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faAngleUp, faChevronLeft, faChevronRight, faMagnifyingGlass, faPersonSkating, faPersonSkiing, faPersonSnowboarding } from '@fortawesome/free-solid-svg-icons'

// best seller images from here

import bestproduct1 from "../../Assets/best seller/p1.jpg"
import bestproduct2 from "../../Assets/best seller/p2.jpg"
import bestproduct3 from "../../Assets/best seller/p3.jpg"
import bestproduct4 from "../../Assets/best seller/p4.jpg"
import bestproduct5 from "../../Assets/best seller/p5.jpg"

// onsale products

import saleproduct1 from "../../Assets/onsale products/p1.jpg"
import saleproduct2 from "../../Assets/onsale products/p2.jpg"
import saleproduct3 from "../../Assets/onsale products/p3.jpg"
import saleproduct4 from "../../Assets/onsale products/p4.jpg"
import saleproduct5 from "../../Assets/onsale products/p5.jpg"


const Shop = () => {
  return (
    <>
      <main className='w-screen h-auto'>
        {/* home > Shop section from here */}
        <div className='w-full px-[50px] py-[15px] 2k:px-[250px]'>
          <div className='w-full h-[24px] bg-white flex justify-start items-center gap-x-[9px] text-[13px] font-[500] '>
            <Link to={"/"} className='hover:text-red-500 duration-200 leading-[24px]' >Home</Link>
            <span className='text-[13px]  pt-[4px]'><FontAwesomeIcon icon={faAngleRight} /></span>
            <p className='font-[400]'>Shop</p>
          </div>
        </div>
        {/* home > Shop section ends here */}

        {/* Shop heading  */}
        <div className='px-[50px] 2k:px-[250px]'>
          <h1 className='text-[40px] leading-[40px] font-oswald font-[600] text-start mb-[20px]'>SHOP</h1>
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
                <div className='tab flex flex-col justify-center items-center relative   cursor-pointer   '>
                  <div className=' flex justify-center items-center gap-x-[3px]'>
                    <h3 className='text-[16px] leading-[34px] font-[600]'>Categories</h3>
                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px] ' />
                  </div>
                  <span className='underline absolute bottom-[4px] w-[1%] opacity-0  bg-black h-[0.5px] transition-all duration-300 ease-out '></span>
                </div>
                {/* category ends here */}

                {/* color */}
                <div className='tab flex flex-col justify-center items-center relative   cursor-pointer   '>
                  <div className=' flex justify-center items-center gap-x-[3px]'>
                    <h3 className='text-[16px] leading-[34px] font-[600]'>Color</h3>
                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px]' />
                  </div>
                  <span className='underline absolute bottom-[4px] w-[1%] opacity-0  bg-black h-[0.5px] transition-all duration-300 ease-out '></span>
                </div>
                {/* color ends here */}

                {/* size */}
                <div className='tab flex flex-col justify-center items-center relative   cursor-pointer   '>
                  <div className=' flex justify-center items-center gap-x-[3px]'>
                    <h3 className='text-[16px] leading-[34px] font-[600]'>Size</h3>
                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px]' />
                  </div>
                  <span className='underline absolute bottom-[4px] w-[1%] opacity-0  bg-black h-[0.5px] transition-all duration-300 ease-out '></span>
                </div>
                {/* size ends here */}

                {/* fabric */}
                <div className='tab flex flex-col justify-center items-center relative   cursor-pointer   '>
                  <div className=' flex justify-center items-center gap-x-[3px]'>
                    <h3 className='text-[16px] leading-[34px] font-[600]'>Fabric</h3>
                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px]' />
                  </div>
                  <span className='underline absolute bottom-[4px] w-[1%] opacity-0  bg-black h-[0.5px] transition-all duration-300 ease-out '></span>
                </div>
                {/* fabric ends here */}

                {/* brands */}
                <div className='tab flex flex-col justify-center items-center relative   cursor-pointer   '>
                  <div className=' flex justify-center items-center gap-x-[3px]'>
                    <h3 className='text-[16px] leading-[34px] font-[600]'>Brands</h3>
                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px]' />
                  </div>
                  <span className='underline absolute bottom-[4px] w-[1%] opacity-0  bg-black h-[0.5px] transition-all duration-300 ease-out '></span>
                </div>
                {/* brands ends here */}

                {/* price */}
                <div className='tab flex flex-col justify-center items-center relative   cursor-pointer   '>
                  <div className=' flex justify-center items-center gap-x-[3px]'>
                    <h3 className='text-[16px] leading-[34px] font-[600]'>Price</h3>
                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px] ' />
                  </div>
                  <span className='underline absolute bottom-[4px] w-[1%] opacity-0  bg-black h-[0.5px] transition-all duration-300 ease-out '></span>


                </div>
                {/* price ends here */}

                {/* ratings */}
                <div className='tab flex flex-col justify-center items-center relative   cursor-pointer   '>
                  <div className=' flex justify-center items-center gap-x-[3px]'>
                    <h3 className='text-[16px] leading-[34px] font-[600]'>Ratings</h3>
                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[3px]' />
                  </div>
                  <span className='underline absolute bottom-[4px] w-[1%] opacity-0  bg-black h-[0.5px] transition-all duration-300 ease-out '></span>
                  {/* ratingdropdown */}
                  <div className='absolute left-[0px] top-[40px] w-[200px]  bg-white border-[1px] border-black z-[10] p-[20px] '>
                    <div className='w-full h-full flex flex-col gap-y-[15px]'>
                      <div className='w-[158.4px] h-[20px] bg-green-500 flex '>
                        <div className='w-[20px] h-[20px] border-[1px] border-black'></div>
                      </div>
                      <div className='w-[158.4px] h-[20px] bg-green-500 flex '></div>
                    </div>
                  </div>
                </div>
                {/* ratings ends here */}
              </div>
              {/* right filter */}
              <div className="w-[298.887px] h-full white flex items-center justify-between gap-x-[10px]">
                {/* sort by laeates  */}
                <div className='w-[183px] h-[32px] bg-white border-[1px] border-black  flex justify-center items-center gap-x-[10px] cursor-pointer'>
                  <p className='text-[13px] font-normal'>Sort by</p>
                  <div className='flex gap-x-[5px] justify-center items-center'>
                    <h3 className='text-[13px] font-[600] leading-[32px]'>Sort by lateast</h3>
                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[2px] ' />
                  </div>
                </div>
                {/* sort by no. */}
                <div className='w-auto px-[15px] h-[32px] bg-white border-[1px] border-black  flex justify-center items-center gap-x-[10px] cursor-pointer'>
                  <p className='text-[13px] font-normal text-nowrap'>Sort by</p>
                  <div className='flex gap-x-[5px] justify-center items-center'>
                    <h3 className='text-[13px] font-[600] leading-[32px]'>20</h3>
                    <FontAwesomeIcon icon={faAngleDown} className='text-[12px] mt-[2px] ' />
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
              {/* section 1 ends  here */}

              {/* section 2 starts from here*/}

              <div className='flex flex-col gap-y-[15px] 2xl:gap-y-[0px] 2xl:flex-row mb-[40px]  items-center z-0   w-full h-auto 2xl:h-[411.250px] bg-white   2xl:gap-x-[20px] relative productsection transition-all duration-500 '>

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

              {/* section 2 ends here */}

              {/* section 3 starts from here */}

              <div className=' flex flex-col gap-y-[15px] 2xl:gap-y-[0px] 2xl:flex-row mb-[40px] items-center z-0   w-full h-auto 2xl:h-[411.250px] bg-white   2xl:gap-x-[20px] relative productsection transition-all duration-500 '>

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
              {/* section 3 ends here */}

              {/* section 4 starts from here */}
              <div className=' flex flex-col gap-y-[15px] 2xl:gap-y-[0px] 2xl:flex-row mb-[40px] items-center z-0   w-full h-auto 2xl:h-[411.250px] bg-white   2xl:gap-x-[20px] relative productsection transition-all duration-500 '>

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
              </div>
              {/* section 4 ends here */}

              {/* pagination from here*/}
              <div className='w-full h-[55.6px] bg-white  flex justify-center items-center'>
                <div className='w-[308.63px] h-full flex  items-center gap-x-[10px]'>
                  <span className='text-white text-[14px] font-[500] bg-black w-[46px] h-[46px]  flex justify-center items-center cursor-pointer '>1</span>
                  <span className='text-black text-[14px] font-[500] bg-white border-[1px] border-gray-300 w-[46px] h-[46px]  flex justify-center items-center hover:border-black duration-300 cursor-pointer' >2</span>
                  <span className='text-black text-[14px] font-[500] bg-white border-[1px] border-gray-300 w-[46px] h-[46px]  flex justify-center items-center hover:border-black duration-300 cursor-pointer' >3</span>
                  <span className='text-black text-[16px] font-[500] bg-white border-[1px] border-gray-300 w-[140.63px] h-[46px]  flex justify-center items-center hover:border-black duration-300 cursor-pointer' >Next page</span>
                </div>
                {/* pagination ends here */}
              </div>


            </div>



            {/* product section ends here */}

          </div>
        </div>
      </main>

    </>
  )
}

export default Shop