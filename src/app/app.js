import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MetaContext from "../context/metaContext";
import TypeContext from "../context/typeContext";
import Entry from "../pages/Entry";
import Home from "../pages/Home";
import SelectTypeQuestions from "../pages/selectType";

function App() {
  const [metaPoint, setMetaPoint] = useState(null);
  const [type, setType] = useState("");
  const [newType, setNewType ] = useState("");

  return (
    <TypeContext.Provider value={{ type, setType }}>
      <MetaContext.Provider value={{ metaPoint, setMetaPoint }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Entry />} />
            <Route path="/select-type" element={<SelectTypeQuestions setNewType={setNewType}/>} />
            <Route path="/home" element={<Home newType={newType}/>} />
          </Routes>
        </BrowserRouter>
      </MetaContext.Provider>
    </TypeContext.Provider>
  )
}

export default App;