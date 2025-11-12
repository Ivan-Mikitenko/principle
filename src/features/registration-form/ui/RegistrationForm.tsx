import { Box, Button, FormControl, FormLabel, Modal } from "@mui/material";

import { PasswordField } from "@shared/ui/fields/PasswordField.tsx";

type Props = {
    open: boolean;
};

export const RegistrationForm = ({ open }: Props) => {
    return (
        <Modal open={open} onClose={() => {}}>
            <Box sx={{ width: 400, borderRadius: 4 }}>
                <FormControl>
                    <FormLabel htmlFor="password">Пароль</FormLabel>
                    <PasswordField />
                </FormControl>

                <Button variant="outlined" fullWidth>
                    Зарегистрироваться
                </Button>
            </Box>
        </Modal>
    );
};
