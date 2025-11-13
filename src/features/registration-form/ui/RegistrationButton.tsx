import { Box, Link, Typography } from "@mui/material";

type Props = {
    onClickOpen: () => void;
};

export const RegistrationButton = ({ onClickOpen }: Props) => {
    return (
        <Box display="flex" justifyContent="center" gap={0.5}>
            <Typography sx={{ textAlign: "center" }} variant="caption">
                До сих пор нет аккаунта?{" "}
            </Typography>
            <Link
                component="button"
                variant="caption"
                sx={{
                    alignSelf: "center",

                    "&:hover": { textDecoration: "underline" },
                }}
                underline="none"
                onClick={onClickOpen}
            >
                Зарегистрироваться
            </Link>
        </Box>
    );
};
