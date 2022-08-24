import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
    let Navigate = useNavigate();
    const [user, setUser] = useState({ email: "", password: "" });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const submitForm = (e) => {
        e.preventDefault();
        const sendData = {
            email: user.email,
            password: user.password,
        };

        axios
            .post("http://192.168.64.4/php-auth-api/login.php", sendData)
            .then((result) => {
                if (result.status === 200) {
                    console.log(result.data.email);

                    window.localStorage.setItem("email", result.data.email);
                    window.localStorage.setItem(
                        "userName",
                        result.data.first_name + " " + result.data.last_name
                    );

                    console.log("welcom");
                    Navigate(`/dashboard`);
                } else {
                    console.log(result.status);
                    console.log("wrong");
                }
            });
    };
    return (
        <div className="main-box">
            <form onSubmit={submitForm}>
                <div className="row">
                    <div className="col-md-12 text-center">Register</div>
                    <div className="row">
                        <div className="col-md-6">email</div>
                        <div className="col-md-6">
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={user.email}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">password</div>
                        <div className="col-md-6">
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                value={user.password}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <input
                                type="submit"
                                name="submit"
                                value="Register"
                                className="btn btn-success"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
