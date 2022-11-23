import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Home from "pages/Home";
import Sorteio from "pages/Sorteio";

import GlobalStyles from "styles/globals";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sorteio" element={<Sorteio />} />
        </Routes>
        <GlobalStyles />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
