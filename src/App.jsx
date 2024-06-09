import Layout from "./components/Layout";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import ARID from "./pages/ar[id]";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
        <Route path="ar/:model" element={<ARID />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
