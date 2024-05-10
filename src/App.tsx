import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Routes/Home";
import Personal from "./Routes/Personal";
import Walk from "./Routes/Walk";
import Reading from "./Routes/Reading";
import After from "./Routes/After";

function App() {
  return (
    <HashRouter>
      <AnimatePresence mode = "wait">
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "personalword" element = {<Personal />} />
          <Route path = "walkabout" element = {<Walk />} />
          <Route path = "readingrecord" element = {<Reading />} />
          <Route path = "afterflight" element = {<After />} />
        </Routes>
      </AnimatePresence>
    </HashRouter>
  );
}

export default App;