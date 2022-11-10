import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry from "../pages/Entry";

function App() {
  const [ metaPoint, setMetaPoint ] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
      <Route  path="/" element={<Entry setMetaPoint={setMetaPoint} metaPoint={metaPoint} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;