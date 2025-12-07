import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import TaskIcon from "@mui/icons-material/Task";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { useLocation, useNavigate } from "react-router-dom";

const mainListItems = [
    {
        text: "Анализы крови",
        icon: <AnalyticsRoundedIcon />,
        path: "/dashboard/blood-tests",
    },
    {
        text: "Консультации",
        icon: <PeopleRoundedIcon />,
        path: "/dashboard/consultations",
    },
    {
        text: "Приём таблеток",
        icon: <TaskIcon />,
        path: "/dashboard/pill-tracking",
        block: true,
    },
];

const secondaryListItems = [
    { text: "Настройки", icon: <SettingsRoundedIcon />, path: "/settings" },
    { text: "О нас", icon: <InfoRoundedIcon />, path: "/about" },
    { text: "Обратная связь", icon: <HelpRoundedIcon />, path: "/feedback" },
];

export const MenuContent = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
            <List dense>
                {mainListItems.map((item, index) => (
                    <ListItem disablePadding key={index}>
                        <ListItemButton
                            sx={{
                                borderRadius: 1,
                                mb: 1,
                            }}
                            disabled={item.block}
                            selected={location.pathname === item.path}
                            onClick={() => navigate(item.path)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <List dense>
                {secondaryListItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
};
