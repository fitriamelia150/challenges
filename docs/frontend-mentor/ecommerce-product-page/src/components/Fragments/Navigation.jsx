import { useDispatch, useSelector } from "react-redux"
import { handleNavCart } from "../../redux/slices/navSlice"
import { handleSidebar } from "../../redux/slices/sidebarSlice"
import CartLayout from "../../components/Layouts/CartLayout"

const Navigation = () => {
    const dispatch = useDispatch()
    const totalQty = useSelector(state => state.cart.totalQty)
    
    return (
        <nav className="flex justify-between items-center p-5 md:mb-10 md:p-0 md:pt-10">
            <div className="flex items-center justify-center gap-4 lg:gap-16">
                <img src="/images/icon-menu.svg" alt="icon-menu" className="cursor-pointer lg:hidden" onClick={() => dispatch(handleSidebar())}/>
                <img src="/images/logo.svg" alt="icon-logo" className="cursor-pointer"/>

                <ul className="hidden lg:flex gap-5 cursor-pointer text-dark-grayish-blue text-sm">
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="flex items-center gap-5 relative md:gap-12">
                <img src="/images/icon-cart.svg" alt="icon-cart" className="cursor-pointer" onClick={() => dispatch(handleNavCart())}/>
                <img src="/images/image-avatar.png" alt="icon-avatar" className="w-6 cursor-pointer md:w-10"/>
                
                {totalQty > 0 &&(
                    <span className="bg-orange-400 text-white font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center absolute translate-x-2 -translate-y-2">{totalQty}</span>
                )}
            </div>

            {/* popup cart */}
            <CartLayout/>
        </nav>
    )
}

export default Navigation