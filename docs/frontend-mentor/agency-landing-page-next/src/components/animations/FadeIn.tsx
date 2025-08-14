'use client'

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

type FadeInProps = {
    children: React.ReactNode;
    duration?: number;
    initialX?:number;
    initialY?:number;
    delay?:number;
    className?:string;
    id?:string;
}

export default function FadeIn({children, duration = 0.6, initialX = 0, initialY = 0, delay = 0, className = "", id = ""} : FadeInProps) {
    const controls = useAnimation();
    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.2});

    useEffect(() => {
        if (inView) {
            controls.start({opacity: 1, x:0, y:0});
        }
    }, [controls, inView]);

    return (
        <motion.div
        ref={ref}
        initial={{ opacity: 0, x:initialX, y:initialY}}
        animate={controls}
        transition={{ duration: duration, delay: delay}}
        className={className}
        id={id}
        >
            {children}
        </motion.div>
    )
}