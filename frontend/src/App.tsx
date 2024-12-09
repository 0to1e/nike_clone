//frontend/src/App.tsx

import { ResponsiveHeaderContextProvider } from "./contexts/ResponsiveHeaderContext";

import HomePage from "./pages/Home/HomePage";
import AuthPage from "./pages/Auth/AuthPage";
import Test from "./pages/Test";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <ResponsiveHeaderContextProvider>
      <div className="min-h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Router>
      </div>
    </ResponsiveHeaderContextProvider>
  );
};

export default App;
