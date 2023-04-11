import "./assets/styles/index.scss";

import CallOut from "./components/callout";
import Explore from "./components/explore";

function App() {
  return (
    <main className="boundary">
      <CallOut />
      <Explore />
    </main>
  );
}

export default App;
