import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { FavoriteMovies } from "./components/FavoriteMovies";
import { SingleMovie } from "./components/SingleMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/favorites",
    element: <FavoriteMovies />,
  },
  {
    path: "/:movieID",
    element: <SingleMovie />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
