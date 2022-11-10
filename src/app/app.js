import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry from "../pages/Entry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route  path="/" element={<Entry />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;