import Box from "@mui/material/Box";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

import { UserInfo } from "@entities/user-info";

import { MenuContent } from "./menu-content.tsx";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
    width: drawerWidth,
    flexShrink: 0,
    boxSizing: "border-box",
    mt: 10,
    [`& .${drawerClasses.paper}`]: {
        width: drawerWidth,
        boxSizing: "border-box",
    },
});

export const SideMenu = () => {
    return (
        <Drawer variant="permanent">
            <Box
                sx={{
                    overflow: "auto",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <MenuContent />
                <UserInfo />
            </Box>
        </Drawer>
    );
};
