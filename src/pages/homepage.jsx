import React, { useState } from "react";
import Comments from "../components/comments";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "./homepage.css";
export default function Homepage() {
    let [imageChange, setImageChange] = useState(1)
    let imgChangeFunc=()=>{
        if (imageChange<3) {
            setImageChange(imageChange=imageChange+1)
        } else {
            setImageChange(imageChange=1)
        }
    }
  return (
    <div className="bg-black pd-l h-fit">
      <section className="min-h-screen w-full section1bg flex flex-col" id="main">
        <div className="innerdiv"> 
        <Navbar />
          <div className="mt-44 xl:mt-40">
            <h1 className="text-4xl text-white xl:text-7xl md:text-6xl font-Bebas">
              SURVIVE AT ALL COSTS
            </h1>
            <p className="text-lg xl:text-2xl  text-white max-w-60 uppercase mt-2 font-Bebas">
              Experience new social battle royale game
            </p>
            <button className="bg-gradient-to-b from-btnColor1 to-btnColor2 text-#1A1917 pt-3 pb-4 pl-2 rounded-sm pr-2 mt-3 font-Open_Sans font-bold">
              Buy Now on Steam
              <span className="border-l-2 border-black ml-4 pl-2 ">$14.99</span>
            </button>
          </div>
          <span
            className="mt-52 flex items-center justify-between pl-4 pr-4  md:justify-center lg:justify-center xl:justify-center md:mt-60 lg:mt-80
                xl:mt-80"
          >
            <div className="flex flex-col justify-center items-center">
              <p className="text-white uppercase font-Open_Sans font-bold mb-2">
                The story
              </p>
              <img src="assets/scroll down.svg" alt="" className="w-9" />
            </div>
            <div className="flex gap-x-3  md:hidden lg:hidden xl:hidden">
              <span className="flex gap-x-3">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="6.30768"
                    cy="5.82965"
                    r="5.20026"
                    fill="white"
                    stroke="white"
                    stroke-width="0.97049"
                  />
                </svg>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="6.13678"
                    cy="5.82965"
                    r="5.20026"
                    stroke="white"
                    stroke-width="0.97049"
                  />
                </svg>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="6.13678"
                    cy="5.82965"
                    r="5.20026"
                    stroke="white"
                    stroke-width="0.97049"
                  />
                </svg>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="6.13678"
                    cy="5.82965"
                    r="5.20026"
                    stroke="white"
                    stroke-width="0.97049"
                  />
                </svg>
              </span>
              <img src="assets/arrow.svg" alt="" />
            </div>
          </span>
        </div>
      </section>
      <section className="w-full min-h-screen  section2bg" id="about">
        <div className="section2_innerdiv min-h-screen ">
        <div className="bg-darkbg min-h-screen pt-4 pl-[0.9rem] pb-[2.3rem] md:flex md:justify-center md:items-center md:gap-[2.7rem]  xl:flex lg:flex xl:justify-center xl:items-center xl:gap-[10.7rem]">
              <div className="md:w-[70%]">
                  <p className="text-[1.1em] font-Bebas text-white text-start ml-4 xl:text-[1.5rem]">What is SOS?</p>
                <h1 className="text-white font-Bebas text-start text-[2.0em] w-[6em] ml-4 xl:text-[5rem]">social battle royale game</h1>
                <hr className="mt-10 mb-7 xl:w-[50rem] xl:absolute md:absolute  xl:z-10 md:z-10 md:w-[25rem]"/>
                  <p className="text-start text-white font-Open_Sans text-[0.87em] ml-9 xl:w-[18.1em] xl:mt-16 md:mt-16 xl:translate-x-60 xl:text-lg">
                      Each round,<span className="font-bold">you</span>  and <span className="font-bold">15</span>  other contestants compete to
                      escape a deadly island filled with monsters. The trick is: <span className="font-bold">three</span> people can survive. Will you run
                      solo or form friendships with others to escape? <br/>
                  </p>
                  <p className="mt-5 text-start text-white font-Open_Sans text-[0.87em] ml-9 xl:w-[22em] xl:text-lg xl:translate-x-60">
                    Making the right decisions could be the
                      difference between <span className="relative"><span className="">life and death.</span> <hr className="bg-orange-300 h-1 border-none xl:w-32 w-24 translate-y-[-0.45rem] left-[0] z-10 absolute" /></span>
                  </p>
        
              </div>
            <div className="">
                <div className="flex pr-2 gap-0">
                    <div className="relative">
                            <div  className="flex mt-12 justify-start relative">
                                {/*  */}
                                <img src={imageChange===1?"assets/Mask group.png":imageChange===2?"assets/Mask group.png":"assets/screenshot 1.png"} className="translate-x-[1.8em] xl:scale-150 md:scale-125"  alt="" />
                                {/*  */}
                                <img src={imageChange===1?"assets/screenshot 2.png":imageChange===2?"assets/screenshot 1.png":"assets/screenshot 2.png"} className="translate-x-[-13em] xl:scale-150 md:scale-125" alt="" />
                                {/*  */}
                                <img src={imageChange===1?"assets/screenshot 1.png":imageChange===2?"assets/screenshot 2.png":"assets/Mask group.png"} className="translate-x-[-28em] xl:scale-150 md:scale-125" alt="" />
                            </div>
                                {/* circles */}
                            <span className="flex absolute xl:top-[21.6rem]  top-[18rem] left-12">
                                <div className="h-[0.7em] w-[0.7em] bg-white rounded-full"></div>
                                <hr className={imageChange===1?"bg-white h-1 w-3 self-center scale-150":"bg-white h-1 w-4 self-center"} />
                                <div className={imageChange>1?"h-[0.7em] w-[0.7em] border-2 border-solid border-white rounded-full bg-white":"h-[0.7em] w-[0.7em] border-2 border-solid border-white rounded-full ml-[0.87rem]"}></div>
                                <hr className={imageChange>1?"bg-white h-1 w-3 self-center":"bg-white h-1 w-4 self-center hidden"} />
                                <div className={imageChange===3?"h-[0.7em] w-[0.7em] border-2 border-solid border-white rounded-full bg-white":"h-[0.7em] w-[0.7em] border-2 border-solid border-white rounded-full ml-[0.87rem]"}></div>
                                <hr className={imageChange===3?"bg-white h-1 w-3 self-center":"bg-white h-1 w-4 self-center hidden"} />
                                <div className="h-[0.7em] w-[0.7em] border-2 border-solid border-white rounded-full ml-[0.87rem]"></div>
                                <div className="h-[0.7em] w-[0.7em] border-2 border-solid border-white rounded-full ml-[0.87rem]"></div>
                                <div className="h-[0.7em] w-[0.7em] border-2 border-solid border-white rounded-full ml-[0.87rem]"></div>
                            </span>
                    </div>
                    <img src="assets/switch.svg" className="xl:cursor-pointer xl:-translate-x-[21.3rem]" alt="" onClick={imgChangeFunc} />
                </div>

            </div>
        </div>
        </div>
      </section>
      <section className="section3bg min-h-screen" id="fetures">
        <div className="section3_innerdiv min-h-screen">
              <div className="pt-[5.1rem] pr-4 xl:pt-[16.2rem] xl:pr-[14.8rem] md:pr-12">
                <p className="text-lg leading-[18px] tracking-[2px] text-white font-Bebas text-end -translate-x-8  xl:not-italic xl:font-bold xl:text-2xl xl:leading-6 xl:tracking-[2px] xl:text-whit xl:-translate-x-32  md:not-italic md:font-bold md:text-[17.45px] md:leading-[17px] md:tracking-[1.45417px] md:text-white md:translate-x-[-7rem]">What’s so special?</p>
                <h2 className="text-[33px] leading-[33px] tracking-[3px] uppercase text-white font-Bebas text-end -translate-x-14 xl:not-italic xl:font-bold xl:text-[80px] xl:leading-[80px] xl:tracking-[3px] xl:uppercase xl:text-white xl:-translate-x-[3.2rem] md:not-italic md:font-bold md:text-[58.1667px] md:leading-[58px] md:tracking-[2.18125px] md:uppercase md:text-white md:translate-x-[-3.5rem]">features</h2>
                  <div>
                    <div className="flex mt-[3.6rem] justify-end">
                      <div className="flex flex-col items-center justify-end xl:translate-x-12 xl:-translate-y-3 md:-translate-y-2 md:translate-x-6">
                        {/* circle container */}
                        <div className="h-[15px] w-[15px] bg-white rounded-lg"></div>
                        <div className="h-[8.1rem] md:h-[5.1rem] xl:h-[7.1rem] border-l-[6px] border-l-white border-solid"></div>
                        <div className="h-[15px] w-[15px] border-[1.30637px] border-solid border-white mb-16 rounded-lg"></div>

                        <div className="h-[15px] w-[15px] border-[1.30637px] border-solid border-white rounded-lg"></div>
                      </div>
                      <div className="flex flex-col justify-end items-end">
                          <span>
                              <h3 className="text-[21px] leading-[21px]  tracking-[2px] text-[#FFB548] font-Bebas text-end xl:not-italic xl:font-bold xl:text-4xl xl:leading-9 xl:text-center xl:tracking-[2px] xl:text-[#FFB548] xl:translate-x-5 md:not-italic md:font-bold md:text-[26.175px] md:leading-[26px] md:text-center md:tracking-[1.45417px] md:text-[#FFB548]">SURVIVE AT ALL COSTS</h3>
                              <p className="font-normal text-sm leading-4 text-justify text-white font-Open_Sans w-[11.23rem]  xl:not-italic xl:font-normal xl:text-lg xl:leading-[22px] xl:text-justify xl:text-white xl:w-96 xl:translate-x-[4.5rem] md:not-italic md:font-normal md:text-[13.0875px] md:leading-4 md:text-justify md:text-white md:w-[17.5rem] md:translate-x-[2.5rem]">You have 30 minutes to find a relic, signal for extraction, and grab
                                  one of three spots on the rescue chopper.</p>
                          </span>
                          <h3 className="text-[21px] leading-[21px]  tracking-[2px] text-[#FFB548] font-Bebas text-start w-[11.5rem] mt-[1.9rem] mb-[2.7rem] translate-x-1 xl:not-italic xl:font-bold xl:text-4xl xl:leading-9 xl:tracking-[2px] xl:text-[#FFB548] xl:w-fit xl:translate-x-12 md:w-fit md:not-italic md:font-bold md:text-[26.175px] md:leading-[26px] md:text-center md:tracking-[1.45417px] md:text-[#FFB548] md:translate-x-4">CREATE ALLIES AND ENEMIES</h3>
                          <h3 className="text-[21px] leading-[21px]  tracking-[2px] text-[#FFB548] font-Bebas translate-x-2  xl:not-italic xl:font-bold xl:text-4xl xl:leading-9 xl:tracking-[2px] xl:text-[#FFB548] xl:-translate-x-4 md:not-italic md:font-bold md:text-[26.175px] md:leading-[26px] md:text-center md:tracking-[1.45417px] md:text-[#FFB548] md:-translate-x-8">IMPRESS THE AUDIENCE</h3>
                      </div>
                    </div>
                  </div>
              </div>
        </div>
      </section>
      <section className="h-screen section4bg" id="system_requirement">
      <div className="innerdiv4 pt-16 ">
          <h3 className="text-center font-Bebas text-lg leading-[18px] tracking-[2px] text-white xl:not-italic xl:font-bold xl:text-2xl xl:leading-6 xl:tracking-[2px] xl:text-white md:not-italic md:font-bold md:text-[17.45px] md:leading-[17px] md:tracking-[1.45417px] md:text-white">Can My Computer Run this game?</h3>
          <h1 className="font-Bebas text-[33px] leading-[33px] text-center tracking-[3px] uppercase text-white mt-[1.7rem] md:not-italic md:font-bold md:text-[58.1667px] md:leading-[58px] md:tracking-[2.18125px] md:uppercase md:text-white xl:not-italic xl:font-bold xl:text-[80px] xl:leading-[80px] xl:tracking-[3px] xl:uppercase xl:text-white">system requirements</h1>
            <div className="w-fit pl-4 pr-4 mt-16  xl:translate-x-28 xl:mt-[5.2rem] md:translate-x-20">
              <table>
              <tr>
                <td className="border border-solid border-[#979797] pl-2 pt-2 pb-2">
                  <h3 className="text-lg leading-[18px] tracking-[2px] text-[#FFB548] font-Bebas text-start xl:font-bold xl:text-2xl xl:leading-6 xl:tracking-[2px] xl:text-[#FFB548] md:text-[17.45px] md:leading-[17px] md:tracking-[1.45417px] md:text-[#FFB548]">OS:</h3>
                  <p className="not-italic font-normal text-sm leading-4 text-white font-Open_Sans text-start mt-2  xl:w-[258.05px] xl:not-italic xl:font-normal xl:text-lg xl:leading-[22px] xl:text-white xl:mt-2  md:w-[11.7rem] md:not-italic md:font-normal md:text-[0.8rem] md:leading-4 md:text-white">Windows 7 64-bit only(No OSX support at this time)</p>
                </td>
                <td className="border border-solid border-[#979797] pl-2 pt-2 pb-2">
                  <h3 className="text-lg leading-[18px] tracking-[2px] text-[#FFB548] font-Bebas text-start xl:font-bold xl:text-2xl xl:leading-6 xl:tracking-[2px] xl:text-[#FFB548] md:text-[17.45px] md:leading-[17px] md:tracking-[1.45417px] md:text-[#FFB548] ">PROCESSOR:</h3>
                  <p className="not-italic font-normal text-sm leading-4 text-white font-Open_Sans text-start mt-2 xl:w-[258.05px] xl:not-italic xl:font-normal xl:text-lg xl:leading-[22px] xl:text-white xl:mt-2  md:w-[11.7rem] md:not-italic md:font-normal md:text-[0.8rem] md:leading-4 md:text-white">Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ</p>
                </td>
              </tr>
              <tr>
                <td className="border border-solid border-[#979797] pl-2 pt-2 pb-2">
                  <h3 className="text-lg leading-[18px] tracking-[2px] text-[#FFB548] font-Bebas text-start xl:not-italic xl:font-bold xl:text-2xl xl:leading-6 xl:tracking-[2px] xl:text-[#FFB548]">MEMORY:</h3>
                  <p className="not-italic font-normal text-sm leading-4 text-white font-Open_Sans text-start mt-2 xl:not-italic xl:font-normal xl:text-lg xl:leading-[22px] xl:text-justify xl:text-white xl:mt-2">8 GB RAM</p>
                </td>
                <td className="border border-solid border-[#979797] pl-2 pt-2 pb-2">
                  <h3 className="uppercase text-lg leading-[18px] tracking-[2px] text-[#FFB548] font-Bebas text-start xl:not-italic xl:font-bold xl:text-2xl xl:leading-6 xl:tracking-[2px] xl:text-[#FFB548]">storage:</h3>
                  <p className="not-italic font-normal text-sm leading-4 text-white font-Open_Sans text-start mt-2 xl:not-italic xl:font-normal xl:text-lg xl:leading-[22px] xl:text-justify xl:text-white xl:mt-2">8 GB available space</p>
                </td>
              </tr>
            </table>
              <div className="border border-solid border-[#979797] pl-2 pt-2 pb-7 pr-6">
                  <h3 className="uppercase text-lg leading-[18px] tracking-[2px] text-[#FFB548] font-Bebas text-start xl:font-bold xl:text-2xl xl:leading-6 xl:tracking-[2px] xl:text-[#FFB548]">GRAPHICS:</h3>
                  <p className="not-italic font-normal text-sm leading-4 text-white font-Open_Sans text-start mt-2 xl:not-italic xl:font-normal xl:text-lg xl:leading-[22px] xl:text-white xl:w-96 xl:mt-2  md:w-[11.7rem] md:not-italic md:font-normal md:text-[0.8rem] md:leading-4 md:text-white">NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)</p>
                </div>
            </div>

      </div>
      </section>
      <section className="min-h-screen section5bg" id="quotes">
      <div className="min-h-screen innerdiv5 pt-9 pl-[0.9rem] pr-3 pb-[2.9rem]  md:flex md:justify-between md:pl-[3.5rem] xl:flex xl:justify-between xl:pl-[7.4rem] ">
        <div className="xl:translate-y-48 xl:flex xl:flex-col xl:items-start md:flex md:flex-col md:items-start">
          <p className="font-Bebas text-base leading-4 tracking-[0.1rem] text-start text-white   xl:not-italic xl:font-bold xl:text-2xl xl:leading-6 xl:tracking-[0.1rem] xl:text-white">What people think?</p>
          <h3 className="text-[2rem] leading-8 tracking-[0.1rem] uppercase text-white font-Bebas text-start mt-[1.5rem] xl:not-italic xl:font-bold xl:text-[5rem] xl:leading-[5rem] xl:tracking-[0.1rem] xl:uppercase xl:text-white">Press quotes</h3>
          <p className="not-italic font-normal text-sm leading-4 text-justify text-white font-Open_Sans max-w-[20.1rem] pt-14">Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say.</p>
          <button className=" font-Open_Sans not-italic font-bold text-sm leading-[19px] text-center text-[#1A1917] btn3 pt-[0.7rem] pb-4 pl-[0.4rem] pr-[0.9rem] rounded-[0.1rem] mt-6 ">Read more testemonials</button>
        </div>
          <div className="flex justify-center flex-col gap-[1.3rem] mt-[1.9rem] xl:mt-0">
            <div className="xl:-translate-x-20 md:-translate-x-10"><Comments name={"Evan Lahti"} date={"October 18, 2018"} comment={"“One of my gaming highlights of the year.”"} pic={"assets/profilepic1.png"} work={"PC Gamer"}/></div>
            <div className="xl:-translate-x-40 md:-translate-x-20"><Comments pic={"assets/profilepic2.png"} name={"Jada Griffin"} date={"December 21, 2018"} comment={"“The next big thing in the world of streaming and survival games.”"} work={"Nerdreactor"}/></div>
            <div className="xl:-translate-x-10 md:-translate-x-5"><Comments pic={"assets/profilepic3.png"} name={"Aaron Williams"} date={"December 24, 2018 "} comment={"“Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.”"} work={"Uproxx"}/></div>
          </div>
      </div>
      </section>
      <section className="min-h-screen section5bg">
        <div className="min-h-screen innerdiv6 md:pl-[2.3rem] xl:pl-[10rem] xl:pr-[7.8rem] xl:overflow-hidden">
          {/* w-[122.25rem] */}
            <div className="xl:mb-32">
            <div className="flex md:gap-7 xl:gap-[4.2rem]">
            <div className="-translate-x-14 w-[100.25rem] md:-translate-x-0 xl:w-fit">
              <img src="assets/skull.svg" alt="" className="w-80 scale-110 translate-y-8 md:scale-150" />
              <div className="skulllighting absolute top-0 h-full"></div>
            </div>
            <div className="flex flex-col gap-3 relative">
              <p className="not-italic font-bold text-lg leading-[1.1rem] tracking-[0.1rem] text-white font-Bebas text-start md:not-italic md:font-bold md:text-[1.09rem] md:leading-[1.06rem] md:tracking-[0.09rem] md:text-white xl:not-italic xl:font-bold xl:text-2xl xl:leading-6 xl:tracking-[0.1rem] xl:text-white xl:w-fit">Want to stay in touch?</p>
              <p className="not-italic font-bold text-[2rem] leading-8 tracking-[0.1rem] uppercase text-white text-start font-Bebas md:not-italic md:font-normal md:text-[4.06rem] md:leading-[4.8rem] md:tracking-[0.2rem] md:uppercase md:text-white md:w-fit xl:not-italic xl:font-bold xl:text-[5rem] xl:leading-[5rem] xl:tracking-[0.1rem] xl:uppercase xl:text-white xl:w-fit">newsletter SUBSCRIBE</p>
              <p className="not-italic font-normal text-sm leading-[1.2rem] text-white font-Open_Sans text-start w-[12.8rem] md:not-italic md:font-normal md:text-[0.8rem] md:leading-4 md:text-white md:w-[30.3rem] xl:not-italic xl:font-normal xl:text-lg xl:leading-[1.3rem] xl:text-white xl:w-[43.31rem] ">In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.</p>
            </div>            
          </div>
          <span className="relative w-full xl:w-fit">
              <form action="" className="absolute ss:min-w-[310px] w-screen pl-5 -translate-y-5  -translate-x-2 ss:-translate-x-3 ss:-translate-y-0  md:flex md:gap-[0.9rem] md:translate-x-48 md:w-fit  xl:flex xl:translate-x-64 xl:items-center xl:gap-4  xl:-translate-y-48">
                <span className="xl:-translate-y-1">
                <label htmlFor="" className="not-italic font-normal text-xs leading-4 text-white mix-blend-normal opacity-50 rounded font-Open_Sans text-start relative top-[1.5rem] md:top-[1.5rem] md:not-italic md:font-normal md:text-[0.6rem] md:leading-[0.9rem] md:text-white md:mix-blend-normal md:opacity-50 md:rounded-[0.2rem] xl:-top-5 xl:left-32">Your email address</label>
                <input type="email" className="rounded-[0.2rem] bg-inputbg w-full pt-4 not-italic font-normal text-sm leading-[1.2rem] text-[#FFB548] font-Open_Sans md:min-h-[2.7rem] md:w-[16.7rem] xl:w-[22.9rem] xl:h-[3.8rem]" />
                </span>
                <button className="btn3 pt-[0.7rem] pb-4 px-12 not-italic font-bold text-sm leading-[1.2rem] text-center text-[#1A1917] rounded-[0.2rem] w-full mt-[1.3rem] md:w-[10rem] md:not-italic md:font-bold md:text-[0.7rem] md:leading-4 md:text-center md:capitalize md:text-[#1A1917] md:pl-[0.7rem] md:pr-[0.7rem] md:pt-[0.8rem] md:pb-[0.9rem] xl:pl-[4.3rem] xl:pr-[4.6rem] xl:pt-[1.1rem] xl:pb-[1.3rem] xl:w-fit xl:-translate-y-4">Subscribe now</button>
              </form>
          </span>
            </div>
          <Footer/>       
        </div> 
      </section>
    </div>
  );
}
