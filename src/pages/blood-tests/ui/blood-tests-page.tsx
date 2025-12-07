import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Button, ButtonGroup, Container, Tooltip } from "@mui/material";

export const BloodTestsPage = () => {
    return (
        <Container
            sx={{
                display: "flex",
                gap: 2,
                justifyContent: "start",
                padding: 0,
            }}
        >
            <Tooltip title="Загрузите свои анализы, а наш ассистент проанализирует и даст рекомендации">
                <Button variant="contained" endIcon={<FileUploadIcon />}>
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
