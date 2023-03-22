import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discover from "./pages/discover/Discover";
import Single from "./pages/single/Single";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Discover />} />
            <Route path="users">
              <Route path=":videoId" element={<Single />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
