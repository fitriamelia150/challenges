
import Intro from './../Intro'
import Main from './../Main'

import image1 from './../../../assets/images/illustration-intro.png'



const Body = () =>{
    return(
        <div className="text-neutral-white flex flex-col gap-40 bg-primary-dark-blue-main-background">
            <Intro image={image1}/>
            <Main/>
        </div>
    )
}

export default Body