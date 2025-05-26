import PropTypes from 'prop-types'
import {Button} from '../../atoms'

import bgCurveMobile from './../../../assets/images/bg-curvy-mobile.svg'
import bgCurveDesktop from './../../../assets/images/bg-curvy-desktop.svg'


const Intro = ({image}) =>{
    return (
        <div className="part-1  flex flex-col gap-5 items-center w-[100%] relative">
            <div className="bg-primary-dark-blue-email w-[100%] h-[357px] lg:h-[1000px] box-border">
                <div className="w-[100%] absolute z-10 flex flex-col justify-center items-center px-5 pt-10">
                    <img src={image} alt="image-1" className=" w-[300px] sm:w-[500px]"/>                
                    <h1 className='font-semibold text-[1.5rem] text-center z-20  mt-14 lg:text-3xl lg:px-56 lg:leading-10'>All your files in one secure location, accessible anywhere.</h1>
                </div>
                <img src={bgCurveMobile} alt="" className=" z-0 translate-y-[14.5rem] absolute sm:hidden w-full h-auto"/>
                <img src={bgCurveDesktop} alt="" className=" z-0 translate-y-[32.5rem] absolute hidden sm:block w-full h-auto"/>
            </div>
            
            <div className="bg-primary-dark-blue-main-background flex flex-col gap-10 items-center px-10 mt-20 sm:mt-48 lg:px-80">
                <p className='text-center text-sm'>Fylo stores all your most important files in one secure location. Access them wherever 
                you need, share and collaborate with friends family, and co-workers.</p>
                <Button label="Get Started" size="w-[70%]"/>
            </div>
        </div>
    )
}

Intro.propTypes = {
    image: PropTypes.string
}

export default Intro
