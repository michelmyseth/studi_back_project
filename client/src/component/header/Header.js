import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [auth, setAuth] = useState("");
    const [user, setUser] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {
        const auth = localStorage.getItem("email");
        const userName =
            localStorage.getItem("first_name") +
            " " +
            localStorage.getItem("last_name");
        const role = localStorage.getItem("role");

        if (role === "ROLE_CANDIDATE") {
            console.log("candidate");
        }
        if (auth === null) {
            <Link to="/login" />;
        }
        setAuth(auth);
        setUser(userName);
        setRole(role);
    }, [user]);

    const logOut = () => {
        localStorage.removeItem("email");
        localStorage.clear();
        <Link to="/login" />;
    };
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    Navbar w/ text
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">
                                Features
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">
                                Pricing
                            </a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        {" "}
                        welcom : {user} {role} |{" "}
                        <Link to="/login" onClick={logOut}>
                            log out
                        </Link>
                    </span>
                </div>
            </div>
        </nav>
    );
}
