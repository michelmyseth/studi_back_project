import Header from "./component/header/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import Home from "./component/home/Home";
import Dashboard from "./component/dashboard/Dashboard";
import Profil from "./component/profil/Profil";
import Edit from "./component/profil/Edit";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/edit" element={<Edit />} />
            </Routes>
        </>
    );
}

export default App;
