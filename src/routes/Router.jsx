import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Root from "../components/Root";
import ErrorPage from "../Pages/ErrorPage";
import Register from "../Pages/Register";
import AddBook from "../Pages/AddBook";
import AllBooks from "../Pages/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks";
import PrivateRoutes from "./PrivateRoutes";
import Details from "../Pages/Details";
import CategoryPage from "../Pages/CategoryPage";
import UpdatePage from "../Pages/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-book",
        element: (
          <PrivateRoutes>
            <AddBook></AddBook>
          </PrivateRoutes>
        ),
      },
      {
        path: "/all-books",
        element: (
          <PrivateRoutes>
            <AllBooks></AllBooks>
          </PrivateRoutes>
        ),
      },
      {
        path: "/borrowed-books",
        element: (
          <PrivateRoutes>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoutes>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <Details></Details>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://dream-library-server.vercel.app/details/${params.id}`),
      },
      {
        path: "/category/:name",
        element: (
          <PrivateRoutes>
            <CategoryPage></CategoryPage>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://dream-library-server.vercel.app/category/${params.name}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <UpdatePage></UpdatePage>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://dream-library-server.vercel.app/details/${params.id}`),
      },
    ],
  },
]);

export default router;
