import { Box } from "@mui/material";

import { AuthPage } from "@pages/auth";

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
            <AuthPage />
        </Box>
    );
}

export default App;
