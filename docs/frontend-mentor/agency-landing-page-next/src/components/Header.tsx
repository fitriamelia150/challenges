'use client'

import Image from "next/image";
import { barlow, fraunces } from "@/fonts/fonts";
import { useState } from "react";
import Navlinks from "./Navlinks";

export default function HeaderComponent() {
    const [menuActive, isMenuActive] = useState(false);

    const handleMenu = () => {
        isMenuActive(!menuActive);
    }

    return(
        <>
            <nav className="absolute z-10 w-full  py-8 px-6 md:px-10 md:py-12">
                <div className="relative">
                    <div className="flex justify-between">
                        <Image
                        src="/images/logo.svg"
                        alt="Logo"
                        className="md:w-[170px]"
                        width={123.64}
                        height={24}
                        />

                        <Image
                        src="/images/icon-hamburger.svg"
                        alt="icon-menu"
                        className="md:w-[32px] cursor-pointer lg:hidden"
                        width={24}
                        height={18}
                        onClick={handleMenu}
                        />

                        <div className={`${barlow.className} hidden lg:flex items-center gap-10 capitalize text-preset-10 text-white`}>
                            <Navlinks styleContact="text-grey-950 text-preset-8 bg-white hover:bg-white/50 hover:text-white"/>
                        </div>
                    </div>

                    <div className={`${barlow.className} bg-white w-full h-[327px] flex flex-col gap-5 items-center justify-center text-center capitalize text-grey-550 text-preset-9 absolute top-0 translate-y-24
                    after:content-[''] after:absolute after:top-0 after:right-0 after:border-t-[40px] after:border-r-[40px]
                    after:border-t-transparent after:border-r-white after:transform after:-translate-y-10
                    ${ menuActive ? 'block' :' hidden'}
                    `}>
                        <Navlinks styleContact="bg-yellow-500 text-grey-950 text-preset-8"/>                    
                    </div>

                </div>
            </nav>

        </>
    )
}