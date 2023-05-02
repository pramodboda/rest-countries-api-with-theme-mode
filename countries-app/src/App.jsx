import { Routes, Route } from "react-router-dom";

import "./App.css";

import AllCountries from "./pages/AllContries/AllContries";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
// import CountryInfo from "./pages/CountryInfo/CountryInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="/country/:name" element={<CountryInfo />} />
        <Route path="/country/:code" element={<CountryInfo />} /> */}
      </Routes>
    </>
  );
}

export default App;
