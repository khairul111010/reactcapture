import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyles";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/ourwork" element={<OurWork />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
