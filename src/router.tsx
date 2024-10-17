import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Loading from "./components/Loading";

const FlightSchedule = lazy(() => import("./pages/FlightSchedule"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <ProtectedRoute element={<FlightSchedule />} />
          </Suspense>
        ),
      },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <NotFoundPage /> },
    ],
  },
]);
