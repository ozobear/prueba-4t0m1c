import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

function App() {
  return (
    <main className="app">
    <Header />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="contacto" element={ <Contact /> }/>
    </Routes>
    <Footer />
    </main>
  )
}

export default App
