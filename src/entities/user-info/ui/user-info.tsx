import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { OptionsMenu } from "./options-menu.tsx";

export const UserInfo = () => {
    return (
        <Stack
            direction="row"
            sx={{
                p: 2,
                gap: 1,
                alignItems: "center",
                borderTop: "1px solid",
                borderColor: "divider",
            }}
        >
            <Avatar sizes="small" alt="MI" sx={{ width: 36, height: 36 }} />
            <Box sx={{ mr: "auto" }}>
                <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, lineHeight: "16px" }}
                >
                    Микитенко Иван
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    ivan@mail.ru
                </Typography>
            </Box>
            <OptionsMenu />
        </Stack>
    );
};
