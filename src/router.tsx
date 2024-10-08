import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Loading from "./components/Loading";

const HomePage = lazy(() => import("./pages/HomePage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: (
          <Suspense fallback={<Loading />}>
            <ProtectedRoute element={<HomePage />} />
          </Suspense>
        ),
      },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <NotFoundPage /> },
    ],
  },
]);
