import { barlow, fraunces } from "@/fonts/fonts";
import Image from "next/image";
import FadeIn from "./animations/FadeIn";

export default function About() {
    return(
        <div id="about" className="grid grid-cols-1 lg:grid-cols-2">
            <Image
            src="/images/mobile/image-transform.jpg"
            alt="image-transform-at-about"
            className="w-full md:hidden order-1"
            width={375}
            height={312}
            />

            <Image
            src="/images/desktop/image-transform.jpg"
            alt="image-transform-at-about"
            className="w-full hidden md:block order-2"
            width={768}
            height={600}
            />

            <FadeIn duration={1} initialX={-50} className="flex flex-col gap-6 items-center lg:items-start justify-center w-full min-h-[437px] px-4 md:px-48 lg:px-20 order-2 lg:order-1">
                <h1 className={`${fraunces.className} text-preset-4 md:text-preset-3 font-bold text-grey-950  text-center`}>Transform your brand</h1>
                <p className={`${barlow.className} text-preset-10 text-grey-550 text-center lg:text-left`}>We are full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>

                <div className="w-fit relative flex items-center justify-center">
                    <a href="" className={`${fraunces.className} uppercase text-grey-950 text-preset-8 font-bold`}>learn more</a>
                    <div className="w-[137px] h-2.5 bg-yellow-500 rounded-full opacity-25 absolute translate-y-1.5"></div>
                </div>
            </FadeIn>

            <Image
            src="/images/mobile/image-stand-out.jpg"
            alt="image-standout-at-about"
            className="w-full md:hidden order-3"
            width={375}
            height={312}
            />

            <Image
            src="/images/mobile/image-stand-out.jpg"
            alt="image-standout-at-about"
            className="w-full hidden md:block order-3"
            width={768}
            height={600}
            />

            <FadeIn duration={1} initialX={50} className="flex flex-col gap-6 items-center lg:items-start justify-center w-full min-h-[437px] px-4 md:px-48 lg:px-20 order-4">
                <h1 className={`${fraunces.className} text-preset-4 font-bold text-grey-950  text-center`}>Stand out to the right audience</h1>
                <p className={`${barlow.className} text-preset-10 text-grey-550 text-center lg:text-left`}>Using a collaborative formula of designers, researchers, photographers, videograpgers, and copywriters, we'll build and extend your brand in digital places.</p>

                <div className="w-fit relative flex items-center justify-center">
                    <a href="" className={`${fraunces.className} uppercase text-grey-950 text-preset-8 font-bold`}>learn more</a>
                    <div className="w-[137px] h-2.5 bg-red-500 rounded-full opacity-25 absolute translate-y-1.5"></div>
                </div>
            </FadeIn>
        </div>
    )
}