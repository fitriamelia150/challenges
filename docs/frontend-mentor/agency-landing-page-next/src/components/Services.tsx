import { barlow, fraunces } from "@/fonts/fonts";
import Image from "next/image";
import FadeIn from "./animations/FadeIn";

export default function Services() {
    return(
        <div id="service" className="w-full lg:flex">
            <FadeIn duration={1} initialX={-100} className="relative  lg:w-1/2">
                <Image
                src="/images/mobile/image-graphic-design.jpg"
                alt="image graphic design"
                className="w-full md:hidden"
                width={375}
                height={600}
                />

                <Image
                src="/images/desktop/image-graphic-design.jpg"
                alt="image graphic design"
                className="hidden md:block w-full"
                width={720}
                height={600}
                />

                <div className="absolute bottom-0 flex flex-col gap-8 mb-14 px-4 md:px-48 lg:px-20">
                    <h1 className={`${fraunces.className} text-center capitalize text-green-800 text-preset-5 font-bold`}>graphic design</h1>
                    <p className={`${barlow.className} text-center text-preset-11 font-semibold text-green-600`}>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention.</p>
                </div>
            </FadeIn>

            <FadeIn duration={1} initialX={100} className="relative lg:w-1/2">
                <Image
                src="/images/mobile/image-photography.jpg"
                alt="image photography"
                className="w-full md:hidden"
                width={375}
                height={600}
                />

                <Image
                src="/images/desktop/image-photography.jpg"
                alt="image photography"
                className="w-full hidden md:block"
                width={720}
                height={600}
                />

                <div className="absolute bottom-0 flex flex-col gap-8 mb-14 px-4 md:px-48 lg:px-20">
                    <h1 className={`${fraunces.className} text-center capitalize text-blue-950 opacity-75 text-preset-5 font-bold`}>photography</h1>
                    <p className={`${barlow.className} text-center text-preset-11 font-semibold text-blue-800`}>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </div>
            </FadeIn>
        </div>
    )
}