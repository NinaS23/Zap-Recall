import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MetaContext from "../context/metaContext";
import Entry from "../pages/Entry";
import Home from "../pages/Home";

function App() {
  const [ metaPoint, setMetaPoint ] = useState(null);

  return (
    <MetaContext.Provider value={{ metaPoint, setMetaPoint }}>
    <BrowserRouter>
      <Routes>
      <Route  path="/" element={<Entry />} />
      <Route  path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </MetaContext.Provider>
  )
}

export default App;