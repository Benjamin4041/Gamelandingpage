import React from "react";

export default function Comments({name,pic,comment,date,work,style}) {
  return <div className={"bg-commentbg  w-full rounded-[10px] pt-2 pl-3 pr-3 pb-[1rem] xl:w-[28.3rem] md:w-[20.15rem]"}>
    <div className="flex justify-between items-center">
        <div className="w-[2.5rem] h-[2.5rem] rounded-[50px] bg-orange-400  ">
            <img src={pic} alt="" className="-translate-y-1 -translate-x-1" />
        </div>
        <span>
            <p className="text-[1.3rem] leading-[1.3rem] tracking-[0.1rem] text-[#FFB548] font-Bebas xl:not-italic xl:font-bold xl:text-2xl xl:leading-6 xl:tracking-[0.1rem] xl:text-[#FFB548]">{name}</p>
            <p className="font-Bebas not-italic font-normal text-sm leading-[1.3rem] text-justify text-white opacity-50 xl:not-italic xl:font-normal xl:text-lg xl:leading-[1.3rem] xl:text-justify xl:text-white;">{work}</p>
        </span>
        <img src="assets/twitterlogo.svg" alt="twitter" />
    </div>
    <p className="w-[14.5rem] not-italic font-normal text-sm leading-[1.2rem] text-white font-Open_Sans text-start mt-[1.5rem] xl:w-fit xl:not-italic xl:font-normal xl:text-lg xl:leading-[25px] xl:text-white">{comment}</p>
    <p className="not-italic font-normal text-xs leading-4 text-white mix-blend-normal opacity-50 font-Open_Sans text-start mt-[1.1rem]">{date}</p>
  </div>
}
