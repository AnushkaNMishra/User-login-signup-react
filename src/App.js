import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import LoginReg from "./components/pages/auth/LoginReg";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import ResetPassword from "./components/pages/auth/ResetPassword";
import { Dashboard } from "@mui/icons-material";


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Layout/>} >
        <Route index element={<Home />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="login" element={<LoginReg />}/>
        <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />}/>
        <Route path="reset" element={<ResetPassword />}/>
       
       </Route>
       <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;

