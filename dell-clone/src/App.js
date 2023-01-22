import AllRoutes from "./ALLRoutes/AllRoutes";
import Navbar from "./ALLRoutes/Navbar";
import FooterPart from "./Components/FooterComponent/FooterPart";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes/>
      <FooterPart/>
    </>
  );
}

export default App;
