import React from 'react'
export default function Footer() {
  return (
    <>
        <footer className='mt-40 pl-[0.9em] pr-[0.9rem] md:pl-0 xl:pl-0 xl:pr-0 xl:mt-0'>
            <div className='flex flex-col justify-center items-center  border-b-[0.873968px] border-b-white border-solid pb-7 mb-7 md:flex-row md:flex md:justify-between md:items-center md:border-b-white md:border-b-2 md:pb-[1.9rem] xl:flex-row xl:flex xl:justify-between xl:items-center xl:border-b-white xl:border-b-2 xl:pb-[1.9rem] '>
                <img src="/assets/logo.svg" alt="" />
                <span className='flex flex-wrap gap-4 mt-8 justify-center w-[16.6rem] md:mt-0 md:flex md:gap-2 md:w-fit xl:mt-0 xl:flex xl:gap-9 xl:w-fit '>
                    <a href='#main'className='not-italic font-bold text-xs leading-4 text-right tracking-widest uppercase xl:not-italic xl:font-bold xl:text-xs xl:leading-4 xl:text-right xl:tracking-widest xl:uppercase text-white font-Open_Sans'>MAIN</a>
                    <a href='#about'className='not-italic font-bold text-xs leading-4 text-right tracking-widest uppercase xl:not-italic xl:font-bold xl:text-xs xl:leading-4 xl:text-right xl:tracking-widest xl:uppercase text-white font-Open_Sans'>about</a>
                    <a href='#fetures'className='not-italic font-bold text-xs leading-4 text-right tracking-widest uppercase xl:not-italic xl:font-bold xl:text-xs xl:leading-4 xl:text-right xl:tracking-widest xl:uppercase text-white font-Open_Sans'>game features</a>
                    <a href='#system_requirement'className='not-italic font-bold text-xs leading-4 text-right tracking-widest uppercase xl:not-italic xl:font-bold xl:text-xs xl:leading-4 xl:text-right xl:tracking-widest xl:uppercase text-white font-Open_Sans'>System requirements</a>
                    <a href='#quotes'className='not-italic font-bold text-xs leading-4 text-right tracking-widest uppercase xl:not-italic xl:font-bold xl:text-xs xl:leading-4 xl:text-right xl:tracking-widest xl:uppercase text-white font-Open_Sans'>quotes</a>
                </span>
                <div className=' flex gap-[3.4rem] mt-[2.8rem] md:mt-0 md:gap-3 md:items-center md:justify-center xl:mt-0 xl:flex xl:gap-5'>
                    {/* facebook */}
                    <a href=''><span className='cursor-pointer' >
                        <svg className='fill-white hover:fill-[#FF1313]' width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.65382 19.1726H2.56282V9.67859H0.517822V6.40559H2.56282V4.44159C2.56282 1.77259 3.71782 0.183594 6.99582 0.183594H9.72582V3.45659H8.02082C6.74282 3.45659 6.65882 3.91459 6.65882 4.76859L6.65382 6.40559H9.74582L9.38382 9.67859H6.65382V19.1726Z"/>
                        </svg>
                    </span></a>
                    {/* twitter */}
                    <a href=''><span className='cursor-pointer'>
                        <svg className='fill-white hover:fill-[#FF1313]' width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2138 2.42967C20.4408 2.75167 19.6098 2.96667 18.7388 3.06467C19.6288 2.56467 20.3118 1.77267 20.6338 0.830668C19.7998 1.29267 18.8778 1.62867 17.8958 1.81067C17.1108 1.02467 15.9898 0.534668 14.7508 0.534668C12.3708 0.534668 10.4398 2.34367 10.4398 4.57367C10.4398 4.89067 10.4778 5.19967 10.5518 5.49467C6.96981 5.32567 3.79381 3.71767 1.66781 1.27467C1.29681 1.87167 1.08481 2.56467 1.08481 3.30567C1.08481 4.70567 1.84581 5.94367 3.00181 6.66767C2.29581 6.64567 1.63181 6.46467 1.04981 6.16167C1.04981 6.17967 1.04981 6.19467 1.04981 6.21367C1.04981 8.17067 2.53481 9.80267 4.50681 10.1737C4.14581 10.2657 3.76381 10.3137 3.37181 10.3137C3.09381 10.3137 2.82381 10.2897 2.56081 10.2437C3.10881 11.8467 4.70081 13.0157 6.58681 13.0487C5.11181 14.1317 3.25381 14.7767 1.23381 14.7767C0.885811 14.7767 0.542811 14.7577 0.205811 14.7207C2.11281 15.8657 4.37881 16.5357 6.81281 16.5357C14.7408 16.5357 19.0758 10.3797 19.0758 5.04267C19.0758 4.86667 19.0708 4.69367 19.0628 4.51967C19.9048 3.94967 20.6358 3.23867 21.2138 2.42967Z"/>
                        </svg>
                    </span></a>
                    {/* youtube */}
                    <a href=''><span className='cursor-pointer'>
                        <svg className='fill-white hover:fill-[#FF1313]' width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.61 0.183594H5.98961C3.12627 0.183594 0.799805 2.55085 0.799805 5.4644V12.8973C0.799805 15.8163 3.12627 18.1781 5.98961 18.1781H20.6046C23.4733 18.1781 25.7944 15.8108 25.7944 12.8973V5.4644C25.7998 2.55085 23.4733 0.183594 20.61 0.183594ZM17.0959 9.54779L10.2575 12.8642C10.0731 12.9524 9.86705 12.82 9.86705 12.6103V5.7679C9.86705 5.55821 10.084 5.42578 10.2629 5.51958L17.1013 9.04564C17.3074 9.15048 17.302 9.44846 17.0959 9.54779Z"/>
                        </svg>
                    </span></a>
                    {/* twitch */}
                    <a href=''><span className='cursor-pointer'>
                        <svg className='fill-white hover:fill-[#FF1313]' width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9602 13.6252V9.5538V0.680176H2.93894L0.811279 2.97688V15.0868H6.13043V18.845H8.47085L11.024 16.1307H17.407L19.9602 13.6252ZM7.40694 13.4165H4.00268C3.76864 13.4165 3.57715 13.2286 3.57715 12.9989V2.76817C3.57715 2.5385 3.76864 2.35059 4.00268 2.35059H17.6197C17.8537 2.35059 18.0452 2.5385 18.0452 2.76817V10.7022C18.0452 10.8171 18.0027 10.9215 17.9229 10.9998L15.5825 13.2965C15.5027 13.3748 15.391 13.4165 15.2793 13.4165H11.3697L8.07183 15.6401C8.00268 15.6871 7.91757 15.7132 7.83247 15.7132C7.76332 15.7132 7.69949 15.6976 7.63566 15.6662C7.49204 15.5932 7.40694 15.4522 7.40694 15.2956V13.4165Z"/>
                        <path d="M13.79 9.76274V5.58691H12.0878V9.76274H13.79ZM9.53465 9.76274V5.58691H7.83252V9.76274H9.53465Z" fill="white"/>
                        </svg>
                    </span></a>
                </div>
            </div>
            <span className='flex flex-col xl:flex-row xl:justify-between xl:pt-6 md:flex-row md:justify-between md:items-center'>
                <p className='not-italic font-normal text-xs leading-4 text-white mix-blend-normal opacity-50    xl:not-italic xl:font-normal xl:text-sm xl:leading-[1.1rem] xl:text-white xl:mix-blend-normal xl:opacity-50 font-Open_Sans'> © 2018 Outpost Games, Inc. All Rights Reserved</p>
                <p className='not-italic font-bold text-xs leading-[2.1rem] text-center tracking-widest uppercase text-white w-[10.3rem] flex flex-col mt-[2.1rem]  md:mt-0 md:flex-row md:w-fit xl:mt-0 xl:flex-row xl:justify-center xl:items-center self-center xl:w-fit xl:not-italic xl:font-bold xl:text-xs xl:leading-4 xl:text-right xl:tracking-widest xl:uppercase xl:text-white font-Open_Sans'>Privacy Policy <span>| Terms of Services |</span>  Code of Conduct </p>
            </span>
        </footer>
    </>
        
 
  )
}
