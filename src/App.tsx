import { AuthForm } from "./pages/auth";
import { Box } from "@mui/material";

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
            <AuthForm />
        </Box>
    );
}

export default App;
