import axios from "axios";
import React, { useState } from "react";
import "./RegisterStyle.css";
export default function Register() {
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        role: "",
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
            role: data.role,
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
                    <fieldset>
                        <legend>inscription en tant que :</legend>

                        <div>
                            <input
                                type="radio"
                                id="candidate"
                                name="role"
                                onChange={handleChange}
                                value={"ROLE_CANDIDATE"}
                            />
                            <label for="candidate">candidat</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                id="recruit"
                                name="role"
                                onChange={handleChange}
                                value={"ROLE_RECRUIT"}
                            />
                            <label for="recruit">recruteur</label>
                        </div>
                    </fieldset>
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
