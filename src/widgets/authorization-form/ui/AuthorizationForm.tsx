import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";

import { AuthForm } from "@features/auth-form";
import { ForgotPassword, LinkPassword } from "@features/forgot-password";

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
            <Paper elevation={3} sx={{ p: 4, maxWidth: "450px", flexGrow: 1 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    Вход
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <AuthForm />

                    <LinkPassword onClickOpen={handleClickOpen} />
                    <ForgotPassword
                        open={open}
                        handleClose={handleClickClose}
                    />
                    {/*</Box>*/}
                </Box>
            </Paper>
        );
    }
};
