import HomePage from "../pages/HomePage"
import AdminPage from "../pages/Admin"
import Protected from "../components/Protected"
export const routesConfig = [
    {
        id: 1,
        path: "/",
        element: <HomePage />,
    },
    {
        id: 2,
        path: "/AdminPage",
        element: <AdminPage />,
    },
    {
        id: 3,
        path: "/AdminPage",
        element: (
            <Protected>
                <AdminPage />
            </Protected>
        ),
    },
]