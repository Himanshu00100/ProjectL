import React, { useState } from 'react'
import "./blog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faAngleRight, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons'

// all blogs section 1 image

// page 1 images from here

// section 1
import left from "../../Assets/blog/about1.jpg"
import right from "../../Assets/blog/about2.jpg"


//  section 2 images
import blog1 from "../../Assets/blog/about1.jpg"
import blog2 from "../../Assets/blog/blog 1.jpg"
import blog3 from "../../Assets/blog/gym wear.jpg"

// section 3 images
import s3img1 from "../../Assets/blog/tennis.jpg"
import s3img2 from "../../Assets/blog/pilates.jpg"
import s3img3 from "../../Assets/blog/workout.jpg"

// section 4 images
import s4img1 from "../../Assets/blog/marathon.jpg"
import s4img2 from "../../Assets/blog/shoes.jpg"
import s4img3 from "../../Assets/blog/baskeyball.jpg"

// section 5 
import s5img1 from "../../Assets/blog/races.jpg"
import s5img2 from "../../Assets/blog/activewear.jpg"
import s5img3 from "../../Assets/blog/trainer.jpg"

// page 2 section 1 images

// section 1
import p2s11 from "../../Assets/blog/muscle.jpg"
import p2s12 from "../../Assets/blog/yogapose.jpg"

// section 2 images 
import p2s21 from "../../Assets/blog/fitness.jpg"
import p2s22 from "../../Assets/blog/injuries.jpg"
import p2s23 from "../../Assets/blog/stylish.jpg"



