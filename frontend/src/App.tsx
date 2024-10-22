//frontend/src/App.tsx

import { ResponsiveHeaderContextProvider } from "./contexts/ResponsiveHeaderContext";

import HomePage from "./pages/Home/HomePage";
// import AuthPage from "./pages/Auth/AuthPage";
// import Test from "./pages/Test";

const App = () => {
  return (
    <ResponsiveHeaderContextProvider>
      <div className="min-h-screen">
        <HomePage />
        {/* <Test/> */}
        {/* <AuthPage/> */}
      </div>
    </ResponsiveHeaderContextProvider>
  );
};

export default App;
