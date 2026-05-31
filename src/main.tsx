import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "@app/App.tsx";
import { store } from "@app/store";

import { theme } from "./app/theme.ts";

const enableMocking = async () => {
    if (import.meta.env.DEV) {
        const { worker } = await import("@shared/mocks/browser");

        await worker.start();
    }
};

enableMocking().then(() => {
    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Provider store={store}>
                    <App />
                </Provider>
            </ThemeProvider>
        </StrictMode>,
    );
});