const Blog = () => {

  // tabs and page switch

  const [allblog, setallblog] = useState("activetab")
  const [fashion, setfashion] = useState("inactivetab")
  const [gallery, setgallery] = useState("inactivetab")
  const [arrival, setarrival] = useState("inactivetab")
  const [sport, setsport] = useState("inactivetab")
  const [sporting, setsporting] = useState("inactivetab")
  const [Video, setvideo] = useState("inactivetab")

  const tab1 = () => {
    setallblog("activetab")
    setfashion("inactivetab")
    setgallery("inactivetab")
    setarrival("inactivetab")
    setsport("inactivetab")
    setsporting("inactivetab")
    setvideo("inactivetab")

  }

  const tab2 = () => {
    setallblog("inactivetab")
    setfashion("activetab")
    setgallery("inactivetab")
    setarrival("inactivetab")
    setsport("inactivetab")
    setsporting("inactivetab")
    setvideo("inactivetab")

  }
  const tab3 = () => {
    setallblog("inactivetab")
    setfashion("inactivetab")
    setgallery("activetab")
    setarrival("inactivetab")
    setsport("inactivetab")
    setsporting("inactivetab")
    setvideo("inactivetab")

  }
  const tab4 = () => {
    setallblog("inactivetab")
    setfashion("inactivetab")
    setgallery("inactivetab")
    setarrival("activetab")
    setsport("inactivetab")
    setsporting("inactivetab")
    setvideo("inactivetab")

  }

  const tab5 = () => {
    setallblog("inactivetab")
    setfashion("inactivetab")
    setgallery("inactivetab")
    setarrival("inactivetab")
    setsport("activetab")
    setsporting("inactivetab")
    setvideo("inactivetab")

  }

  const tab6 = () => {
    setallblog("inactivetab")
    setfashion("inactivetab")
    setgallery("inactivetab")
    setarrival("inactivetab")
    setsport("inactivetab")
    setsporting("activetab")
    setvideo("inactivetab")

  }

  const tab7 = () => {
    setallblog("inactivetab")
    setfashion("inactivetab")
    setgallery("inactivetab")
    setarrival("inactivetab")
    setsport("inactivetab")
    setsporting("inactivetab")
    setvideo("activetab")

  }






  // all blog posts from here

  const [page1status, setpage1status] = useState("activepage")
  const [page2status, setpage2status] = useState("inactivepage")

  const activepage1 = () => {
    setpage1status("activepage")
    setpage2status("inactivepage")
  }

  const activepage2 = () => {
    setpage1status("inactivepage")
    setpage2status("activepage")
  }

  // 





  return (

    <main className='w-screen '>
      {/* Home > Blog section from here */}
      <div className='w-full px-[50px] py-[15px] 2k:px-[250px]'>
        <div className='w-full h-[24px] bg-white flex justify-start items-center gap-x-[9px] text-[13px] font-[500] '>
          <Link to={"/"} className='hover:text-red-500 duration-200 leading-[24px]' >Home</Link>
          <span className='text-[13px]  pt-[4px]'><FontAwesomeIcon icon={faAngleRight} /></span>
          <p className='font-[400]'>Blog</p>
        </div>
      </div>
      {/* Home > Blog section ends here */}

      {/* heading */}
      <div className='w-full h-[84px] mt-[15px] mb-[30px] px-[50px] 2k:px-[250px]'>
        <h3 className='text-[30px] font-[600] leading-[42px] font-oswald text-start'>News about our company <br /> and fashion world!</h3>
      </div>

      {/* blog tabs */}

      <div className='w-full mt-[30px] mb-[50px] px-[50px] 2k:px-[250px]'>
        {/* blog tabs */}
        <div className='w-full h-[20px] mb-[50px] '>
          <ul className='flex gap-x-[35px] '>
            <li onClick={tab1} className=' tab text-[16px] font-[600] leading-[20px] items-center gap-y-[2px] font-oswald cursor-pointer hover:text-red-500 duration-300 flex flex-col'>
              <Link to={"/blog"}>ALL BLOG POSTS</Link>
              <span className={'underline w-[1%] opacity-0  bg-red-500 h-[0.5px] transition-all duration-300 ease-out ' + allblog}></span>
            </li>
            <li onClick={tab2} className='tab text-[16px] font-[600] leading-[20px] items-center gap-y-[2px] font-oswald cursor-pointer hover:text-red-500 duration-300 flex flex-col'>
              <Link to={"/blog/blog-fashion"}>FASHION</Link>
              <span className={'underline w-[1%] opacity-0  bg-red-500 h-[0.5px] transition-all duration-300 ease-out '+ fashion}></span></li>
            <li onClick={tab3} className='tab text-[16px] font-[600] leading-[20px] items-center gap-y-[2px] font-oswald cursor-pointer hover:text-red-500 duration-300 flex flex-col'>
              <Link to={"/blog-gallery"}>GALLERY</Link>
              <span className={'underline w-[1%] opacity-0  bg-red-500 h-[0.5px] transition-all duration-300 ease-out '+ gallery}></span></li>
            <li onClick={tab4} className='tab text-[16px] font-[600] leading-[20px] items-center gap-y-[2px] font-oswald cursor-pointer hover:text-red-500 duration-300 flex flex-col'>
              <Link to={"/blog-new-arrival"}>NEW ARRIVALS</Link>
              <span className={'underline w-[1%] opacity-0  bg-red-500 h-[0.5px] transition-all duration-300 ease-out ' + arrival}></span></li>
            <li onClick={tab5} className='tab text-[16px] font-[600] leading-[20px] items-center gap-y-[2px] font-oswald cursor-pointer hover:text-red-500 duration-300 flex flex-col'>
              <Link to={"blog-sport"}>SPORT</Link>
              <span className={'underline w-[1%] opacity-0  bg-red-500 h-[0.5px] transition-all duration-300 ease-out ' + sport}></span></li>
            <li onClick={tab6} className='tab text-[16px] font-[600] leading-[20px] items-center gap-y-[2px] font-oswald cursor-pointer hover:text-red-500 duration-300 flex flex-col'>
              <Link to={"blog-sporting-goods"}>SPORTING GOODS</Link>
              <span className={'underline w-[1%] opacity-0  bg-red-500 h-[0.5px] transition-all duration-300 ease-out ' + sporting}></span></li>
            <li onClick={tab7} className='tab text-[16px] font-[600] leading-[20px] items-center gap-y-[2px] font-oswald cursor-pointer hover:text-red-500 duration-300 flex flex-col'>
              <Link to={"category/video"}>VIDEO</Link>
              <span className={'underline w-[1%] opacity-0  bg-red-500 h-[0.5px] transition-all duration-300 ease-out ' + Video}></span></li>
          </ul>
        </div>

        {/*all blog sections starts from here */}
        <div className='w-full h-auto  '>
          {/* page 1 from here */}
          <div className={'w-full h-auto transition-all duration-500  ' + page1status}>
            {/* section 1 */}
            <div className='w-full h-[487.987px] bg-white flex justify-between mb-[50px] '>
              <div className='w-[660.388px] h-[487.987px] bg-white'>
                {/* left image */}
                <div className='w-full h-[380.978px] overflow-hidden'>
                  <img src={left} alt='' className=' hover:scale-[1.15] duration-300 ease-out' />
                </div>
                {/* left content */}
                <div className='w-full h-[92px] bg-white pl-[15px] sm:pl-[0px] pt-[15px]  flex flex-col gap-y-[5px]'>
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
                    <h4 className='text-[15px] sm:text-[20px] leading-[28px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>19 EFFECTIVE CARDIO EXERCISES FOR A GYM</h4>
                  </div>
                  {/* readmore  */}
                  <div className='w-full h-[24px] flex justify-start bg-white '>
                    <a href='#' className=' text-start underline underline-offset-0 hover:text-red-500 duration-200 hover:underline hover:underline-offset-2'>Read more</a>
                  </div>
                </div>
              </div>
              <div className=' h-full px-[10px] '>
                <div className='w-[0.5px] h-full bg-gray-200'></div>
              </div>
              <div className='w-[660.388px] h-[487.987px] bg-white'>
                {/* right image */}
                <div className='w-full h-[380.978px] overflow-hidden'>
                  <img src={right} alt='' className='hover:scale-[1.15] duration-300 ease-out' />
                </div>
                {/* right content */}
                <div className='w-full h-[92px] bg-white pl-[15px] sm:pl-[0px] pt-[15px]  flex flex-col gap-y-[5px]'>
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
                    <h4 className='text-[15px] sm:text-[20px] leading-[28px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>THE HEALTH BENEFITS OF ICE-SKATING</h4>
                  </div>
                  {/* readmore  */}
                  <div className='w-full h-[24px] flex justify-start bg-white '>
                    <a href='#' className=' text-start underline underline-offset-0 hover:text-red-500 duration-200 hover:underline hover:underline-offset-2'>Read more</a>
                  </div>
                </div>
              </div>
            </div>
            {/* section 1 ends here */}

            {/* section 2 from here */}
            <div className='w-full 2xl:h-[442.487px] flex flex-col sm:flex-row gap-y-[20px] sm:overflow-x-auto 2k:overflow-x-hidden'>

              {/* blog 1 from here */}
              <div className='flex'>
                <div className=' sm:h-[349.487px] bg-white sm:pr-[40px] border-r-[1px] border-gray-200 flex flex-col gap-y-[20px]'>

                  {/* blog image 1 */}
                  <div className='sm:w-[420.325px] sm:h-[242.488px] overflow-hidden bg-green-500 flex justify-center items-center '>
                    <img src={blog3} alt='' className=' sm:hover:scale-[1.20] duration-[400ms] ease-out' />
                  </div>
                  <div className='w-full h-[92px] bg-white pl-[15px] sm:pl-[0px]  flex flex-col gap-y-[5px]'>
                    <div className='w-full  bg-white flex flex-col gap-x-[10px] gap-y-[10px] '>
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
                      <h4 className='text-[15px] sm:text-[20px] leading-[28px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>Badminton Rules - How to Score Perfectly</h4>
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
                    <div className='w-full  bg-white flex flex-col gap-x-[10px] gap-y-[10px]'>
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
                      <h4 className='text-[15px] sm:text-[20px] leading-[28px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>RANKING OF THE BEST TENNIS RACKETS IN YEAR</h4>
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
                    <div className='w-full  bg-white flex flex-col gap-x-[10px] gap-y-[10px]'>
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
                      <h4 className='text-[20px] leading-[20px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-nowrap 2xl:text-wrap'>GYM WEAR, FITNESS CLOTHING & ACTIVE-WEAR</h4>
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
            {/* section 2 ends here */}

            {/* section 3 starts from here */}
            <div className='w-full 2xl:h-[442.487px] flex flex-col sm:flex-row gap-y-[20px] sm:overflow-x-auto 2k:overflow-x-hidden'>

              {/* blog 1 from here */}
              <div className='flex'>
                <div className=' sm:h-[349.487px] bg-white sm:pr-[40px] border-r-[1px] border-gray-200 flex flex-col gap-y-[20px]'>

                  {/* blog image 1 */}
                  <div className='sm:w-[420.325px] sm:h-[242.488px] overflow-hidden bg-green-500 flex justify-center items-center '>
                    <img src={s3img1} alt='' className=' sm:hover:scale-[1.20] duration-[400ms] ease-out' />
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
                      <h4 className='text-[15px] sm:text-[20px] leading-[28px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>TENNIS CHAMPIONSHIP BEST HIGHLIGHTS</h4>
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
                    <img src={s3img2} alt='' className=' sm:hover:scale-[1.20] duration-[400ms] ease-out' />
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
                      <h4 className='text-[15px] sm:text-[20px] leading-[28px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>THE PERFECT PILATES CLOTHING FOR WOMEN</h4>
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
                    <img src={s3img3} alt='' className=' 2xl:hover:scale-[1.20] duration-[400ms] ease-out' />
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
                      <h4 className='text-[20px] leading-[28px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-nowrap 2xl:text-wrap'>HOW SHOULD I DRESS FOR A GYM WORKOUT?</h4>
                    </div>
                    {/* readmore  */}
                    <div className='w-full h-[24px] flex justify-start bg-white'>
                      <a href='#' className=' text-start underline underline-offset-0 hover:text-red-500 duration-200 hover:underline hover:underline-offset-2'>Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* section 3 ends here */}

            {/* section 4 from here */}
            <div className='w-full 2xl:h-[442.487px] flex flex-col sm:flex-row gap-y-[20px] sm:overflow-x-auto 2k:overflow-x-hidden'>

              {/* blog 1 from here */}
              <div className='flex'>
                <div className=' sm:h-[349.487px] bg-white sm:pr-[40px] border-r-[1px] border-gray-200 flex flex-col gap-y-[20px]'>

                  {/* blog image 1 */}
                  <div className='sm:w-[420.325px] sm:h-[242.488px] overflow-hidden bg-green-500 flex justify-center items-center '>
                    <img src={s4img1} alt='' className=' sm:hover:scale-[1.20] duration-[400ms] ease-out' />
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
                      <h4 className='text-[15px] sm:text-[20px] leading-[28px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>J. LO EMBARKS ON A FASHION MARATHON</h4>
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
                    <img src={s4img2} alt='' className=' sm:hover:scale-[1.20] duration-[400ms] ease-out' />
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
                      <h4 className='text-[15px] sm:text-[20px] leading-[28px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start 2xl:text-wrap'>HOW TO CHOOSE THE BEST RUNNING SHOES</h4>
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
                    <img src={s4img3} alt='' className=' 2xl:hover:scale-[1.20] duration-[400ms] ease-out' />
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
                      <h4 className='text-[20px] leading-[28px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-nowrap 2xl:text-wrap'>BASKETBALL RULES - INSIDE 16 COMMON RULES</h4>
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

            {/* section 4 ends here */}

            {/* section 5 from here on */}
            <div className='w-full 2xl:h-[442.487px] flex flex-col sm:flex-row gap-y-[20px] sm:overflow-x-auto 2k:overflow-x-hidden'>

              {/* blog 1 from here */}
              <div className='flex'>
                <div className=' sm:h-[349.487px] bg-white sm:pr-[40px] border-r-[1px] border-gray-200 flex flex-col gap-y-[20px]'>

                  {/* blog image 1 */}
                  <div className='sm:w-[420.325px] sm:h-[242.488px] overflow-hidden bg-green-500 flex justify-center items-center '>
                    <img src={s5img1} alt='' className=' sm:hover:scale-[1.20] duration-[400ms] ease-out' />
                  </div>
                  <div className='w-full h-[92px] bg-white pl-[15px] sm:pl-[0px]  flex flex-col gap-y-[5px]'>
                    <div className='w-full  bg-white flex flex-col gap-x-[10px] gap-y-[5px] '>
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
                      <h4 className='text-[15px] sm:text-[20px] leading-[28px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start 2xl:text-wrap'>GRAVEL GUIDE FOR NEW RACES AND WILD ADVENTURES</h4>
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
                    <img src={s5img2} alt='' className=' sm:hover:scale-[1.20] duration-[400ms] ease-out' />
                  </div>
                  <div className='w-full h-[92px] bg-white pl-[15px] sm:pl-[0px] flex flex-col gap-y-[5px] '>
                    <div className='w-full  bg-white flex flex-col gap-x-[10px] gap-y-[5px]'>
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
                      <h4 className='text-[15px] sm:text-[20px] leading-[28px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start 2xl:text-wrap'>ACTIVEWEAR WARDROBE ESSENTIALS FOR MEN</h4>
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
                    <img src={s5img3} alt='' className=' 2xl:hover:scale-[1.20] duration-[400ms] ease-out' />
                  </div>
                  <div className='w-full h-[92px] bg-white flex flex-col gap-y-[5px]'>
                    <div className='w-full  bg-white flex flex-col gap-x-[10px] gap-y-[5px]'>
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
                      <h4 className='text-[20px] leading-[28px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-nowrap 2xl:text-wrap'>6 REASONS WHY WE NEED A PERSONAL TRAINER?</h4>
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
            {/* sectionm 5 ending here */}

            {/* pagination from here*/}
            <div className='w-full h-[55.6px] bg-white  flex justify-center items-center'>
              <div className='w-[262.63px] h-full flex  items-center gap-x-[10px]'>
                <span className='text-white text-[14px] font-[500] bg-black w-[46px] h-[46px]  flex justify-center items-center cursor-pointer ' onClick={activepage1}>1</span>
                <span className='text-black text-[14px] font-[500] bg-white border-[1px] border-gray-300 w-[46px] h-[46px]  flex justify-center items-center hover:border-black duration-300 cursor-pointer' onClick={activepage2}>2</span>
                <span className='text-black text-[16px] font-[500] bg-white border-[1px] border-gray-300 w-[140.63px] h-[46px]  flex justify-center items-center hover:border-black duration-300 cursor-pointer' onClick={activepage2}>Next page</span>


              </div>
            </div>
          </div>
          {/* page 1 ends here */}

          {/* page 2 starts from here */}
          <div className={'w-full h-auto transition-all duration-500   ' + page2status}>
            {/* section 1 */}
            <div className='w-full h-[487.987px] bg-white flex justify-between mb-[50px] '>
              <div className='w-[660.388px] h-[487.987px] bg-white'>
                {/* left image */}
                <div className='w-full h-[380.978px] overflow-hidden'>
                  <img src={p2s11} alt='' className=' hover:scale-[1.15] duration-300 ease-out' />
                </div>
                {/* left content */}
                <div className='w-full h-[92px] bg-white pl-[15px] sm:pl-[0px] pt-[15px]  flex flex-col gap-y-[5px]'>
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
                    <h4 className='text-[15px] sm:text-[20px] leading-[28px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>THE EVOLUTION OF STRENGTHENING THESE VITAL MUSCLES</h4>
                  </div>
                  {/* readmore  */}
                  <div className='w-full h-[24px] flex justify-start bg-white '>
                    <a href='#' className=' text-start underline underline-offset-0 hover:text-red-500 duration-200 hover:underline hover:underline-offset-2'>Read more</a>
                  </div>
                </div>
              </div>
              <div className=' h-full px-[10px] '>
                <div className='w-[0.5px] h-full bg-gray-200'></div>
              </div>
              <div className='w-[660.388px] h-[487.987px] bg-white'>
                {/* right image */}
                <div className='w-full h-[380.978px] overflow-hidden'>
                  <img src={p2s12} alt='' className='hover:scale-[1.15] duration-300 ease-out' />
                </div>
                {/* right content */}
                <div className='w-full h-[92px] bg-white pl-[15px] sm:pl-[0px] pt-[15px]  flex flex-col gap-y-[5px]'>
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
                    <h4 className='text-[15px] sm:text-[20px] leading-[28px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>10 BEST YOGA POSES FOR TIGHT HAMSTRINGS</h4>
                  </div>
                  {/* readmore  */}
                  <div className='w-full h-[24px] flex justify-start bg-white '>
                    <a href='#' className=' text-start underline underline-offset-0 hover:text-red-500 duration-200 hover:underline hover:underline-offset-2'>Read more</a>
                  </div>
                </div>
              </div>
            </div>
            {/* section 1 ends here */}

            {/* section 2 from here */}
            <div className='w-full 2xl:h-[442.487px] flex flex-col sm:flex-row gap-y-[20px] sm:overflow-x-auto 2k:overflow-x-hidden'>

              {/* blog 1 from here */}
              <div className='flex'>
                <div className=' sm:h-[349.487px] bg-white sm:pr-[40px] border-r-[1px] border-gray-200 flex flex-col gap-y-[20px]'>

                  {/* blog image 1 */}
                  <div className='sm:w-[420.325px] sm:h-[242.488px] overflow-hidden bg-green-500 flex justify-center items-center '>
                    <img src={p2s21} alt='' className=' sm:hover:scale-[1.20] duration-[400ms] ease-out' />
                  </div>
                  <div className='w-full h-[92px] bg-white pl-[15px] sm:pl-[0px]  flex flex-col gap-y-[5px]'>
                    <div className='w-full  bg-white flex flex-col gap-x-[10px] gap-y-[10px] '>
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
                      <h4 className='text-[15px] sm:text-[20px] leading-[28px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>FINDING FITNESS CLOTHING IS NOW EASIER THAN EVER</h4>
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
                    <img src={p2s22} alt='' className=' sm:hover:scale-[1.20] duration-[400ms] ease-out' />
                  </div>
                  <div className='w-full h-[92px] bg-white pl-[15px] sm:pl-[0px] flex flex-col gap-y-[5px] '>
                    <div className='w-full  bg-white flex flex-col gap-x-[10px] gap-y-[10px]'>
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
                      <h4 className='text-[15px] sm:text-[20px] leading-[28px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>WHY DO GYM INJURIES HAPPEN?</h4>
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
                    <img src={p2s23} alt='' className=' 2xl:hover:scale-[1.20] duration-[400ms] ease-out' />
                  </div>
                  <div className='w-full h-[92px] bg-white flex flex-col gap-y-[5px]'>
                    <div className='w-full  bg-white flex flex-col gap-x-[10px] gap-y-[10px]'>
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
                      <h4 className='text-[20px] leading-[20px] font-bold 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-nowrap 2xl:text-wrap'>4 WAYS TO LOOK STYLISH WHILE WORKING OUT</h4>
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
            {/* section 2 ends here */}

            {/* pagination from here*/}
            <div className='w-full h-[55.6px] bg-white  flex justify-center items-center'>
              <div className='w-[262.63px] h-full flex  items-center gap-x-[10px]'>
                <span className='text-black text-[16px] font-[500] bg-white border-[1px] border-gray-300 w-[140.63px] h-[46px]  flex justify-center items-center hover:border-black duration-300 cursor-pointer' onClick={activepage1}>Prev page</span>
                <span className='text-black text-[14px] font-[500] bg-white w-[46px] h-[46px]  flex justify-center items-center border-[1px] border-gray-300 hover:border-black duration-300 cursor-pointer' onClick={activepage1}>1</span>
                <span className=' text-[14px] font-[500] bg-black text-white  w-[46px] h-[46px]  flex justify-center items-center hover:border-black duration-300 cursor-pointer' onClick={activepage2}>2</span>


              </div>
            </div>
          </div>
          {/* page 2 ends here */}
        </div>
        {/* all blog section ends here */}

        {/* fashion blog page */}

        




      </div>

    </main>
  )
}

export default Blog

