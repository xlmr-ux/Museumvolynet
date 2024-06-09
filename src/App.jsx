import Layout from "./components/Layout";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import ARID from "./pages/ar[id]";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { StrictMode } from "react";
import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({});

const App = () => {
  return (
    <StrictMode>
      <CssVarsProvider
        defaultMode="dark"
        theme={theme}
        disableTransitionOnChange
      >
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="" element={<Home />} />
              <Route path="gallery" element={<Gallery />} />
            </Route>
            <Route path="ar/:model" element={<ARID />} />
          </Routes>
        </BrowserRouter>
      </CssVarsProvider>
    </StrictMode>
  );
};

export default App;
