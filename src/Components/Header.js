import React from 'react'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, colors, Grid } from "@mui/material";
import exkeedalogo from "../images/exam-keeda-logo.webp";

const Header = () => {
    return (
        <div>
            <Box sx={{ width: "100%" }}>
                <Container
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        boxShadow: "0px 4px 8px -4px rgba(58, 53, 65, 0.42)",
                        borderRadius: "12px",
                    }}
                >
                    <Box sx={{}}>
                        <img src={exkeedalogo} alt="" width={"100%"} />
                    </Box>
                    <Box>
                        <ul style={{ display: "flex" }}>
                            <li>
                                {" "}
                                <a
                                    href=""
                                    style={{
                                        margin: "15px",
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "rgba(33, 33, 33, 0.87)",
                                    }}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    style={{
                                        margin: "15px",
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "rgba(33, 33, 33, 0.87)",
                                    }}
                                >
                                    Tutorials
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    style={{
                                        margin: "15px",
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "rgba(33, 33, 33, 0.87)",
                                    }}
                                >
                                    Typing Practice
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    style={{
                                        margin: "15px",
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "rgba(33, 33, 33, 0.87)",
                                    }}
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    style={{
                                        margin: "15px",
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        color: "rgba(33, 33, 33, 0.87)",
                                    }}
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </Box>
                    <Box>
                        <Button
                            className="login-btn"
                            variant="outlined"
                            sx={{
                                borderRadius: "10px",
                                borderColor: "#5cc43e",
                                color: "#1C2434",
                                marginRight: "0.5rem",
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            className="sign-btn"
                            variant="contained"
                            sx={{ borderRadius: "10px", backgroundColor: "#5cc43e" }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default Header
