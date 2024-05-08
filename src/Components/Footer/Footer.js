import React from "react"
import "./footer.css"
import logo from "../Assets/logo/logo-sport-white.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import payment from "../Assets/payment/payment-icons-light.png"
import { faBaseballBatBall, faBasketball, faDumbbell, faFootball, faFutbol, faGolfBallTee, faPersonBiking, faPersonHiking, faPersonSkating, faPersonSnowboarding, faPersonSwimming, faSkating, faVolleyball } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <footer className="w-screen 2xl:h-[896.250px] bg-black">
            {/* footer's newsletter section starts from here */}
            <div className="w-full 2xl:h-[195.6px] bg-black pt-[50px] pb-[40px] 2xl:pt-[80px] 2xl:pb-[70px] 2xl:px-[50px] 2k:px-[250px] ">
                <div className="w-full h-full bg-black flex flex-col gap-y-[20px] 2xl:flex-row justify-between items-center">
                    <h3 className=" text-[22px] 2xl:text-[30px] leading-[30px] font-[600] text-white font-oswald xl:text-nowrap">JOIN OUR NEWSLETTER AND GET $20 DISCOUNT FOR YOUR FIRST ORDER</h3>
                    <div className=" px-[10px] h-full flex gap-x-[10px] 2xl:pr-[100px] 2k:pr-[0px]  ">
                        <input type="email" name="Email" className="focus:outline-none w-[158.487px] phone:w-auto  2k:w-[298.4px] text-center phone:text-start text-[14px] 2xl:text-[18px] text-white px-[20px] py-[9px] border-[1px] border-white bg-black" placeholder="Your email here..." />
                        <button type="submit" className="bg-white  text-black px-[20px] 2xl:px-[40px] py-[9px] text-[14px] 2xl:text-[18px] hover:text-white hover:bg-red-500 duration-300">Subscribe</button>
                    </div>
                </div>
            </div>
            {/* newsletter section ends here */}

            {/* a divider here */}
            <div className="w-screen py-[10px] mb-[40px] 2xl:mb-[70px]">
                <div className="w-full h-[0.5px] bg-gray-700"></div>
            </div>

            {/* footer section starts from here */}

            {/* section 1 from here */}
            <div className="w-full 2xl:h-[222px] bg-black px-[15px] sm:px-[20px] xl:px-[50px] 2k:px-[250px]">
                <div className="w-full h-full bg-black flex flex-col xl:flex-row gap-y-[20px lg:flex-row]">

                    <div className="md:flex md:gap-x-[20px]">
                        <div className="flex ">
                            {/* shop section starts from here */}
                            <div className="w-[135px] phone:w-[200px] sm:w-[305px] md:w-[110px] xl:w-[200px] h-full bg-black flex flex-col items-start gap-y-[5.5px]">
                                <h6 className="text-[22px] text-white font-[500]">Shop</h6>
                                <a href="#" className="text-white hover:text-red-600 duration-200 2xl:text-[18px] w-full text-start" >Shop</a>
                                <a href="#" className="text-white hover:text-red-600 duration-200 2xl:text-[18px] w-full text-start" >Women</a>
                                <a href="#" className="text-white hover:text-red-600 duration-200 2xl:text-[18px] w-full text-start" >Men</a>
                                <a href="#" className="text-white hover:text-red-600 duration-200 2xl:text-[18px] w-full text-start" >Shoes</a>
                                <a href="#" className="text-white hover:text-red-600 duration-200 2xl:text-[18px] w-full text-start" >Accessories</a>
                                <a href="#" className="text-white hover:text-red-600 duration-200 2xl:text-[18px] w-full text-start" >Sale</a>
                            </div>
                            {/* shop section sends here */}

                            {/* information section starts from here */}
                            <div className="w-[135px]  xl:w-[200px] h-full bg-black flex flex-col items-start gap-y-[5px]">
                                <h6 className="text-[22px] text-white font-[500]">Informations</h6>
                                <a href="#" className="text-white hover:text-red-600 duration-200 2xl:text-[18px] w-full text-start" >Track</a>
                                <a href="#" className="text-white hover:text-red-600 duration-200 2xl:text-[18px] w-full text-start" >Record</a>
                                <a href="#" className="text-white hover:text-red-600 duration-200 2xl:text-[18px] w-full text-start" >Shipping info</a>
                                <a href="#" className="text-white hover:text-red-600 duration-200 2xl:text-[18px] w-full text-start" >Help</a>
                                <a href="#" className="text-white hover:text-red-600 duration-200 2xl:text-[18px] w-full text-start" >Gift Cards</a>
                                <a href="#" className="text-white hover:text-red-600 duration-200 2xl:text-[18px] w-full text-start" >Privacy Policy</a>
                            </div>
                            {/* information section ends here */}
                        </div>


                        {/* categories section starts from here */}

                        <div className='w-[165px]  text-white hidden md:block '>
                            <h3 className='font-semibold text-start text-[22px]'>Categories</h3>
                            <div className='w-full mt-[15px] flex flex-col gap-y-[13px]'>
                                <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                    <FontAwesomeIcon icon={faFutbol} />
                                    Football
                                </a>
                                <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                    <FontAwesomeIcon icon={faBasketball} />
                                    BasketBall
                                </a>
                                <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                    <FontAwesomeIcon icon={faPersonBiking} />
                                    Cycling
                                </a>
                                <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                    <FontAwesomeIcon icon={faGolfBallTee} />
                                    Golf
                                </a>
                                <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                    <FontAwesomeIcon icon={faDumbbell} />
                                    Gym
                                </a>

                            </div>
                        </div>
                        <div className='w-[165px]   flex-col gap-y-[13px] mt-[40px] ml-[50px] text-white hidden md:flex'>
                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                <FontAwesomeIcon icon={faPersonHiking} />
                                Hiking
                            </a>
                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                <FontAwesomeIcon icon={faPersonSkating} />
                                Ice-skating
                            </a>
                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                <FontAwesomeIcon icon={faFootball} />
                                Rugby
                            </a>
                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                <FontAwesomeIcon icon={faSkating} />
                                Skateboard
                            </a>
                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                <FontAwesomeIcon icon={faPersonSnowboarding} />
                                Snowboard
                            </a>

                        </div>
                        <div className='w-[165px]   flex-col gap-y-[15px] mt-[40px] ml-[50px] text-white hidden md:flex'>
                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                <FontAwesomeIcon icon={faPersonSwimming} />
                                Swimming
                            </a>
                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                <FontAwesomeIcon icon={faBaseballBatBall} />
                                Baseball
                            </a>
                            <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                <FontAwesomeIcon icon={faVolleyball} />
                                Volleyball
                            </a>
                        </div>
                        {/* category section ends here */}
                    </div>


                    <div className="flex md:mt-[40px] lg:mt-[0px]">
                        {/* Account section starts from here */}
                        <div className="w-[135px] phone:w-[200px] sm:w-[305px] md:w-[200px] xl:w-[200px] h-full bg-black flex flex-col items-start gap-y-[6px]">
                            <h6 className="text-[22px] text-white font-[500]">Account</h6>
                            <a href="#" className="text-white hover:text-red-600 duration-200 2xl:text-[18px] w-full text-start" >Cart</a>
                            <a href="#" className="text-white hover:text-red-600 duration-200 2xl:text-[18px] w-full text-start" >My account</a>
                            <a href="#" className="text-white hover:text-red-600 duration-200 2xl:text-[18px] w-full text-start" >My orders</a>
                            <a href="#" className="text-white hover:text-red-600 duration-200 2xl:text-[18px] w-full text-start" >Wishlist </a>
                            <a href="#" className="text-white hover:text-red-600 duration-200 2xl:text-[18px] w-full text-start" >Affiliate Program</a>

                        </div>
                        {/* accounts section ends here */}

                        {/* follow us section starts from here */}

                        <div className='w-[135px] 2xl:w-[165px] ml-1 2xl:mr-14    text-white '>
                            <h3 className='font-semibold text-start text-[22px]'>Follow Us</h3>
                            <div className='w-full mt-[15px] flex flex-col gap-y-[13px] text-[16px]'>
                                <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                    Instgram
                                </a>
                                <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                    <FontAwesomeIcon icon={faXTwitter} />
                                    Twitter
                                </a>
                                <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                    CycFacebookling
                                </a>
                                <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                    <FontAwesomeIcon icon={faYoutube} />
                                    Youtube
                                </a>
                                <a href=' #' className=' hover:text-red-500 duration-200 flex justify-start items-center gap-x-[15px]'>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                    Linkedin
                                </a>

                            </div>
                            {/* follow us section ends here */}
                        </div>
                        {/* categories section ends here */}
                    </div>
                </div>
            </div>
            {/* section 1 ends here */}

            {/* section 2 starts from here */}
            <div className="w-full 2xl:h-[72px] 2xl:my-[80px] py-[40px] xl:px-[50px] 2k:px-[250px]  ">
                <div className="w-full h-full bg-black flex flex-col xl:flex-row justift-center xl:justify-start items-center gap-x-[60px] gap-y-[15px] ]">
                    {/* logo below */}
                    <img src={logo} alt="" className="w-[110px] xl:w-[172px]" />

                    {/* address below */}
                    <div className="w-[140px] h-[72px] text-[14px] font-[400] text-white">
                        <p>29 SE 2nd Ave, Miami, Florida 33131, United States</p>
                    </div>

                    {/* contact number and email below */}
                    <div className="w-[200px] h-[72px] flex flex-col font-oswald gap-y-[15px]">
                        <h4 className="text-[24px] leading-[24px] text-white font-[600]">(786) 425-1900</h4>
                        <p className="text-white underline decoration-1">contact@loobek.com</p>
                    </div>
                </div>
            </div>
            {/* section 2 ends here */}

            {/* section 3 starts from here */}
            <div className="w-full 2xl:h-[25.850px] px-[15px] xl:px-[50px] pb-[20px] xl:pb-[0px] xl:mb-[20px] 2k:px-[250px]">
                <div className="w-full h-full bg-black flex  xl:justify-between flex-col xl:flex-row gap-y-[15px] xl:gap-y-[0px] ">
                    <div className="flex gap-x-[30px] gap-y-[15px] flex-col xl:flex-row ">
                        <p className="text-white text-start phone:text-center xl:text-center text-[14px]">Copyright © 2023 loobek. All Rights Reserved</p>
                        <div className="flex gap-x-[10px] text-[14px] justify-center xl:justify-start">
                            <a href="#" className="text-white text-star  xl:text-center  hover:text-red-600 duration-200" >Terms of Use</a>
                            <a href="#" className="text-white text-start xl:text-center  hover:text-red-600 duration-200" >Affiliate Program</a>
                            <a href="#" className="text-white text-start xl:text-center  hover:text-red-600 duration-200" >Accessibility</a>
                        </div>
                    </div>
                    <div className=" flex justify-center">
                        <img src={payment} alt="" className="w-[323px]" />
                    </div>
                </div>
            </div>

            {/* section 3 ends here */}

            {/* section 4 starts from here */}

            <div className="w-full 2xl:h-[60px] pb-[20px] 2xl:pb-[0px] 2xl:mb-[50px] px-[15px] 2xl:px-[50px] 2k:px-[250px] ">
                <div className="w-full 2xl:w-[920px] 2k:w-[] h-full bg-black  text-center 2xl:text-start ">
                    <p className="text-[12px]  text-gray-500">Fashion online store is very important in this time if you are trying to sell clothes. With the new fashion trends and all the available shopping options you can order your clothes online and make money without even leaving your house. These days you can take your own inspiration and create something new for yourself. All you need to do is read books and magazines about fashion, watch videos on youtube, keep yourself updated on social media, and of course also shop online!</p>

                </div>
            </div>
            {/* section 4 ends here */}

        </footer>
    )
}

export default Footer