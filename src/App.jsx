import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Cursor from './components/Cursor.jsx'
import ScrollReveal from './components/ScrollReveal.jsx'
import WhitepaperSoloDevStack from './pages/WhitepaperSoloDevStack.jsx'

// Home sections
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Services from './sections/Services.jsx'
import Projects from './sections/Projects.jsx'
import Blog from './sections/Blog.jsx'
import Whitepapers from './sections/Whitepapers.jsx'
import Contact from './sections/Contact.jsx'

// Blog pages
import BlogFullStack from './pages/BlogFullStack.jsx'
import BlogFlowDesigner from './pages/BlogFlowDesigner.jsx'
import BlogFirestore from './pages/BlogFirestore.jsx'

// Whitepaper pages
import WhitepaperBuildBuyHire from './pages/WhitepaperBuildBuyHire.jsx'
import WhitepaperAppAudit from './pages/WhitepaperAppAudit.jsx'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Blog />
      <Whitepapers />
      <Contact />
    </>
  )
}

export default function App() {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Cursor />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/full-stack-apps" element={<BlogFullStack />} />
        <Route path="/blog/flow-designer-patterns" element={<BlogFlowDesigner />} />
        <Route path="/blog/firestore-data-modeling" element={<BlogFirestore />} />
        <Route path="/resources/build-buy-hire" element={<WhitepaperBuildBuyHire />} />
        <Route path="/resources/app-audit" element={<WhitepaperAppAudit />} />
        <Route path="/resources/solo-dev-stack" element={<WhitepaperSoloDevStack />} />
      </Routes>
      <Footer />
      <ScrollReveal />
    </>
  )
}
