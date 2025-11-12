import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    TextField,
} from "@mui/material";

import { PasswordField } from "@shared/ui/fields/PasswordField.tsx";

export const AuthForm = () => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                }}
            >
                <TextField
                    id="login"
                    label="email"
                    variant="outlined"
                    size="small"
                />
                <PasswordField />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={false}
                            onChange={() => {}}
                            name="gilad"
                        />
                    }
                    label="Запомнить меня"
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
        </>
    );
};
