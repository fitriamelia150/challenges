import { Fraunces, Barlow } from "next/font/google";

export const fraunces = Fraunces({
    subsets:['latin'],
    weight: ['200', '400', '600', '800'],
    display: 'swap',
    variable: '--font-fraunces',
})

export const barlow = Barlow({
    weight: ['100', '200', '600'],
    style: 'normal',
    variable: '--font-barlow'
})