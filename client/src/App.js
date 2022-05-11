import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Questions />} />
        {/* <Route path="new" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
