import { Box } from "@mui/material";

import { AuthorizationForm } from "@widgets/authorization-form";

import { WebEffect } from "./web-effect.tsx";

export const AuthPage = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
            }}
        >
            <WebEffect />
            <AuthorizationForm />
        </Box>
    );
};
