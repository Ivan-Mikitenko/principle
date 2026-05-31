import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@shared/config/routes.ts";
import { LoginButton } from "@shared/ui/buttons/LoginButton.tsx";
import { PasswordField } from "@shared/ui/fields/PasswordField.tsx";

import { useLoginMutation } from "../api/auth-api.ts";

export const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isLoading }] = useLoginMutation();
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await login({
                email,
                password,
            }).unwrap();

            localStorage.setItem("accessToken", response.accessToken);

            navigate(ROUTES.DASHBOARD);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <PasswordField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
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

                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                    <LoginButton type="submit" fullWidth disabled={isLoading}>
                        Вход
                    </LoginButton>
                </Box>
            </Box>
        </>
    );
};
