import React from 'react'
import "./blog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faAngleRight, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons'

// all blogs section 1 image
import left from "../../Assets/blog/about1.jpg"
import right from "../../Assets/blog/about2.jpg"


//  section 2 images
import blog1 from "../../Assets/blog/about1.jpg"
import blog2 from "../../Assets/blog/about2.jpg"
import blog3 from "../../Assets/blog/about3.jpg"

const Blog = () => {
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
            <li className='text-[16px] font-[600] leading-[20px] font-oswald cursor-pointer hover:text-red-500 duration-300'>ALL BLOG POSTS</li>
            <li className='text-[16px] font-[600] leading-[20px] font-oswald cursor-pointer hover:text-red-500 duration-300'>FASHION</li>
            <li className='text-[16px] font-[600] leading-[20px] font-oswald cursor-pointer hover:text-red-500 duration-300'>GALLERY</li>
            <li className='text-[16px] font-[600] leading-[20px] font-oswald cursor-pointer hover:text-red-500 duration-300'>NEW ARRIVALS</li>
            <li className='text-[16px] font-[600] leading-[20px] font-oswald cursor-pointer hover:text-red-500 duration-300'>SPORT</li>
            <li className='text-[16px] font-[600] leading-[20px] font-oswald cursor-pointer hover:text-red-500 duration-300'>SPORTING GOODS</li>
            <li className='text-[16px] font-[600] leading-[20px] font-oswald cursor-pointer hover:text-red-500 duration-300'>VIDEO</li>
          </ul>
        </div>

        {/*all blog sections starts from here */}
        <div className='w-full h-auto'>

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
                  <h4 className='text-[15px] sm:text-[20px] leading-[20px] font-[600] 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>19 EFFECTIVE CARDIO EXERCISES FOR A GYM</h4>
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
                  <h4 className='text-[15px] sm:text-[20px] leading-[20px] font-[600] 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>THE HEALTH BENEFITS OF ICE-SKATING</h4>
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
                    <h4 className='text-[15px] sm:text-[20px] leading-[20px] font-[500] 2xl:text-start hover:text-red-500 duration-300 cursor-pointer text-start'>Badminton Rules - How to Score Perfectly</h4>
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
          {/* section 2 ends here */}

          {/* section 3 starts from here */}
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
          </div>
          {/* section 3 ends here */}

          {/* section 4 from here */}
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

          {/* section 4 ends here */}

          {/* section 5 from here on */}
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

          {/* sectionm 5 ending here */}
        </div>

      </div>

    </main>
  )
}

export default Blog

