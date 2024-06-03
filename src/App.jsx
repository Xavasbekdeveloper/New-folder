import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Question from "./components/questions";
import Main from "./components/main";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/question/:id" element={<Question />} />
      </Routes>
    </>
  );
}

export default App;
