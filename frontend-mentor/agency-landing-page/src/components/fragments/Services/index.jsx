const Services = () => {
    return (
        <div id="services" className=" flex flex-col md:flex-row">
            <div className="relative md:w-1/2">
                <div className="flex flex-col justify-center items-center gap-10 p-5 absolute mt-[25rem] md:mt-[15rem] md:px-24 md:gap-5">
                    <h1 className="font-fraunces font-bold text-dark-desaturated-cyan text-3xl md:text-2xl">Graphic Design</h1>
                    <p className="text-center font-barlow font-semibold text-dark-desaturated-cyan md:text-sm">Great design makes you memorable. We deliver artwork that underscores your brand message and capture potential clients attention.</p>
                </div>

                <img src="/images/mobile/image-graphic-design.jpg" alt="" className="md:hidden"/>
                <img src="/images/desktop/image-graphic-design.jpg" alt="" className="hidden md:block"/>

            </div>

            <div className="relative md:w-1/2">
                <div className="flex flex-col justify-center items-center gap-10 p-5 absolute mt-[25rem] md:mt-[15rem] md:px-24 md:gap-5">
                    <h1 className="font-fraunces font-bold text-dark-blue text-3xl md:text-2xl">Photography</h1>
                    <p className="text-center font-barlow font-semibold text-dark-blue md:text-sm">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </div>

                <img src="/images/mobile/image-photography.jpg" alt="" className="md:hidden"/>
                <img src="/images/desktop/image-photography.jpg" alt="" className="hidden md:block"/>
            </div>
        </div>
    )
}

export default Services