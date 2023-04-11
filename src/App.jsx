import "./assets/styles/index.scss";

import CallOut from "./components/callout";
import Explore from "./components/explore";
import AboutUs from "./components/aboutus";

function App() {
  return (
    <main className="boundary">
      <CallOut />
      <Explore />
      <AboutUs />
    </main>
  );
}

export default App;
