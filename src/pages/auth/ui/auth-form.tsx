import { Box, Button, Paper, TextField, Typography } from "@mui/material";

export const AuthForm = () => {
    return (
        <Paper elevation={3} sx={{ p: 4, maxWidth: "450px", flexGrow: 1 }}>
            <Typography variant={"h4"} sx={{ mb: 2 }}>
                Sign in
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                        id="login"
                        label="email"
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        id="password"
                        label="password"
                        variant="outlined"
                        size="small"
                    />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                    <Button variant="contained" fullWidth>
                        Вход
                    </Button>
                    <Button variant="outlined" fullWidth>
                        Регистрация
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
};
