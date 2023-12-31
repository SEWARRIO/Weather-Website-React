import React from "react";
import AppRouter from "./pages/AppRouter";
import { AuthProvider } from "./AuthContext";
import "./App.css";

// editited
const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <div>
          <AppRouter />
        </div>
      </AuthProvider>
    </>
  );
};

export default App;
