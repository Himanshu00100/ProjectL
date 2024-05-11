import React from 'react'
import "./about.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from "../../Header/Header"
import Footer from "../../Header/Header"
import { faAngleRight, faLeaf, faRankingStar, faSeedling, faTree } from '@fortawesome/free-solid-svg-icons'
import {  Link } from 'react-router-dom'
// import Home from '../../Home/Home'

// banner 1 image from here

import sports1 from "../../Assets/about banner 1/about-banner-1-sport.png"
import sports2 from "../../Assets/about banner 1/about-banner-2-sport.png"
import { faCalendarDays, faGem, faUser } from '@fortawesome/free-regular-svg-icons'

// sports icon images from here

import football from "../../Assets/category/footbal.png"
import basketball from "../../Assets/category/basketball.png"
import volleyball from "../../Assets/category/volleyball.png"
import rugby from "../../Assets/category/rugby.png"
import swimming from "../../Assets/category/swimming.png"
import icesketing from "../../Assets/category/icesketing.png"
import golf from "../../Assets/category/golf.png"
import skate from "../../Assets/category/skate.png"
import snowboard from "../../Assets/category/snowboard.png"
import hiking from "../../Assets/category/hiking.png"


// clothes section images from here

import cloth1 from "../../Assets/clothes/img 1.jpg"
import cloth2 from "../../Assets/clothes/img2.jpg"


//  blog section images from here

import blog1 from "../../Assets/blog/about1.jpg"
import blog2 from "../../Assets/blog/about2.jpg"
import blog3 from "../../Assets/blog/about3.jpg"

//  hero 1 video here
import hero1 from "../../Assets/hero1/h1.mp4"

// instagram section images  from here

import img1 from "../../Assets/instagram/one.jpg"
import img2 from "../../Assets/instagram/two.jpg"
import img3 from "../../Assets/instagram/three.jpg"
import img4 from "../../Assets/instagram/four.jpg"
import img5 from "../../Assets/instagram/five.jpg"
import img6 from "../../Assets/instagram/six.jpg"
import img7 from "../../Assets/instagram/seven.jpg"
import { faCottonBureau, faInstagram, faPagelines } from '@fortawesome/free-brands-svg-icons'



