import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Win from "./Win";

function App() {
  return (
    <div className="App bg-[url('/public/assets/images/desktop-bg.svg')] bg-cover min-h-screen">
      <div className="max-w-7xl px-3 mx-auto">
        <Navbar />
        <Hero />
        <Win/>
      </div>
    </div>
  );
}

export default App;
