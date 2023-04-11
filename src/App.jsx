import "./assets/styles/index.scss";

import CallOut from "./components/callout";
import Explore from "./components/explore";
import AboutUs from "./components/aboutus";
import Footer from "./components/footer";

//  Defining the App component of the application
function App() {
  // Returning the main structure of the application using JSX
  return (
    <main className="boundary">
      {/* Rendering the CallOut component */}
      <CallOut />
      {/* Rendering the Explore component */}
      <Explore />
      {/* Rendering the AboutUs component */}
      <AboutUs />
      {/* Rendering the Footer component */}
      <Footer />
    </main>
  );
}

// Exporting the App component as the default export of this module
export default App;
