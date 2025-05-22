const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-10 px-5 py-10 bg-dark-moderate-cyan">
            <h1 className="text-dark-desaturated-cyan text-3xl font-barlow font-extrabold">sunnyside</h1>

            <div className="flex gap-10 text-dark-desaturated-cyan">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
            </div>

            <div className=" flex gap-5">
                <img src="/images/icon-facebook.svg" alt="icon-facebook" />
                <img src="/images/icon-instagram.svg" alt="icon-instagram" />
                <img src="/images/icon-twitter.svg" alt="icon-twitter" />
                <img src="/images/icon-pinterest.svg" alt="icon-pinterest" />
            </div>
        </div>
    )
}

export default Footer