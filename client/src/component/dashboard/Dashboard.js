import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
    const [auth, setAuth] = useState("");
    let navigate = useNavigate();
    useEffect(() => {
        let auth = localStorage.getItem("first_name");
        setAuth(auth);
        if (auth === null) {
            navigate(`/login`);
        }
    }, []);
    return <div>Dashboard</div>;
}
