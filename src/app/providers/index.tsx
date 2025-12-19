import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

import { AuthPage } from "@pages/auth";
import { BloodTestsPage } from "@pages/blood-tests";
import { DashboardPage } from "@pages/dashboard";
import { MyDynamicPage } from "@pages/my-danymic";
import { ProfilePage } from "@pages/profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthPage />,
    },
    {
        path: "/dashboard",
        element: <DashboardPage />,
        children: [
            {
                index: true,
                element: <Navigate to="blood-tests/analyst" />,
            },
            {
                path: "blood-tests",
                children: [
                    {
                        index: true,
                        element: <Navigate to="analyst" />,
                    },
                    {
                        path: "analyst",
                        element: <BloodTestsPage />,
                    },
                    {
                        path: "dynamic",
                        element: <MyDynamicPage />,
                    },
                ],
            },
            {
                path: "my-health",
                element: <>my-health</>,
            },
            {
                path: "consultations",
                element: <div>consultations</div>,
            },
            {
                path: "pill-tracking",
                element: <div>pill-tracking</div>,
            },
            {
                path: "profile",
                element: <ProfilePage />,
            },
            {
                path: "settings",
                element: <div>Settings XX</div>,
            },
        ],
    },
]);

export const AppRouter = () => <RouterProvider router={router} />;
