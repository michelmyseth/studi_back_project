import axios from "axios";
import React, { useState } from "react";
import "./RegisterStyle.css";
export default function Register() {
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitForm = (e) => {
        e.preventDefault();
        const sendData = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
        };
        axios
            .post("http://192.168.64.4/php-auth-api/insert.php", sendData)
            .then((res) => console.log(res.data))
            .catch((error) => {
                console.log(error.response);
            });
    };
    return (
        <div className="main-box">
            <form onSubmit={submitForm}>
                <div className="row">
                    <div className="col-md-12 text-center">Register</div>
                    <div className="row">
                        <div className="col-md-6">First Name</div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                name="first_name"
                                className="form-control"
                                onChange={handleChange}
                                value={data.first_name}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">Last Name</div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                name="last_name"
                                className="form-control"
                                onChange={handleChange}
                                value={data.last_name}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">Email</div>
                        <div className="col-md-6">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                onChange={handleChange}
                                value={data.email}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">password</div>
                        <div className="col-md-6">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                onChange={handleChange}
                                value={data.password}
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
