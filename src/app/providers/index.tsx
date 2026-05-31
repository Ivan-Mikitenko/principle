import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

// TODO
// eslint-disable-next-line boundaries/element-types
import { ProtectedRoute } from "@app/routes";
import { AuthPage } from "@pages/auth";
import { BloodTestsPage } from "@pages/blood-tests";
import { DashboardPage } from "@pages/dashboard";
import { MyDynamicPage } from "@pages/my-danymic";
import { PillTrackingPage } from "@pages/pill-tracking";
import { ProfilePage } from "@pages/profile";
import { ROUTES } from "@shared/config/routes.ts";

const router = createBrowserRouter([
    {
        path: ROUTES.AUTH,
        element: <AuthPage />,
    },

    {
        element: <ProtectedRoute />,
        children: [
            {
                path: ROUTES.DASHBOARD,
                element: <DashboardPage />,
                children: [
                    {
                        index: true,
                        element: (
                            <Navigate
                                to={`${ROUTES.BLOOD_TESTS}/${ROUTES.ANALYST}`}
                                replace
                            />
                        ),
                    },

                    {
                        path: ROUTES.BLOOD_TESTS,
                        children: [
                            {
                                index: true,
                                element: (
                                    <Navigate to={ROUTES.ANALYST} replace />
                                ),
                            },

                            {
                                path: ROUTES.ANALYST,
                                element: <BloodTestsPage />,
                            },

                            {
                                path: ROUTES.DYNAMIC,
                                element: <MyDynamicPage />,
                            },
                        ],
                    },

                    {
                        path: ROUTES.MY_HEALTH,
                        element: <>my-health</>,
                    },

                    {
                        path: ROUTES.CONSULTATIONS,
                        element: <div>consultations</div>,
                    },

                    {
                        path: ROUTES.PILL_TRACKING,
                        element: <PillTrackingPage />,
                    },

                    {
                        path: ROUTES.PROFILE,
                        element: <ProfilePage />,
                    },

                    {
                        path: ROUTES.SETTINGS,
                        element: <div>Settings XX</div>,
                    },
                ],
            },
        ],
    },
]);

export const AppRouter = () => <RouterProvider router={router} />;
