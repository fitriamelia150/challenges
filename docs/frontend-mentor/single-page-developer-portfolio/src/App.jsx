import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import LandingPage from "./pages/landing"

function App() {

  return (
    <div className='bg-main-black h-screen'>
      <Navbar/>
      <LandingPage/>
      <Footer/>
    </div>
  )
}

export default App
