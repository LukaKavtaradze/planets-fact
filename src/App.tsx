import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mercury from "./planets/Mercury";

// import Earth from "../public/planets/Earth";
// import Mars from "../public/planets/Mars";
// import Jupiter from "../public/planets/Jupiter";
// import Saturn from "../public/planets/Saturn";
// import Uranus from "../public/planets/Uranus";
// import Neptune from "../public/planets/Neptune";

// useLocation, useNavigate, useParams

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mercury />} />
        <Route path="/:planet" element={<Mercury />} />
      </Routes>
    </div>
  );
}

export default App;
