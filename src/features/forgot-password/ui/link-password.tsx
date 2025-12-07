import { Link } from "@mui/material";

type Props = {
    onClickOpen: () => void;
};

export const LinkPassword = ({ onClickOpen }: Props) => {
    return (
        <Link
            onClick={onClickOpen}
            component="button"
            variant="body2"
            sx={{
                alignSelf: "center",
                cursor: "pointer",
                position: "relative",
                color: "primary.main",
                textDecoration: "none",
                fontWeight: 400,
                "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    bgcolor: "primary.main",
                    transition: "width 0.3s ease",
                },
                "&:hover::after": {
                    width: "100%",
                },
            }}
        >
            Забыли пароль?
        </Link>
    );
};
