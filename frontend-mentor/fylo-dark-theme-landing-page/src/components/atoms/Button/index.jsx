import PropTypes from "prop-types"
import classnames from "classnames"

const Button = (props) => {
    const buttonStyle = classnames("bg-accent-cyan h-12 text-neutral-white text-sm rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue font-semibold hover-button lg:text-[10px]", props.size)

    return (
        <button className={buttonStyle}>{props.label}</button>
    )
}

Button.propTypes = {
    props: PropTypes.string,
    size: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export default Button