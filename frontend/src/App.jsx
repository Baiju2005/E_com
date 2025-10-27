import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ItemsRoute from "./routes/ItemsRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import Notfound from "./routes/Notfound";
import ContactRoute from "./routes/ContactRoute";
import ProtectedRoute from "./routes/ProtectedRoute"; // ✅ import

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Notfound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />

      {/* ✅ Protected Routes */}
      <Route
        path="/items"
        element={
          <ProtectedRoute>
            <ItemsRoute />
          </ProtectedRoute>
        }
      />

      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <ContactRoute />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
