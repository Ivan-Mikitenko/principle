import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

import { AuthPage } from "@pages/auth";
import { BloodTestsPage } from "@pages/blood-tests";
import { DashboardPage } from "@pages/dashboard";

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
                        element: <div>Динамика анализов</div>,
                    },
                ],
            },
            {
                path: "consultations",
                element: <div>consultations</div>,
            },
            {
                path: "settings",
                element: <div>settings</div>,
            },
            {
                path: "pill-tracking",
                element: <div>pill-tracking</div>,
            },
            {
                path: "profile",
                element: <div>Profile XX</div>,
            },
            {
                path: "settings",
                element: <div>Settings XX</div>,
            },
        ],
    },
]);

export const AppRouter = () => <RouterProvider router={router} />;
