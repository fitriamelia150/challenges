const Button = (props) => {
    const { children, onClick } = props

    return (
        <button className="bg-primary-orange w-full py-3 rounded-md font-bold hover:bg-primary-pale-orange flex justify-center items-center gap-3 shadow-primary-orange drop-shadow-md h-14" onClick={() => onClick()}>
            {children}
        </button>
    )
}

export default Button