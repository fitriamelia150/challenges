import PropTypes from "prop-types"

const Input = ({label, placeholder}) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <input className="h-12 px-5 py-2 rounded-full text-xs w-full lg:w-[360px]" placeholder={placeholder} />
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string
}

export default Input