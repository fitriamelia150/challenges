import { TestimoniCard, SubscribeCard } from '../../molecule'
import { 
    IconAccessAnywhere, 
    IconAnyFile, 
    IconArrow, 
    IconCollaboration, 
    IconSecurity
} from '../../../assets'

import image2 from './../../../assets/images/illustration-stay-productive.png'
import profile1 from './../../../assets/images/profile-1.jpg'
import profile2 from './../../../assets/images/profile-2.jpg'
import profile3 from './../../../assets/images/profile-3.jpg'
import bgQuotes from './../../../assets/images/bg-quotes.png'

const Main = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="part-2 flex flex-col gap-28 px-10 items-center justify-center md:flex-row md:flex-wrap md:px-60 lg:px-10 ">
                <div className="part-2-section">
                    <IconAccessAnywhere />
                    <h1>Access your files, anywhere</h1>
                    <p>The ability to use a smartphone, tablet, or computer to access your account means your 
                    files follow you everywhere.</p>
                </div>

                <div className="part-2-section">
                    <IconSecurity />
                    <h1>Security you can trust</h1>
                    <p>2-factor authentication and user-controlled encryption are just a couple of the security 
                    features we allow to help secure your files.</p>
                </div>

                <div className="part-2-section">
                    <IconCollaboration />
                    <h1>Real-time collaboration</h1>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                </div>

                <div className="part-2-section">
                    <IconAnyFile/>
                    <h1>Store any type of file</h1>
                    <p>Whether you&apos;re sharing holidays photos or work documents, Fylo has you covered allowing for all 
                    file types to be securely stored and shared.</p>
                </div>
            </div>

            <div className="part-3 flex flex-col gap-5 px-8 pt-40 lg:flex-row lg:items-center lg:px-20">
                <img src={image2} alt="image-3" className="sm:w-[500px]"/>

                <div className="flex flex-col gap-5">
                    <h1 className="text-lg font-bold mt-10 lg:text-3xl">Stay productive, wherever you are</h1>
                    <p className="text-sm">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                    <p className="text-sm">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    <div className="text-sm flex justify-between items-center border-b-[1px] border-b-accent-cyan mb-1 w-[53%] text-accent-cyan lg:w-[50%] hover:text-neutral-white hover:border-b-neutral-white">
                        <a href="">See how Fylo works</a>
                        <IconArrow/>
                    </div>
                </div>
            </div>

            <div className="part-4 flex flex-col gap-7 justify-center items-center px-16 pt-40 sm:flex-row sm:flex-wrap">
                <img src={bgQuotes} alt="" className='w-5 translate-y-7 -translate-x-[6.5rem] sm:-translate-y-20 sm:translate-x-12'/>
                <TestimoniCard 
                    desc="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                    user="Satish Patel"
                    position="Founder & CEO, Huddle"
                    image={profile1}
                />

                <TestimoniCard 
                    desc="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                    user="Bruce McKenzie"
                    position="Founder & CEO, Huddle"
                    image={profile2}
                />

                <TestimoniCard 
                    desc="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                    user="Iva Boyd"
                    position="Founder & CEO, Huddle"
                    image={profile3}
                />
            </div>

            <div className="part-4 px-5 translate-y-40 lg:w-[70%]">
                <SubscribeCard 
                    highlight="Get early access today"
                    desc="It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you."
                    button="Get Started For Free"
                />
            </div>
        </div>
    )
}

export default Main