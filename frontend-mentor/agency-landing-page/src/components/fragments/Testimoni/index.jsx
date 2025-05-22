const Testimoni = () => {
    return (
        <div className="py-20 px-5 md:py-28 flex flex-col justify-center items-center gap-10">
            <h1 className="font-fraunces uppercase font-semibold text-grayish-blue text-sm tracking-[0.5em]">client testimonials</h1>
            
            <div className="flex flex-col justify-center items-center gap-14 md:flex-row md:px-20 ">
                <div className="flex flex-col justify-center items-center gap-5 md:gap-10">
                    <img src="/images/image-emily.jpg" alt="" className="w-10 rounded-full"/>
                    <p className="text-center font-barlow font-semibold text-dark-grayish-blue md:text-xs">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>

                    <div className="flex flex-col justify-center items-center">
                        <h2 className="font-fraunces font-bold text-very-dark-desaturated-blue">Emily R.</h2>
                        <p className="font-barlow text-grayish-blue text-sm">Marketing Director</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-5 md:gap-10">
                    <img src="/images/image-thomas.jpg" alt="" className="w-10 rounded-full"/>
                    <p className="text-center font-barlow font-semibold text-dark-grayish-blue md:text-xs">Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>

                    <div className="flex flex-col justify-center items-center">
                        <h2 className="font-fraunces font-bold text-very-dark-desaturated-blue">Thomas S.</h2>
                        <p className="font-barlow text-grayish-blue text-sm">Chief Operating Officer</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-5 md:gap-10">
                    <img src="/images/image-jennie.jpg" alt="" className="w-10 rounded-full"/>
                    <p className="text-center font-barlow font-semibold text-dark-grayish-blue md:text-xs">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>

                    <div className="flex flex-col justify-center items-center">
                        <h2 className="font-fraunces font-bold text-very-dark-desaturated-blue">Jennie F.</h2>
                        <p className="font-barlow text-grayish-blue text-sm">Business Owner</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Testimoni