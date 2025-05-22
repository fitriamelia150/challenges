const Projects = () => {
    return (
        <div id="projects" className="flex flex-row flex-wrap">
            <img src="/images/mobile/image-gallery-milkbottles.jpg" alt="" className="w-1/2 md:hidden"/>
            <img src="/images/mobile/image-gallery-orange.jpg" alt="" className="w-1/2 md:hidden"/>
            <img src="/images/mobile/image-gallery-cone.jpg" alt="" className="w-1/2 md:hidden"/>
            <img src="/images/mobile/image-gallery-sugar-cubes.jpg" alt="" className="w-1/2 md:hidden"/>

            <img src="/images/desktop/image-gallery-milkbottles.jpg" alt="" className="hidden md:block md:w-1/4"/>
            <img src="/images/desktop/image-gallery-orange.jpg" alt="" className="hidden md:block md:w-1/4"/>
            <img src="/images/desktop/image-gallery-cone.jpg" alt="" className="hidden md:block md:w-1/4"/>
            <img src="/images/desktop/image-gallery-sugarcubes.jpg" alt="" className="hidden md:block md:w-1/4"/>
        </div>
    )
}

export default Projects