import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import 'remixicon/fonts/remixicon.css'
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import 'remixicon/fonts/remixicon.css'
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App