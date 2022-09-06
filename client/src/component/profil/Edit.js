import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Edit() {
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    };
    const submitForm = (e) => {
        e.preventDefault();
        const sendData = {
            first_name: data.first_name,
            last_name: data.last_name,
        };
        console.log(sendData);
    };
    return (
        <>
            <section style={{ backgroundColor: "#eee" }}>
                <form onSubmit={submitForm}>
                    <div class="container py-5">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="card mb-4">
                                    <div class="card-body text-center">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                            alt="avatar"
                                            class="rounded-circle img-fluid"
                                            style={{ width: "150px" }}
                                        />
                                        <h5 class="my-3">asd</h5>

                                        <div class="d-flex justify-content-center mb-2">
                                            <button
                                                type="submit"
                                                name="submit"
                                                value="Register"
                                                className="btn btn-success"
                                            >
                                                validate
                                            </button>
                                            <Link to="/profil">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-primary ms-1"
                                                >
                                                    Cancel
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <p class="mb-0">First Name</p>
                                            </div>
                                            <div class="col-sm-9">
                                                <input
                                                    type="text"
                                                    name="first_name"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                    value={data.first_name}
                                                />
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <p class="mb-0">Last Name</p>
                                            </div>
                                            <div class="col-sm-9">
                                                <input
                                                    type="text"
                                                    name="last_name"
                                                    className="form-control"
                                                    onChange={handleChange}
                                                    value={data.last_name}
                                                />
                                            </div>
                                        </div>
                                        <hr />

                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}
