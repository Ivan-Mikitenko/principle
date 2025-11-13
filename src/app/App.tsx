import { Box } from "@mui/material";

import { AuthPage } from "@pages/auth";

import { WebEffect } from "./WebEffect.tsx";

function App() {
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
            <AuthPage />
        </Box>
    );
}

export default App;
