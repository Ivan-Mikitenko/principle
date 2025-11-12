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
            },
        },
    },
});
