import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/pages/Contacts/Contact";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import LoginAndRegn from "./components/pages/auth/LoginAndRegistration/LoginAndRegn";

function App() {
  return (
<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loginAndRegn" element={<LoginAndRegn />} />
      </Route>
    </Routes>
  </BrowserRouter>
</>
  );
}

export default App;
