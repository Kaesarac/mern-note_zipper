import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/login" element={<LoginScreen />} exact />
        <Route path="/register" element={<RegisterScreen />} exact />
        <Route path="/mynotes" element={<MyNotes />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
