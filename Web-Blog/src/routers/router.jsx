import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Edit from "../pages/Edit";
import Create from "../pages/Create";
import PostDetail from "../pages/PostDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../Layouts/layout";
import Testpage from "../pages/testpage";
import App from "../App";
const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>
    }
]);
export default router;
