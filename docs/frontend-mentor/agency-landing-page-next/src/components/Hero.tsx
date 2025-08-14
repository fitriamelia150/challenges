import { fraunces } from "@/fonts/fonts";
import Image from "next/image";
import FadeIn from "./animations/FadeIn";

export default function Hero() {
    return(
        <div className="realtive h-[538px] md:h-[800px] flex flex-col items-center justify-center
        bg-[url('/images/mobile/image-header.jpg')]
        md:bg-[url('/images/desktop/image-header.jpg')]
        bg-center bg-no-repeat bg-cover">
           
            <FadeIn duration={1} initialY={-30} className="absolute w-full flex flex-col items-center justify-center px-20">
                <p className={`${fraunces.className} uppercase text-primary-white text-center font-bold mb-10
                text-[42px] leading-[125%] tracking-[6px]
                md:text-[56px] md:tracking-[9px]
                `}>we are creatives</p>
                <img src="/images/icon-arrow-down.svg" alt="icon-arrow-down"/>
            </FadeIn>
                       
        </div>
    )
}