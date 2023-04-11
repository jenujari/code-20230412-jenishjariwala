import "./assets/styles/index.scss";

import CallOut from "./components/callout";
import Explore from "./components/explore";
import AboutUs from "./components/aboutus";
import Footer from "./components/footer";

function App() {
  return (
    <main className="boundary">
      <CallOut />
      <Explore />
      <AboutUs />
      <Footer />
    </main>
  );
}

export default App;
