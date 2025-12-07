import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";

import { LoginButton } from "@shared/ui/buttons/LoginButton.tsx";
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
                <LoginButton fullWidth>Вход</LoginButton>
            </Box>
        </>
    );
};
