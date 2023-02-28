import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/pages/Contacts/Contact";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import LoginAndRegn from "./components/pages/auth/LoginAndRegn";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail"
import RestePassword from "./components/pages/auth/RestePassword";
import Dashboard from "./components/pages/Dashboard";


function App() {
  return (
<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loginAndRegn" element={<LoginAndRegn />} />
        <Route path="/sendPasswordResetEmail" element={<SendPasswordResetEmail />} />
        <Route path="/resetPassword" element={<RestePassword />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<h1>Error 404 Page Not Found</h1>} />
    </Routes>
  </BrowserRouter>
</>
  );
}

export default App;
