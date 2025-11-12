import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import OutlinedInput from "@mui/material/OutlinedInput";
import * as React from "react";

type ForgotPasswordProps = {
    open: boolean;
    handleClose: () => void;
};

export const ForgotPassword = ({ open, handleClose }: ForgotPasswordProps) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            slotProps={{
                paper: {
                    component: "form",
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        handleClose();
                    },
                    sx: { backgroundImage: "none", borderRadius: 2 },
                },
            }}
        >
            <DialogTitle>Сбросить пароль</DialogTitle>
            <DialogContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "100%",
                }}
            >
                <DialogContentText>
                    Введите адрес электронной почты вашего аккаунта, и мы
                    отправим вам ссылку для сброса пароля.
                </DialogContentText>
                <OutlinedInput
                    autoFocus
                    required
                    size="small"
                    margin="dense"
                    id="email"
                    name="email"
                    label="Email address"
                    placeholder="Email address"
                    type="email"
                    fullWidth
                />
            </DialogContent>
            <DialogActions sx={{ pb: 3, px: 3 }}>
                <Button onClick={handleClose}>Отмена</Button>
                <Button variant="contained" type="submit">
                    Продолжить
                </Button>
            </DialogActions>
        </Dialog>
    );
};
