import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

interface PasswordFieldProps {
    name?: string;
    autoComplete?: string;
    value?: string;
    onChange?: () => void;
}

export const PasswordField = ({
    name = "password",
    autoComplete = "current-password",
    value,
    onChange,
}: PasswordFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <TextField
            fullWidth
            size="small"
            placeholder="••••••"
            variant="outlined"
            label="Пароль"
            name={name}
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={() => setShowPassword((prev) => !prev)}
                            edge="end"
                            aria-label={
                                showPassword
                                    ? "Скрыть пароль"
                                    : "Показать пароль"
                            }
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
                sx: !showPassword
                    ? { "& input": { WebkitTextSecurity: "disc" } }
                    : undefined,
            }}
        />
    );
};
