import { BrowserRouter } from "react-router-dom";
import { AboutEducation, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"
// import {default as Footer} from "./components/footer.jsx";
// import Education from "./components/Education.jsx";
// import CodingProfiles from "./components/CodingProfiles.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <AboutEducation />
        {/* <Education/> */}
        {/* <CodingProfiles /> */}
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0 ">
          <Contact />
          <StarsCanvas />
        </div>
         {/* <Footer/> */}
      </div>
     
    </BrowserRouter>
  )
}

export default App;