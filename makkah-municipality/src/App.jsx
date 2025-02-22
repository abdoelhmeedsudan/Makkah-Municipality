import { useState } from "react";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import { i18n } from 'platformscode-new-react'

function App() {
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();

  return (
    <>
      <MainLayout></MainLayout>
    </>
  );
}
//
export default App;
