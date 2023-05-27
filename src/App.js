import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Win from "./sections/Win";
import Footer from "./components/Footer";
import Offering from "./sections/Offering";
import HowDBET from "./sections/HowDBET";
import DataFeeds from "./sections/DataFeeds";
import Roadmap from "./sections/Roadmap";
import Newslatter from "./sections/Newslatter";

function App() {
  return (
    <div className="App bg-[#0e0e1c] min-h-screen">
      <div className=" bg-[url('/public/assets/images/hero-bg-sm.svg')] sm:bg-[url('/public/assets/images/hero-bg.svg')] bg-cover">
        <div className="max-w-7xl px-3 mx-auto">
          <Navbar />
          <Hero />
          <Win />
        </div>
      </div>
      <div className="max-w-7xl px-3 mx-auto">
        <Offering />
        <HowDBET />
      </div>
      <DataFeeds />
      <Roadmap />
      <div className="max-w-7xl px-3 mx-auto">
        <Newslatter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
