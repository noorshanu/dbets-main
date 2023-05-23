import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Win from "./Win";
import Footer from "./components/Footer";
import Offering from "./sections/Offering";
import HowDBET from "./sections/HowDBET";
import DataFeeds from "./sections/DataFeeds";
import Roadmap from "./sections/Roadmap";
import Newslatter from "./sections/Newslatter";

function App() {
  return (
    <div className="App bg-[#0e0e1c] bg-cover min-h-screen">
      <div className="max-w-7xl px-3 mx-auto">
        <Navbar />
        <Hero />
        <Win />
        <Offering />
        <HowDBET />
      </div>
      <DataFeeds />
      <Roadmap/>
      <div className="max-w-7xl px-3 mx-auto">
        <Newslatter/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
