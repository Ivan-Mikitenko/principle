import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    typography: {
        fontFamily: '"Trebuchet MS"',
    },
    palette: {
        mode: "light",
        background: {
            default: "rgb(249, 252, 255)", // фон страницы
            // paper: "rgb(249, 252, 255)", // фон карточек / контейнеров
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: "none",
                },
                contained: {
                    backgroundColor: "#3a3a3a",
                    color: "#fff",
                    boxShadow: "none",
                    transition: "background-color 0.15s ease",
                    "&:hover": {
                        backgroundColor: "#4a4a4a",
                        boxShadow: "none",
                    },
                    "&:active": {
                        backgroundColor: "#2f2f2f",
                    },
                },
                outlined: {
                    borderColor: "#3a3a3a",
                    color: "#3a3a3a",
                },
            },
        },
    },
});
