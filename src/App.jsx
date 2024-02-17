import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Investments from "./pages/Investments";
import Savings from "./pages/Savings";
import Expenses from "./pages/Expenses";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="max-w-[1550px] mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="investments" element={<Investments />} />
          <Route path="savings" element={<Savings />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
