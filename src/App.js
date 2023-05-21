import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Win from "./Win";
import Footer from "./components/Footer";
import Offering from "./sections/Offering";
import HowDBET from "./sections/HowDBET";
import Roadmap from "./sections/Roadmap";

function App() {
  return (
    <div className="App bg-[url('/public/assets/images/desktop-bg.svg')] bg-cover min-h-screen">
      <div className="max-w-7xl px-3 mx-auto">
        <Navbar />
        <Hero />
        <Win/>
        <Offering/>
        <HowDBET/>
      </div>
        <Roadmap/>
      <div className="max-w-7xl px-3 mx-auto">

        <Footer/>
      </div>
    </div>
  );
}

export default App;
