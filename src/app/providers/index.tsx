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
                element: <Navigate to="blood-tests" />,
            },
            {
                path: "blood-tests",
                element: <BloodTestsPage />,
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
                path: "*",
                element: <div>Not Found</div>,
            },
        ],
    },
]);

export const AppRouter = () => <RouterProvider router={router} />;
