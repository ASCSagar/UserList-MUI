import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserDetail from "./components/UserDetail";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/:id" element={<UserDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
