import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/icons-material/Link";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useState } from "react";

import { AuthForm } from "@features/auth-form";
import { ForgotPassword, LinkPassword } from "@features/forgot-password";
import { RegistrationButton } from "@features/registration-form";

export const AuthorizationForm = () => {
    {
        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClickClose = () => {
            setOpen(false);
        };

        return (
            <Paper
                elevation={0}
                sx={{
                    p: 4,
                    maxWidth: "450px",
                    flexGrow: 1,
                    outline: "0.5px solid lightgray",
                }}
            >
                <Typography variant="h4" sx={{ mb: 2 }}>
                    Вход
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <AuthForm />
                    <>
                        <LinkPassword onClickOpen={handleClickOpen} />
                        <ForgotPassword
                            open={open}
                            handleClose={handleClickClose}
                        />
                    </>
                    <Divider>or</Divider>
                    <Button
                        startIcon={<Link />}
                        variant="outlined"
                        fullWidth
                        onClick={() => {}}
                        disabled
                    >
                        MagicLink
                    </Button>
                    <Button
                        startIcon={<GitHubIcon />}
                        variant="outlined"
                        fullWidth
                        onClick={() => {}}
                        disabled
                    >
                        Sign in with GitHub
                    </Button>
                    <RegistrationButton onClickOpen={() => {}} />
                </Box>
            </Paper>
        );
    }
};
