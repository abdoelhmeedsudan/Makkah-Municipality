import { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainLayout from "./components/layout/MainLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainLayout></MainLayout>
    </>
  );
}

export default App;
