import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-[url('/public/assets/images/desktop-bg.svg')] bg-cover min-h-screen">
      <div className="max-w-7xl px-3 mx-auto">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
