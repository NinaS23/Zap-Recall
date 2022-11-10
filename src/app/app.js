import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MetaContext from "../context/metaContext";
import Entry from "../pages/Entry";
import SelectTypeQuestions from "../pages/selectType";

function App() {
  const [ metaPoint, setMetaPoint ] = useState(null);

  return (
    <MetaContext.Provider value={{ metaPoint, setMetaPoint }}>
    <BrowserRouter>
      <Routes>
      <Route  path="/" element={<Entry />} />
      <Route  path="/select-type" element={<SelectTypeQuestions />} />
      </Routes>
    </BrowserRouter>
    </MetaContext.Provider>
  )
}

export default App;