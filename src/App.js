import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './Layout/Layout';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Gallery from "./Pages/Gallery";
import Home from './Pages/Home';
import Picture from "./Pages/Picture";
import Some from "./Pages/Some";

function App() {
  const logPage = () => {
    console.log(window.location.pathname);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:picId" element={<Picture />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="some" element={<Some />} />
          </Routes>
        </Layout>
        <button className="page-button" onClick={logPage} >asd</button>
      </BrowserRouter>
    </div>
  );
}

export default App;
