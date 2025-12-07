import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import type { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type Props = {
    open: boolean;
    text: string;
    Icon?: ReactNode;
    path: string;
};

export const BloodTestItem = ({ open, text, Icon, path }: Props) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
                <ListItemButton
                    sx={{
                        pl: 4,
                        mb: 1,
                        pt: 0.5,
                        pb: 0.5,
                        borderRadius: 1,
                        fontSize: 1,
                    }}
                    selected={location.pathname === path}
                    onClick={() => navigate(path)}
                >
                    <ListItemIcon>{Icon}</ListItemIcon>
                    <ListItemText secondary={text} />
                </ListItemButton>
            </List>
        </Collapse>
    );
};
