import PropTypes from "prop-types"

const  TestimoniCard  = ({desc, user, position, image}) => {
    return (
        <div className="bg-primary-dark-blue-testimonials-background p-5 rounded-sm flex flex-col gap-5 text-[9px] font-light w-56 lg:w-64">
            <p>{desc}</p>

            <div className="flex gap-3 items-center">
                <img src={image} alt="testi-user" className="w-10 rounded-full"/>

                <div className="">
                    <h1 className="font-semibold">{user}</h1>
                    <p className="text-[7px]">{position}</p>
                </div>
            </div>
        </div>
    )
}

TestimoniCard.propTypes = {
    desc: PropTypes.string,
    user: PropTypes.string,
    position: PropTypes.string,
    image: PropTypes.string,
}

export default TestimoniCard