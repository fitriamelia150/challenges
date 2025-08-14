import Image from "next/image";

export default function Projects(){
    return(
        <div id="projects" className="w-full flex flex-wrap lg:flex-nowrap">
            <Image
            src="/images/mobile/image-gallery-milkbottles.jpg"
            alt="image gallery milk bottles"
            width={188}
            height={188}
            className="w-[50%] md:hidden lg:block"
            />

            <Image
            src="/images/desktop/image-gallery-milkbottles.jpg"
            alt="image gallery milk bottles"
            width={384}
            height={385}
            className="w-[50%] hidden md:block lg:hidden"
            />

            <Image
            src="/images/mobile/image-gallery-orange.jpg"
            alt="image gallery orange"
            width={188}
            height={188}
            className="w-[50%] md:hidden lg:block"
            />

            <Image
            src="/images/desktop/image-gallery-orange.jpg"
            alt="image gallery orange"
            width={384}
            height={385}
            className="w-[50%] hidden md:block lg:hidden"
            />

            <Image
            src="/images/mobile/image-gallery-cone.jpg"
            alt="image gallery cone"
            width={188}
            height={188}
            className="w-[50%] md:hidden lg:block"
            />

            <Image
            src="/images/desktop/image-gallery-cone.jpg"
            alt="image gallery cone"
            width={384}
            height={385}
            className="w-[50%] hidden md:block lg:hidden"
            />

            <Image
            src="/images/mobile/image-gallery-sugar-cubes.jpg"
            alt="image gallery sugar cubes"
            width={188}
            height={188}
            className="w-[50%] md:hidden lg:block"
            />

            <Image
            src="/images/desktop/image-gallery-sugarcubes.jpg"
            alt="image gallery sugar cubes"
            width={384}
            height={385}
            className="w-[50%] hidden md:block lg:hidden"
            />
        </div>
    )
}