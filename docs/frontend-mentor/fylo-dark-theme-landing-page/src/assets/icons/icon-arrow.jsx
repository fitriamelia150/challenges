const IconArrow = () => {
    return (
        <>
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><circle id="b" cx="6" cy="6" r="6"/><filter x="-25%" y="-25%" width="150%" height="150%" filterUnits="objectBoundingBox" id="a"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0" in="shadowBlurOuter1"/></filter></defs><g fill="none" fillRule="evenodd"><g transform="translate(2 2)"><use fill="#000" filter="url(#a)" xlinkHref="#b"/><use fill="#62E0D9" xlinkHref="#b"/></g><path d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z" fill="#1B2330"/></g></svg>
        </>
    )
}

export default IconArrow