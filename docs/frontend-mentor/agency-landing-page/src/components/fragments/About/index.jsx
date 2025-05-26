const About = () => {
    return (
        <div id="about" className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2">
            <img src="/images/mobile/image-transform.jpg" alt="transform-image" className="md:hidden"/>
            <img src="/images/desktop/image-transform.jpg" alt="transform-image" className="hidden md:block md:col-start-2 md:row-start-1 w-full h-full"/>

            <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-10 px-10 py-20 bg-white md:pl-24">
                <h1 className="font-fraunces font-bold text-4xl text-center md:text-left text-very-dark-desaturated-blue">Transform your brand</h1>
                <p className="text-center md:text-left font-barlow font-bold text-dark-grayish-blue">we are full-service creative agenct specializing in gelping brands grow fast. engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a href="#" className="font-fraunces uppercase font-bold text-very-dark-desaturated-blue">learn more</a>
            </div>

            <img src="/images/mobile/image-stand-out.jpg" alt="stand-out-image" className="md:hidden"/>
            <img src="/images/desktop/image-stand-out.jpg" alt="stand-out-image" className="hidden md:block w-full h-full"/>

            <div className="flex flex-col justify-center items-center md:items-start md:justify-start gap-10 px-10 py-20 bg-white md:pl-20 md:pr-24">
                <h1 className="font-fraunces font-bold text-4xl text-center md:text-left text-very-dark-desaturated-blue">Stand out to the right audience</h1>
                <p className="text-center md:text-left font-barlow font-bold text-dark-grayish-blue">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
                <a href="#" className="font-fraunces uppercase font-bold text-very-dark-desaturated-blue">learn more</a>
            </div>
        </div>
    )
}

export default About