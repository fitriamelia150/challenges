import { useSelector } from "react-redux"
import Navigation from "./components/Fragments/Navigation"
import Sidebar from "./components/Fragments/Sidebar"
import ProductPage from "./pages/product"


function App() {

  return (
    <main className="md:px-20 max-w-[1024px] mx-auto">
      <Navigation/>
      <div className="hidden md:block w-full border-b-[0.5px] border-b-slate-500 mb-12 lg:mb-24"></div>

      <ProductPage/>
      <Sidebar/>
    </main>
  )
}

export default App
