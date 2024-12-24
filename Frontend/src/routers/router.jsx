import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../../../Web-Blog/src/pages/Register";
import Layout from "../Layouts/Layout";
import App from "../App";
const router = createBrowserRouter([
    {
        path: '/asd',
        element: <App></App>
    }
]);
export default router;