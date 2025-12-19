import {
    Container,
    Box,
    TextField,
    Typography,
    Button,
    Stack,
} from "@mui/material";
import { useState } from "react";

import { AnimatedEditBox } from "@shared/ui/animated-edit-box.tsx";
import { AnimatedInputWrapper } from "@shared/ui/fields/animated-input-wrapper.tsx";

import { mockUserProfile } from "./mock.ts";

export const ProfilePage = () => {
    const [editMode, setEditMode] = useState(false);
    const [profile, setProfile] = useState(mockUserProfile);

    const handleChange = (field: string, value: string | number) => {
        setProfile({ ...profile, [field]: value });
    };

    const handleSave = () => {
        setEditMode(false);
    };

    const handleCancel = () => {
        setProfile(mockUserProfile);
        setEditMode(false);
    };

    return (
        <Container sx={{ m: "0 !important", p: "0 !important" }}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={4}
            >
                <Typography variant="h5">Профиль пользователя</Typography>

                {editMode ? (
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" onClick={handleSave}>
                            Сохранить
                        </Button>
                        <Button variant="outlined" onClick={handleCancel}>
                            Отмена
                        </Button>
                    </Stack>
                ) : (
                    <Button
                        variant="contained"
                        onClick={() => setEditMode(true)}
                    >
                        Редактировать
                    </Button>
                )}
            </Box>

            <AnimatedEditBox editMode={editMode}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexWrap="wrap"
                    gap={2}
                >
                    {Object.entries(profile).map(([key, value]) => (
                        <Box key={key} sx={{ width: "40%" }}>
                            <Typography
                                variant="subtitle2"
                                sx={{ color: "#666", mb: 0.5 }}
                            >
                                {key}
                            </Typography>

                            {editMode ? (
                                <AnimatedInputWrapper>
                                    <TextField
                                        size="small"
                                        fullWidth
                                        value={value}
                                        onChange={(e) =>
                                            handleChange(key, e.target.value)
                                        }
                                    />
                                </AnimatedInputWrapper>
                            ) : (
                                <Typography variant="body1">{value}</Typography>
                            )}
                        </Box>
                    ))}
                </Box>
            </AnimatedEditBox>
        </Container>
    );
};
