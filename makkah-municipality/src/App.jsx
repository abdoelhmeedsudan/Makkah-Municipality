// App.jsx
import { useEffect } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import MainLayout from "./components/layout/MainLayout";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Force the body direction to RTL on mount
    document.body.setAttribute("dir", "rtl");
  }, []);

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
