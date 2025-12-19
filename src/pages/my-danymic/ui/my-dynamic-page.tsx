import {
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    type SelectChangeEvent,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { type Dayjs } from "dayjs";
import { useState } from "react";

export const MyDynamicPage = () => {
    const [typeBlood, setTypeBlood] = useState("");
    const [date, setDate] = useState<Dayjs | null>(null);

    const handleChange = (event: SelectChangeEvent) => {
        setTypeBlood(event.target.value);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container
                sx={{
                    display: "flex",
                    gap: 2,
                    padding: 0,
                    marginLeft: 0,
                }}
            >
                <FormControl size="small" sx={{ minWidth: 250 }}>
                    <InputLabel id="demo-simple-select-label">
                        Тип анализа
                    </InputLabel>
                    <Select
                        displayEmpty
                        labelId="demo-simple-select-label"
                        label="Тип анализа"
                        value={typeBlood}
                        onChange={handleChange}
                        style={{ width: "100%", backgroundColor: "#fff" }}
                    >
                        <MenuItem value="cbc">Клинический анализ</MenuItem>
                        <MenuItem value="bio">Биохимия</MenuItem>
                        <MenuItem value="hormones">Гормоны</MenuItem>
                    </Select>
                </FormControl>

                <DatePicker
                    label="Дата анализа"
                    disabled={!typeBlood}
                    value={date}
                    onChange={(newValue) => setDate(newValue)}
                    slotProps={{
                        textField: {
                            size: "small",
                            sx: { minWidth: 250, backgroundColor: "#fff" },
                        },
                    }}
                />
            </Container>
        </LocalizationProvider>
    );
};
