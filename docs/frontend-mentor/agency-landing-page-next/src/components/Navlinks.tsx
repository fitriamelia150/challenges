import { fraunces } from "@/fonts/fonts";

type NavlinksProp = {
    styleContact?: string
}

export default function Navlinks({styleContact} : NavlinksProp) {
    return (
        <>
            <a href="#about">about</a>
            <a href="#service">service</a>
            <a href="#projects">projects</a>
            <a href="#" className={`${fraunces.className} ${styleContact}  px-5 py-2 rounded-full uppercase `}>contact</a>
        </>
    )
}