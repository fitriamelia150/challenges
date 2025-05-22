import { About, Footer, Hero, Navbar, Projects, Services, Testimoni } from "../../components";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
           <Navbar/>
           <Hero/>
           <About/>
           <Services/>
           <Testimoni/>
           <Projects/>
           <Footer/>
        </div>
    )
}

export default Home;