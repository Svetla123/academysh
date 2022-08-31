import React, { Component } from "react";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Button from "@mui/material/Button";
import { CardMedia } from "@mui/material";

export default function Header() {
    return (
        <header id="home">
            <div className="row banner">
                <div className="banner-text">
                    <hr />
                    <h1 className="responsive-headline">Academysh</h1>
                    <h3>
                        Make your <span>academy</span> today with us.
                    </h3>
                    <hr />
                </div>

                <Button
                    variant="outlined"
                    size="large"
                    color="success"
                    endIcon={<LoginIcon />}
                    style={{ marginTop: "40px", marginRight: "70px" }}
                >
                    Sing in
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    color="secondary"
                    endIcon={<AppRegistrationIcon />}
                    style={{ marginTop: "40px" }}
                >
                    Register
                </Button>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#resume">
                    <i className="icon-down-circle"></i>
                </a>
            </p>
        </header>
    );
}
