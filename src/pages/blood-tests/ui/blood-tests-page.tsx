import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Button, ButtonGroup, Container, Tooltip } from "@mui/material";
import { type ChangeEvent, useRef } from "react";

export const BloodTestsPage = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;
    };

    const handleClickUpload = () => {
        fileInputRef.current?.click();
    };

    return (
        <Container
            sx={{
                display: "flex",
                gap: 2,
                justifyContent: "start",
                padding: "0 !important",
                marginLeft: "0 !important",
            }}
        >
            <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx"
                style={{ display: "none" }}
                onChange={handleFileSelect}
            />

            <Tooltip title="Загрузите свои анализы, а наш ассистент проанализирует и даст рекомендации">
                <Button
                    variant="contained"
                    endIcon={<FileUploadIcon />}
                    onClick={handleClickUpload}
                >
                    Загрузить и проанализировать
                </Button>
            </Tooltip>

            <ButtonGroup
                variant="outlined"
                aria-label="Загрузка анализов в облако"
                disabled
            >
                <Tooltip title="Загрузка файлов в облако">
                    <Button endIcon={<CloudUploadIcon />}>
                        Импортировать анализы
                    </Button>
                </Tooltip>
                <Button endIcon={<CloudDownloadIcon />}>
                    Экспортировать анализы
                </Button>
            </ButtonGroup>
        </Container>
    );
};
