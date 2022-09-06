import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function Profil() {
    const [user, setUser] = useState("");

    return (
        <>
            <section style={{ backgroundColor: "#eee" }}>
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
                                        <Link to="/edit">
                                            <button
                                                type="button"
                                                className="btn btn-outline-primary ms-1"
                                            >
                                                Edit
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
                                            <p class="mb-0">Full Name</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <p class="text-muted mb-0">
                                                Johnatan Smith
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Email</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <p class="text-muted mb-0">
                                                example@example.com
                                            </p>
                                        </div>
                                    </div>
                                    <hr />

                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
