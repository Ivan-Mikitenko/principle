import { Outlet } from "react-router-dom";

import { SideMenu } from "@widgets/side-menu";

export const DashboardPage = () => {
    return (
        <div style={{ display: "flex" }}>
            <SideMenu />

            <div style={{ flexGrow: 1, padding: 24 }}>
                <Outlet />
            </div>
        </div>
    );
};
