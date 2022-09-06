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
            .post(
                "http://192.168.64.4/php-api-with-jwt-auth/auth-file/login-user.php",
                sendData
            )
            .then((result) => {
                if (result.data.status === 1) {
                    const token = result.data.jwt;
                    localStorage.setItem("token", result.data.jwt);
                    axios
                        .get(
                            "http://192.168.64.4/php-api-with-jwt-auth/auth-file/read-user.php",
                            {
                                headers: {
                                    Authorization: token,
                                },
                            }
                        )
                        .then((result) => {
                            console.log(result.data.message);
                            localStorage.setItem(
                                "first_name",
                                result.data.message.first_name
                            );
                            localStorage.setItem(
                                "last_name",
                                result.data.message.last_name
                            );
                            localStorage.setItem(
                                "email",
                                result.data.message.email
                            );
                            localStorage.setItem(
                                "role",
                                result.data.message.role
                            );
                        });
                    console.log("welcom");
                    Navigate(`/dashboard`);
                } else if (result.data.status === 0) {
                    console.log("wrong password / email");
                } else {
                    console.log(result.data);
                    console.log("acces refuse");
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
