import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cloud from "./Pages/Cloud";
import { CloudProvider } from "./Context/Cloud";
function App() {
  return (
    <CloudProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cloud></Cloud>}></Route>
        </Routes>
      </BrowserRouter>
    </CloudProvider>
  );
}
export default App;
