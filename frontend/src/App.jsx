import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/routes/Navigation";
import PotionRoutes from "./components/routes/PotionRoutes";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
    return (<div className="app">
      <BrowserRouter>
        <Navigation/>
        <PotionRoutes/>
      </BrowserRouter>
      <Footer/>
    </div>)   
}