import "./App.css";
import Haeder from "./Componenets/Navabar/Haeder";
import Crausal from "./Componenets/Crausal/Crausal";
import Info from "./Componenets/Info/Info";
import About from "./Componenets/About/About";
import Service from "./Componenets/Services/Service";
import HomePage from "./Componenets/HomePage/HomePage";
import PriceSCTN from "./Componenets/PriceSection/PriceSCTN";
import MoreInfo from "./Componenets/More/MoreInfo";
import Collection from "./Componenets/Collection/Collection";
import Contactus from "./Componenets/ContactUs/Contactus";
import Layout from "./Layout";
import { Provider } from "react-redux";
import store from "./Store/Store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Componenets/Cart/Cart";
import Footer from "./Componenets/Footer/Footer";



function App() {
  
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  {/* Include all your components here */}
                  <Crausal />
                  <Info />
                  <About />
                  <Service />
                  <HomePage />
                  <PriceSCTN />
                  <MoreInfo />
                  <Collection />
                  <Contactus />
                  <Footer/>
                </Layout>
              }
            />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/cart" element={<Layout><Cart /></Layout>} />
            


          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
