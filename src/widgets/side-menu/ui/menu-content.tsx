import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
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
import { type ReactNode, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { BloodTestItem } from "@widgets/side-menu/ui/BloodTestItem.tsx";

export type MenuItem = {
    text: string;
    icon: ReactNode;
    path: string;
    collapse?: boolean;
    block?: boolean;
    children?: { text: string; icon: ReactNode; path: string }[];
};

const mainListItems: MenuItem[] = [
    {
        text: "Моё здоровье",
        icon: <FavoriteTwoToneIcon />,
        path: "/dashboard/my-health",
    },
    {
        text: "Анализы крови",
        icon: <BloodtypeIcon />,
        collapse: true,
        path: "",
        children: [
            {
                text: "AI анализ",
                icon: <AnalyticsRoundedIcon />,
                path: "/dashboard/blood-tests/analyst",
            },
            {
                text: "Динамика",
                icon: <AutoGraphIcon />,
                path: "/dashboard/blood-tests/dynamic",
            },
        ],
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
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
            <List
                dense
                sx={{
                    "& .MuiListItemButton-root": {
                        borderRadius: 1,
                    },
                }}
            >
                {mainListItems.map((item, index) => {
                    if (item.collapse) {
                        return (
                            <>
                                <ListItem disablePadding key={index}>
                                    <ListItemButton
                                        onClick={handleClick}
                                        sx={{
                                            borderRadius: 1,
                                            mb: 1,
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ListItemIcon>
                                                {item.icon}
                                            </ListItemIcon>
                                        </ListItemIcon>
                                        <ListItemText primary={item.text} />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                </ListItem>
                                {item.collapse &&
                                    item.children &&
                                    item.children.map((child, childIndex) => (
                                        <BloodTestItem
                                            key={childIndex}
                                            open={open}
                                            text={child.text}
                                            Icon={child.icon}
                                            path={child.path}
                                        />
                                    ))}
                            </>
                        );
                    }

                    return (
                        <ListItem disablePadding key={index}>
                            <ListItemButton
                                sx={{
                                    borderRadius: 1,
                                    mb: 1,
                                }}
                                disabled={item?.block}
                                selected={location.pathname === item.path}
                                onClick={() => navigate(item.path)}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
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
