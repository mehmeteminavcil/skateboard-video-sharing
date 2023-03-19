import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discover from "./pages/Discover/Discover"
import Trending from "./pages/Trending/Trending";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Discover/> } />
            <Route path="trending"  element={<Trending/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
