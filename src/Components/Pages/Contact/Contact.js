import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

// map image 
import img1 from "../../Assets/map/contact-3-banner-1-modern-1.jpg"

const Contact = () => {
  return (
    <>
      <main className='w-screen '>
        {/* Home > Contact section from here */}
        <div className='w-full px-[50px] py-[15px] 2k:px-[250px]'>
          <div className='w-full h-[24px] bg-white flex justify-start items-center gap-x-[9px] text-[13px] font-[500] '>
            <Link to={"/"} className='hover:text-red-500 duration-200 leading-[24px]' >Home</Link>
            <span className='text-[13px]  pt-[4px]'><FontAwesomeIcon icon={faAngleRight} /></span>
            <p className='font-[400]'>Contact</p>
          </div>
        </div>
        {/* Home > Contact section ends here */}

        {/* have question sectionm from here */}
        <div className='w-full px-[50px] 2k:px-[250px] mt-[30px] mb-[60px]'>
          <div className='w-dull h-[74px] text-center flex flex-col gap-y-[15px] '>
            <h3 className='text-[40px] leading-[40px] font-[600] font-oswald'>DO YOU HAVE SOME QUESTIONS?</h3>
            <p className='text-[16px] leading-[24px] font-[400]'>We are at your disposal 7 days a week!</p>
          </div>
        </div>

        {/* call msg and store section starts from here */}

        <div className='w-full h-[316.8px] px-[50px] 2k:px-[250px] mb-[100px]'>
          <div className='w-full h-full bg-white flex justify-between'>
            {/* phone section */}
            <div className='w-[460.250px] h-full bg-white pr-[10px] flex flex-col items-center gap-y-[30px]'>
              <FontAwesomeIcon icon={faPhone} className='text-[50px] hover:opacity-[0.5] duration-[200ms]' />
              <h4 className='text-[20px] leading-[32px] font-[600] font-oswald'>CALL US</h4>
              <h3 className='text-[30px] font-oswald font-[600]'>(786) 425-1900</h3>
              <div className='flex flex-col  text-[13px] leading-[18px] text-[#808080] font-[400] '>
                <p className='text-center '>Monday - Friday:9:00 - 20:00</p>
                <p className='text-center'>Saturady: 11:00 - 15:00</p>
              </div>
              <a href='whatsapp:contact=015555555555@s.whatsapp.com&message="I d like to chat with you' className='px-[20px] flex justify-center items-center gap-x-[10px]  text-[14px] leading-[32px] font-[500] border-[1px] border-black bg-transparent hover:bg-black hover:text-white duration-200'>
                <span className='relative p-[4px] animate-ping rounded-full bg-green-500 flex justify-center items-center'>
                </span> Live Chat
              </a>

            </div>
            {/* send mail section  */}

            <div className='w-[460.250px] h-full  px-[10px] flex flex-col items-center  border-x-[1px] border-gray-200'>
              <FontAwesomeIcon icon={faEnvelope} className='text-[50px] hover:opacity-[0.5] duration-[200ms] mb-[30px]' />
              <h4 className='text-[20px] leading-[32px] font-[600] font-oswald mb-[30px]'>SEND MAIL</h4>
              <p className='text-center underline underline-offfset-1 '>loobek@official.com</p>
              <div className='w-full py-[20px] px-[70px]'>
                <div className='w-full h-[1px] bg-[#f0f0f0]'></div>
              </div>
              <div className='flex flex-col text-[14px] gap-y-[7px]'>
                <div className='flex items-center gap-x-[50px]'>
                  <p>Orders</p>
                  <p className='underline underline-offset-1'>orders@example.com</p>
                </div>
                <div className='flex items-center gap-x-[50px]'>
                  <p>Return</p>
                  <p className='underline underline-offset-1'>return@example.com</p>
                </div>
              </div>
              <a href='' className='px-[20px] mt-[30px] flex justify-center items-center gap-x-[10px]  text-[14px] leading-[32px] font-[500] border-[1px] border-black bg-transparent hover:bg-black hover:text-white duration-200'>Contact form</a>

            </div>

            {/* visit store section */}
            <div className='w-[460.250px] h-full bg-white pl-[10px] flex flex-col items-center gap-y-[30px]'>
              <FontAwesomeIcon icon={faLocationDot} className='text-[50px] hover:opacity-[0.5] duration-[200ms]' />
              <h4 className='text-[20px] leading-[32px] font-[600] font-oswald'>VISIT IN OUR STORE</h4>
              <h3 className='text-[30px] font-oswald font-[600]'>(786) 425-1900</h3>
              <div className='flex flex-col  text-[14px] leading-[24px] text-black font-[400] '>
                <p className='text-center w-[180px] '>29 SE 2nd Ave, Miami, Florida 33131, United States</p>
                {/* <p className='text-center'>Saturady: 11:00 - 15:00</p> */}
              </div>
              <a href='https://www.google.com/maps/place/Los+Angeles,+CA,+USA/@34.018904,-119.0355977,10z/data=!4m15!1m8!3m7!1s0x80c2c634253dfd01:0x26fe52df19a5a920!2sDowntown+Los+Angeles,+Los+Angeles,+CA,+USA!3b1!8m2!3d34.055691!4d-118.2487702!16zL20vMDI2ejQ1!3m5!1s0x80c2c75ddc27da13:0xe22fdf6f254608f4!8m2!3d34.0549076!4d-118.242643!16s%2Fm%2F030qb3t?entry=ttu' className='px-[20px] flex justify-center items-center gap-x-[10px]  text-[14px] leading-[32px] font-[500] border-[1px] border-black bg-transparent hover:bg-black hover:text-white duration-200'>Show on map</a>
            </div>
          </div>
        </div>

        {/* call msg and store section ends  here */}


        {/* have questionnsection ends here */}


        {/* map section starts from here */}
        <div className='w-full h-[450px] px-[50px] 2k:px-[250px] mb-[100px]'>
          <div className='w-full h-full bg-white flex justify-between'>
            <div className='w-[700.400px] h-[full] bg-white overflow-hidden'>
              <img src={img1} alt='' className='h-full' />
            </div>
            <div className='w-[700.400px] h-[full] bg-white '>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26449.187926217848!2d-118.26897099015275!3d34.04006188230798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c634253dfd01%3A0x26fe52df19a5a920!2sDowntown%20Los%20Angeles%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1715440434314!5m2!1sen!2sin" className='w-full h-full'></iframe>
            </div>
          </div>
        </div>
        {/* map section ends here */}

        {/* form section starts from here */}

        <div className='w-full h-[448.4px] px-[50px] 2k:px-[250px] mb-[100px]'>
          <div className='w-full h-full bg-white '>
            <div className='w-full h-full  px-[160.4px] '>
              <div className='w-full h-full '>
                <form action='' method='' className='w-full h-full  flex flex-col items-start'>
                  <h3 className='text-[40px] leading-[40px] font-oswald font-[600] text-start'>FILL UP THE FORM IF YOU HAVE ANY QUESTION</h3>

                  {/* name email and subject section  */}
                  <div className='w-[1100px] h-[105.6px]  flex items-center gap-x-[20px] mb-[20px]'>
                    {/* name */}
                    <div className='w-[353.663px] flex flex-col gap-y-[5px] text-start'>
                      <label for="">Name and Surname <span className='text-red-500 text-[18px]'>*</span></label>
                      <input type='text' name='Name' className='h-[45px] focus:outline-none border-[1px] border-black px-[20px] py-[7px] ' placeholder='Name and Surname' required />
                    </div>

                    {/* E mail */}
                    <div className='w-[353.663px] flex flex-col gap-y-[5px] text-start'>
                      <label for="">Your E-mail <span className=' text-red-500 text-[18px]'>*</span></label>
                      <input type='email' name='Name' className='h-[45px] focus:outline-none border-[1px] border-black px-[20px] py-[7px] ' placeholder='Name and Surname' required />
                    </div>

                    {/* subject */}
                    <div className='w-[353.663px] flex flex-col gap-y-[5px] text-start'>
                      <label for="">Subject <span className='text-red-500 text-[18px]'>*</span></label>
                      <input type='text' name='Name' className='h-[45px] focus:outline-none border-[1px] border-black px-[20px] py-[7px] ' placeholder='Name and Surname' required />
                    </div>
                  </div>
                  {/* name email and subject section ends here  */}

                  {/* message section starts here */}
                  <div className='w-full   flex flex-col text-start gap-y-[5px]'>
                    <label for="">Message<span className=' text-red-500 text-[18px]'>*</span></label>
                    <textarea className='w-full h-[124.4px] border-[1px] border-black px-[15px] py-[12px] '></textarea>
                  </div>

                  {/* send message button */}

                  <button type='submit' className='px-[40px] py-[7px] bg-black text-white text-start mt-[45px] text-[16px] leading-[30px] font-[500] hover:bg-red-500 duration-300'>Send message</button>

                </form>
              </div>
            </div>
          </div>
        </div>

        {/* form section ends here */}

      </main></>
  )
}

export default Contact
