import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";
import Result from "./Result";
import "../styles/App.css";
import { AuthRour } from "../helper/helper";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/quiz"
          element={
            <AuthRour>
              <Quiz />
            </AuthRour>
          }
        />
        <Route
          path="/result"
          element={
            <AuthRour>
              <Result />
            </AuthRour>
          }
        />
      </Routes>
    </>
  );
}

export default App;
