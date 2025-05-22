export const Navbar = () => {
    return (
        <div className="flex flex-col items-center gap-5">
            <p className="text-main-white font-display">adamkeyes</p>

            <div className="social flex gap-5">
                <img src="/images/icon-github.svg"/>
                <img src="/images/icon-frontend-mentor.svg"/>
                <img src="/images/icon-linkedin.svg"/>
                <img src="/images/icon-twitter.svg"/>
            </div>
        </div>
    )
}