// import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
