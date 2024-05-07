import React from "react"
import "./footer.css"
import logo from "../Assets/logo/logo-sport-white.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import payment from "../Assets/payment/payment-icons-light.png"
import { faBaseballBatBall, faBasketball, faDumbbell, faFootball, faFutbol, faGolfBallTee, faPersonBiking, faPersonHiking, faPersonSkating, faPersonSnowboarding, faPersonSwimming, faSkating, faVolleyball } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <footer className="w-[1536px] h-[896.250px] bg-black">
            {/* footer's newsletter section starts from here */}
            <div className="w-full h-[195.6px] bg-black pt-[80px] pb-[70px] px-[50px]">
                <div className="w-full h-full bg-black flex justify-between items-center">
                    <h3 className="text-[30px] leading-[30px] font-[600] text-white font-oswald ">JOIN OUR NEWSLETTER AND GET $20 DISCOUNT FOR YOUR FIRST ORDER</h3>
                    <div className="h-full flex gap-x-[10px] pr-[100px]">
                        <input type="email" name="Email" className="focus:outline-none text-[18px] text-white px-[20px] py-[9px] border-[1px] border-white bg-black" placeholder="Your email here..." />
                        <button type="submit" className="bg-white text-black px-[40px] py-[9px] text-[18px] hover:text-white hover:bg-red-500 duration-300">Subscribe</button>
                    </div>
                </div>
            </div>
            {/* newsletter section ends here */}

            {/* a divider here */}
            <div className="w-screen py-[10px] mb-[70px]">
                <div className="w-full h-[0.5px] bg-gray-700"></div>
            </div>

            {/* footer section starts from here */}

            {/* section 1 from here */}
            <div className="w-full h-[222px] bg-black px-[50px] ">
                <div className="w-full h-full bg-blackbg-red-500 flex">

                    {/* shop section starts from here */}
                    <div className="w-[200px] h-full bg-black flex flex-col items-start gap-y-[5.5px]">
                        <h6 className="text-[22px] text-white font-[500]">Shop</h6>
                        <a href="#" className="text-white hover:text-red-600 duration-200 text-[18px] w-full text-start" >Shop</a>
                        <a href="#" className="text-white hover:text-red-600 duration-200 text-[18px] w-full text-start" >Women</a>
                        <a href="#" className="text-white hover:text-red-600 duration-200 text-[18px] w-full text-start" >Men</a>
                        <a href="#" className="text-white hover:text-red-600 duration-200 text-[18px] w-full text-start" >Shoes</a>
                        <a href="#" className="text-white hover:text-red-600 duration-200 text-[18px] w-full text-start" >Accessories</a>
                        <a href="#" className="text-white hover:text-red-600 duration-200 text-[18px] w-full text-start" >Sale</a>
                    </div>
                    {/* shop section sends here */}

                    {/* information section starts from here */}
                    <div className="w-[200px] h-full bg-black flex flex-col items-start gap-y-[5px]">
                        <h6 className="text-[22px] text-white font-[500]">Informations</h6>
                        <a href="#" className="text-white hover:text-red-600 duration-200 text-[18px] w-full text-start" >Track</a>
                        <a href="#" className="text-white hover:text-red-600 duration-200 text-[18px] w-full text-start" >Record</a>
                        <a href="#" className="text-white hover:text-red-600 duration-200 text-[18px] w-full text-start" >Shipping info</a>
                        <a href="#" className="text-white hover:text-red-600 duration-200 text-[18px] w-full text-start" >Help</a>
                        <a href="#" className="text-white hover:text-red-600 duration-200 text-[18px] w-full text-start" >Gift Cards</a>
                        <a href="#" className="text-white hover:text-red-600 duration-200 text-[18px] w-full text-start" >Privacy Policy</a>
                    </div>
                    {/* information section ends here */}

                    {/* Account section starts from here */}
                    <div className="w-[200px] h-full bg-black flex flex-col items-start gap-y-[6px]">
                        <h6 className="text-[22px] text-white font-[500]">Account</h6>
                        <a href="#" className="text-white hover:text-red-600 duration-200 text-[18px] w-full text-start" >Cart</a>
                        <a href="#" className="text-white hover:text-red-600 duration-200 text-[18px] w-full text-start" >My account</a>
                        <a href="#" className="text-white hover:text-red-600 duration-200 text-[18px] w-full text-start" >My orders</a>
                        <a href="#" className="text-white hover:text-red-600 duration-200 text-[18px] w-full text-start" >Wishlist </a>
                        <a href="#" className="text-white hover:text-red-600 duration-200 text-[18px] w-full text-start" >Affiliate Program</a>

                    </div>
                    {/* accounts section ends here */}

                    {/* categories section starts from here */}

                    <div className='w-[165px] text-white '>
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
                    <div className='w-[165px]  flex flex-col gap-y-[13px] mt-[40px] ml-[50px] text-white'>
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
                    <div className='w-[165px]  flex flex-col gap-y-[15px] mt-[40px] ml-[50px] text-white'>
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

                    {/* follow us section starts from here */}

                    <div className='w-[165px] ml-1 mr-14 text-white'>
                        <h3 className='font-semibold text-start text-[22px]'>Follow Us</h3>
                        <div className='w-full mt-[15px] flex flex-col gap-y-[13px] '>
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
            {/* section 1 ends here */}

            {/* section 2 starts from here */}
            <div className="w-full h-[72px] my-[80px] px-[50px] ">
                <div className="w-full h-full bg-black flex items-center gap-x-[60px]">
                    {/* logo below */}
                    <img src={logo} alt="" className="w-[172px]" />

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
            <div className="w-full h-[25.850px] px-[50px] mb-[20px]">
                <div className="w-full h-full bg-black flex justify-between">
                    <div className="flex gap-x-[30px]">
                        <p className="text-white">Copyright © 2023 loobek. All Rights Reserved</p>
                        <a href="#" className="text-white hover:text-red-600 duration-200" >Terms of Use</a>
                        <a href="#" className="text-white hover:text-red-600 duration-200" >Affiliate Program</a>
                        <a href="#" className="text-white hover:text-red-600 duration-200" >Accessibility</a>
                    </div>
                    <div className="">
                        <img src={payment} alt="" className="w-[323px]" />
                    </div>
                </div>
            </div>

            {/* section 3 ends here */}

            {/* section 4 starts from here */}

            <div className="w-full h-[60px] mb-[50px] px-[50px]">
                <div className="w-[920px] h-full bg-black text-start">
                    <p className="text-[12px] text-gray-500">Fashion online store is very important in this time if you are trying to sell clothes. With the new fashion trends and all the available shopping options you can order your clothes online and make money without even leaving your house. These days you can take your own inspiration and create something new for yourself. All you need to do is read books and magazines about fashion, watch videos on youtube, keep yourself updated on social media, and of course also shop online!</p>

                </div>
            </div>
            {/* section 4 ends here */}

        </footer>
    )
}

export default Footer