const About = () => {
  return (
    <>
      <main className='w-screen '>
        {/* home > About section from here */}
        <div className='w-full px-[50px] py-[15px] 2k:px-[250px]'>
          <div className='w-full h-[24px] bg-white flex justify-start items-center gap-x-[9px] text-[13px] font-[500] '>
            <Link to={"/"} className='hover:text-red-500 duration-200 leading-[24px]' >Home</Link>
            <span className='text-[13px]  pt-[4px]'><FontAwesomeIcon icon={faAngleRight} /></span>
            <p className='font-[400]'>About</p>
          </div>
        </div>
        {/* home > About section ends here */}

        {/* banner 1 section starts from here */}

        <div className='w-full h-[464px] px-[50px] 2k:px-[250px] mb-[100px] bg-white'>
          <div className='w-full h-full bg-white flex gap-x-[20px]'>
            {/* left image */}
            <div className='w-[434px] h-[425px] bg-white '>
              <img src={sports1} alt='' />
            </div>
            {/* center content */}
            <div className='w-[552.312px] h-[464px] flex flex-col  '>
              <div className='w-full h-[420px] mb-[20px]'>
                <h2 className='text-[80px] leading-[80px] font-[600] font-oswald'>WE SUPPORT <br /> FASHION AND <br /> TRY TO HELP <br /> FUTURE <br /> ATHLETE</h2>
              </div>
              <div className='w-full h-[24px]'>
                <p className='text-[20px] leading-[24px] '>Find out what is happening with us</p>
              </div>
            </div>
            {/* right image */}
            {/* left image */}
            <div className='w-[434px] h-[425px] bg-white '>
              <img src={sports2} alt='' />
            </div>
          </div>
        </div>

        {/* banner 1 section ends here */}

        {/* trend quality and eco section from here */}
        <div className='w-full h-[201.4px] px-[50px] 2k:px-[250px] mb-[100px] flex gap-x-[25px] bg-white'>
          {/* trend section starts from here */}
          <div className='w-[460px] pr-[20px] h-full '>
            {/* trend section */}
            <div className='w-full h-full bg-white flex flex-col gap-y-[20px]'>
              <div className='w-full h-[58.400px] flex justify-center items-center text-[52px] bg-white'>
                <FontAwesomeIcon icon={faRankingStar} />
              </div>
              <h3 className='text-[22px] leading-[24px] font-oswald font-[600]'>WITH THE NEW FASHION TRENDS.</h3>
              <p className='text-[16px] leading-[28px]'>
                We use eco-friendly materials, sustainable fabrics, recycled material. We make sure that the supply chain is sustainable.
              </p>
            </div>
          </div>
          {/* quality section starts from here */}
          <div className='w-[460px] px-[20px] h-full border-x-[1px] border-gray-200 '>
            <div className='w-full h-full bg-sky-500 '>
              {/* quality section */}
              <div className='w-full h-full bg-white flex flex-col gap-y-[20px]'>
                <div className='w-full h-[58.400px] flex justify-center items-center text-[52px] bg-white'>
                  <FontAwesomeIcon icon={faGem} />
                </div>
                <h3 className='text-[22px] leading-[24px] font-oswald font-[600]'>BEST QUALITY MATERIALS</h3>
                <p className='text-[16px] leading-[28px]'>
                  We weave the cloth, make up the patterns and bring the final product to life.
                </p>
              </div>
            </div>
          </div>
          {/* eco section starts from here */}
          <div className='w-[460px] pl-[20px] h-full '>
            <div className='w-full h-full bg-sky-500'>
              {/* eco section */}
              <div className='w-full h-full bg-white flex flex-col gap-y-[20px]'>
                <div className='w-full h-[58.400px] flex justify-center items-center text-[52px] bg-white'>
                  <FontAwesomeIcon icon={faLeaf} />
                </div>
                <h3 className='text-[22px] leading-[24px] font-oswald font-[600]'>100% ECO</h3>
                <p className='text-[16px] leading-[28px]'>
                  We, in partnership with the Green Fashion initiative from the Department of Design and Fashion Technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* trend quality and eco section from here */}

        {/* sports icon section starts from here */}
        <div className='w-full h-[48px] px-[50px] 2k:px-[250px] mb-[100px]'>
          <div className='w-full h-full bg-white flex justify-center items-center'>
            <div className='flex items-center justify-center gap-x-[30px]'>
              <div className='w-[150px] h-[0.8px] bg-gray-200'></div>
              <div className='flex gap-x-[35px] bg-white'>
                <img src={football} alt='' className='w-[48px]' />
                <img src={basketball} alt='' className='w-[48px]' />
                <img src={volleyball} alt='' className='w-[48px]' />
                <img src={football} alt='' className='w-[48px]' />
                <img src={swimming} alt='' className='w-[48px]' />
                <img src={icesketing} alt='' className='w-[48px]' />
                <img src={golf} alt='' className='w-[48px]' />
                <img src={skate} alt='' className='w-[48px]' />
                <img src={snowboard} alt='' className='w-[48px]' />
                <img src={hiking} alt='' className='w-[48px]' />
              </div>
              <div className='w-[150px] h-[0.8px] bg-gray-200'></div>
            </div>
          </div>
        </div>

        {/* sports icon section ends here */}

        {/* sports banner section from here */}
        <div className='w-full h-[386px] px-[50px] 2k:px-[250px]  mb-[100px]'>
          <div className='w-full h-full bg-white flex flex-col  items-center gap-y-[40px] '>
            <h2 className='text-[80px] leading-[80px] font-[600] font-oswald'>+50 SPORTS <br /> IN ONE PLACE!</h2>
            <h2 className='text-[40px] leading-[40px] font-[600] font-oswald '>WE PLACE EMPHASIS ON THE FACT THAT THE CLOTHES LAST FOR  <br /> YEARS. WE CHOOSE THE BEST QUALITY MATERIALS.</h2>
            <p className='text-[16px] leading-[28px] font-[400]'> We place emphasis on the fact that the clothes last for years. We choose the best quality materials. Thats why our products are the best</p>
          </div>
        </div>
        {/* sports banner sectionm ends here */}

        {/* post hero section starts from here */}

        <div className='w-full h-[514.025px] bg-white mb-[100px] px-[50px] 2k:px-[250px] flex flex-col'>
          <div className='w-full h-[257.01px] bg-white flex'>
            <div className='w-[355.2px] h-full bg-white flex justify-center items-center '>
              {/* box 1 */}
              <div className='flex flex-col'>
                <h2 className='text-[80px] font-[600] font-oswald'>25</h2>
                <p className='w-[200px]'>years of experience in the clothing industry</p>
              </div>
            </div>
            {/* box 2 */}
            <div className='w-[355.2px] h-full flex justify-center items-center overflow-hidden '>
              <img src={img2} alt='' className='h-full scale-[1.39]' />
            </div>
            <div className='w-[355.2px] h-full bg-white flex justify-center items-center '>
              {/* box 3 */}
              <div className='flex flex-col'>
                <h2 className='text-[80px] font-[600] font-oswald'>+100M</h2>
                <p className='w-[200px]'>items of clothing sold annually</p>
              </div>
            </div>
            {/* box 4 */}
            <div className='w-[355.2px] h-full flex justify-center items-center overflow-hidden '>
              <img src={img6} alt='' className='h-full scale-[1.39]' />
            </div>
          </div>
          <div className='w-full h-[257.01px] bg-white flex'>
            {/* box 5 */}
            <div className='w-[355.2px] h-full flex justify-center items-center overflow-hidden '>
              <img src={img4} alt='' className='h-full scale-[1.39]' />
            </div>
            <div className='w-[355.2px] h-full bg-white flex justify-center items-center'>
              {/* box 6 */}
              <div className='flex flex-col'>
                <h2 className='text-[80px] font-[600] font-oswald'>+200</h2>
                <p className='w-[200px]'>showrooms around the world</p>
              </div>
            </div>
            {/* box 7 */}
            <div className='w-[355.2px] h-full flex justify-center items-center overflow-hidden '>
              <img src={img7} alt='' className='h-full scale-[1.39]' />
            </div>
            <div className='w-[355.2px] h-full bg-white flex justify-center items-center'>
              {/* box 8 */}
              <div className='flex flex-col'>
                <h2 className='text-[80px] font-[600] font-oswald'>+100M</h2>
                <p className='w-[200px]'>items of clothing sold annually</p>
              </div>
            </div>
          </div>
        </div>

        {/* post hero section ends here */}

        {/* a divider here */}
        <div className='w-full py-[10px]  mb-[100px]'>
          <div className='w-full h-[0.8px] bg-gray-300'></div>
        </div>

        {/* clothes section starts from here */}

        <div className='w-full h-[40px] px-[50px] 2k:px-[250px] mb-[40px]'>
          <h3 className='text-[40px] leading-[40px] font-oswald font-[600] text-start'>WE MAKE CLOTHES FOR THE MARKET.</h3>
        </div>

        <div className='w-full h-[801.150px] px-[50px] 2k:px-[250px] mb-[100px]'>
          <div className='w-full h-full bg-white flex justify-between'>
            <div className='w-[680.400px] h-full bg-white'>
              {/* image 1 */}
              <div className='w-full h-[425.150px] mb-[45px] bg-white flex justify-center items-center overflow-hidden' >
                <img src={cloth1} alt='' className='' />
              </div>
              {/* content 1 */}
              <div className='w-full h-full flex flex-col gap-y-[30px]'>
                <h2 className='text-[40px] leading-[40px] font-[600] font-oswald text-start'>WE DESIGN CLOTHES <br /> THAT WE WANT TO WEAR OURSELVES</h2>
                <p className='text-start'>Aliquam tincidunt augue sit amet sapien placerat, pretium luctus arcu blandit. Fusce commodo diam mauris, vel finibus purus porta gravida. Mauris sollicitudin ipsum ac vehicula ultricies.</p>
                <div className='flex flex-col gap-y-[20px]'>
                  {/* #1 */}
                  <div className='flex justify-start items-center text-[18px] gap-x-[10px]'>
                    <FontAwesomeIcon icon={faCottonBureau} className='text-[20px]' />
                    <p className='text-[16px]'>With the new fashion trends</p>
                  </div>
                  {/* #2 */}
                  <div className='flex justify-start items-center text-[18px] gap-x-[10px]'>
                    <FontAwesomeIcon icon={faPagelines} className='text-[20px]' />
                    <p className='text-[16px]'>We care for the environment at every stage of production</p>
                  </div>
                  {/* #3 */}
                  <div className='flex justify-start items-center text-[18px] gap-x-[10px]'>
                    <FontAwesomeIcon icon={faTree} className='text-[20px]' />
                    <p className='text-[16px]'>Best quality materials</p>
                  </div>
                  
                </div>
                
              </div>
            </div>
            <div className='w-[680.400px] h-full bg-white '>
              {/* image 2 */}
              <div className='w-full h-[425.150px] bg-white mb-[45px] flex justify-center items-center overflow-hidden'>
                <img src={cloth2} alt='' className='' />
              </div>
              {/* content 2 */}
              <div className='w-full h-full flex flex-col gap-y-[30px]'>
                <h2 className='text-[40px] leading-[40px] font-[600] font-oswald text-start'>WE PLACE EMPHASIS ON THE FACT THAT THE CLOTHES LAST FOR YEARS. WE CHOOSE THE BEST QUALITY MATERIALS.</h2>
                <p className='text-start'>Aliquam tincidunt augue sit amet sapien placerat, pretium luctus arcu blandit. Fusce commodo diam mauris, vel finibus purus porta gravida. Mauris sollicitudin ipsum ac vehicula ultricies.</p>
              </div>
            </div>
          </div>
        </div>


        {/* clothes section ends here */}

        {/* From the blog section starts from here */}

        <div className='w-screen flex  sm:h-[442.487px] mb-[50px] sm:mb-[100px] white  sm:px-[50px] 2k:px-[250px] flex-col gap-y-[25px]  '>
          <h2 className='text-[40px] leading-[40px] font-oswald font-[600] sm:text-start'>FROM THE BLOG</h2>

          <div className='w-full 2xl:h-[442.487px] flex flex-col sm:flex-row gap-y-[20px] sm:overflow-x-auto 2k:overflow-x-hidden'>

            {/* blog 1 from here */}
            <div className='flex'>
              <div className=' sm:h-[349.487px] bg-white sm:pr-[40px] border-r-[1px] border-gray-200 flex flex-col gap-y-[20px]'>

                {/* blog image 1 */}
                <div className='sm:w-[420.325px] sm:h-[242.488px] overflow-hidden bg-green-500 flex justify-center items-center '>
                  <img src={blog1} alt='' className=' sm:hover:scale-[1.20] duration-[400ms] ease-out' />
                </div>
                <div className='w-full h-[92px] bg-white pl-[15px] sm:pl-[0px]  flex flex-col gap-y-[5px]'>
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
                    <h4 className='text-[15px] sm:text-[20px] leading-[20px] font-[500] 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>19 Effective Cardio Excercise for Gym</h4>
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
                <div className='w-full h-[92px] bg-white pl-[15px] sm:pl-[0px] flex flex-col gap-y-[5px] '>
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
                    <h4 className='text-[15px] sm:text-[20px] leading-[20px] font-[500] 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>The health benefits of ice-skating</h4>
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
                <div className='w-full h-[92px] bg-white flex flex-col gap-y-[5px]'>
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
                    <h4 className='text-[20px] leading-[20px] font-[500] 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-nowrap'>Badminton Rules - How to Score Perfectly </h4>
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

        {/* video hero section from here */}

        <div className='w-full h-[330.600px] md:h-[403.600px] lg:h-[800px]  flex  bg-white   justify-center items-center overflow-hidden relative'>
          <video src={hero1} className='video h-full scale-300 phone:scale-150 md:scale-150 lg:scale-150 2xl:scale-140 2k:scale-135  ' loop autoPlay muted>
          </video>
          {/* text inside hero section starts from here */}
          <div className='absolute left-[10px] md:left-[50px] top-[150px] lg:left-[50px] 2k:left-[250px] flex flex-col justify-center   items-start gap-y-[18.5px] lg:gap-y-8'>
            <h1 className=' text-white font-oswald text-[50px] leading-[50px] md:text-[60px] md:leading-[60px] lg:text-[130px]  lg:leading-[130px] font-[600] text-start '>READY<br />STEADY <br />GO!</h1>
            <h2 className='text-[16px] lg:text-[20px] text-white '>Get eady for the running eason</h2>
            <a href="" className='hidden text-black bg-white text-[14px] md:text-[18px]  px-[30px] py-[5px] lg:px-[40px] lg:py-[10px] mt-[10px] lg:mt-0 lg:font-semibold hover:bg-transparent hover:text-white border-[1px] border-white duration-200 ease-out ' >Shop now</a>
          </div>
          {/* text inside hero section ends here */}

        </div>

        {/* video hero section ends here */}

        {/* instagram section from here */}

        <div className='w- hidden 2xl:flex flex-col sm:flex-row h-auto 2xl:h-[464px] bg-[#f1f1f1] 2xl:px-[50px] 2k:px-[250px]  justify-center items-center '>
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


      </main>
    </>
  )
}

export default About
