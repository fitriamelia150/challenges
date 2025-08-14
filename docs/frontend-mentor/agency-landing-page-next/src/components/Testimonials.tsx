import { barlow, fraunces } from "@/fonts/fonts";
import Image from "next/image";

export default function Testimonials() {
    return (
        <div className="flex flex-col items-center justify-center mt-14 mb-14 px-5 md:px-10 lg:h-[777px]">
            <h1 className={`${fraunces.className} uppercase text-preset-6 text-grey-400 font-bold text-center mb-14`}>client testimonials</h1>

            <div className="flex flex-col gap-14 lg:flex-row lg:gap-5">
                <div className="flex flex-col items-center">
                    <Image
                    src="/images/image-emily.jpg"
                    alt="image-emily"
                    width={72}
                    height={72}
                    className="rounded-full mb-14"
                    />

                    <p className={`${barlow.className}text-preset-10 text-grey-600 font-semibold text-center mb-8`}>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>

                    <div className="">
                        <h1 className={`${fraunces.className} tex-preset-7 font-bold text-grey-950 capitalize text-center`}>emily r.</h1>
                        <p className={`${barlow.className} text-preset-12 text-grey-400 text-center capitalize`}>marketing director</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <Image
                    src="/images/image-thomas.jpg"
                    alt="image-thomas"
                    width={72}
                    height={72}
                    className="rounded-full mb-14"
                    />

                    <p className={`${barlow.className}text-preset-10 text-grey-600 font-semibold text-center mb-8`}>Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>

                    <div className="">
                        <h1 className={`${fraunces.className} tex-preset-7 font-bold text-grey-950 capitalize text-center`}>thomas s.</h1>
                        <p className={`${barlow.className} text-preset-12 text-grey-400 text-center capitalize`}>chief operating officer</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <Image
                    src="/images/image-jennie.jpg"
                    alt="image-jennie"
                    width={72}
                    height={72}
                    className="rounded-full mb-14"
                    />

                    <p className={`${barlow.className}text-preset-10 text-grey-600 font-semibold text-center mb-8`}>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>

                    <div className="">
                        <h1 className={`${fraunces.className} tex-preset-7 font-bold text-grey-950 capitalize text-center`}>jennie f.</h1>
                        <p className={`${barlow.className} text-preset-12 text-grey-400 text-center capitalize`}>business owner</p>
                    </div>
                </div>
            </div>

            
        </div>
    )
}