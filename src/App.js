import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState({
    displayText: "Dark",
    color: "White",
    backgroundColor: "Black",
  });

  return (
    <>
      <Navbar mode={mode} setMode={setMode} />
      <div className="container mb-3 my-5">
        <TextForm
          mode={mode}
          setMode={setMode}
          heading="Enter your text below to analyze"
          placeHolder="Input text here"
        />
      </div>
    </>
  );
}

export default App;
