import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import About from "./pages/about"
import Header from "./components/Header";

export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/about" element={<About />} />
  </Routes>
  </BrowserRouter>
}