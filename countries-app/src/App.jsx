import { Routes, Route } from "react-router-dom";

import "./App.css";

import AllCountries from "./pages/AllCountries/AllCountries";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import CountryPage from "./pages/CountryPage/CountryPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/country/:name" element={<CountryPage />} />
        {/* <Route path="/country/:code" element={<CountryInfo />} /> */}
      </Routes>
    </>
  );
}

export default App;
