import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MetaContext from "../context/metaContext";
import TypeContext from "../context/typeContext";
import Entry from "../pages/Entry";
import SelectTypeQuestions from "../pages/selectType";

function App() {
  const [metaPoint, setMetaPoint] = useState(null);
  const  [type, setType] = useState("");

  return (
    <TypeContext.Provider value={{ type, setType }}>
      <MetaContext.Provider value={{ metaPoint, setMetaPoint }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Entry />} />
            <Route path="/select-type" element={<SelectTypeQuestions />} />
          </Routes>
        </BrowserRouter>
      </MetaContext.Provider>
    </TypeContext.Provider>
  )
}

export default App;