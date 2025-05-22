import logo from './../../../assets/logo.svg'
import {IconLocation,
        IconPhone,
        IconEmail,
        IconFacebook,
        IconTwitter,
        IconInstagram
} from './../../../assets'

const Footer = () =>{
    return(
        <div className="text-neutral-white bg-primary-dark-blue-footer-background flex flex-col gap-10 px-10 pt-[300px] pb-10 lg:px-20">
            <img src={logo} alt="icon-logo" className='w-48 lg:w-24'/>

            <div className="flex flex-col gap-20 lg:flex-row lg:gap-1 lg:justify-between lg:place-items-start lg:text-[10px]">
                <div className=" flex flex-col gap-5 lg:w-96 lg:flex-row">
                    <div className="flex items-center gap-5">
                        <IconLocation/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-5">
                            <IconPhone/>
                            <p>+1-543-123-4567</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <IconEmail/>
                            <p>example@fylo.com</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <h1 className='hover:font-semibold hover:cursor-pointer'>About Us</h1>
                    <p className='hover:font-semibold hover:cursor-pointer'>Jobs</p>
                    <p className='hover:font-semibold hover:cursor-pointer'>Press</p>
                    <p className='hover:font-semibold hover:cursor-pointer'>Blog</p>
                </div>

                <div className="">
                    <h1 className='hover:font-semibold hover:cursor-pointer'>Contact Us</h1>
                    <p className='hover:font-semibold hover:cursor-pointer'>Terms</p>
                    <p className='hover:font-semibold hover:cursor-pointer'>Privacy</p>
                </div>

                <div className="flex items-center justify-center gap-5">
                    <IconFacebook size="20px"/>
                    <IconTwitter size="20px"/>
                    <IconInstagram size="20px"/>
                </div>
            </div>
        </div>
    )
}

export default Footer