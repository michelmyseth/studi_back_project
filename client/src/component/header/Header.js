import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Header() {
    let navigate = useNavigate();
    const [auth, setAuth] = useState("");
    const [user, setUser] = useState("");
    console.log(auth);
    useEffect(() => {
        var auth = localStorage.getItem("email");
        var userName = localStorage.getItem("userName");
        if (auth === null) {
            navigate(`/login`);
        }
        setAuth(auth);
        setUser(userName);
    }, [user]);

    const logOut = () => {
        localStorage.removeItem("email");
        localStorage.clear();
        navigate(`/login`);
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
                        welcom : {user} |{" "}
                        <Link to="" onClick={logOut}>
                            log out
                        </Link>
                    </span>
                </div>
            </div>
        </nav>
    );
}
