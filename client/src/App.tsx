import { Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Layout />}></Route>
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
