// App.jsx
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useTranslation } from "react-i18next";
import MainLayout from "./components/layout/MainLayout";
import Home from "./features/home/Home";
import About from "./features/aboutus/AboutUs";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute("dir", "rtl");
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
