// import Logo from './../../../assets'
import Logo from './../../../assets/logo.svg'

const Navbar = () =>{
    return(
        <div className="flex justify-between items-center py-6 px-5 bg-primary-dark-blue-email lg:p-10">
            <div className="w-[100px]">
                <img src={Logo} alt="logo" className=""/>
            </div>
        
            <div className="text-neutral-white flex gap-3 capitalize font-light text-xs">
                <p className='hover-link-menu cursor-pointer'>feature</p>
                <p className='hover-link-menu cursor-pointer'>team</p>
                <p className='hover-link-menu cursor-pointer'>sign in</p>
            </div>
        </div>
    )
}

export default Navbar