import { createBrowserRouter } from "react-router-dom";
import Courses from "../../components/Courses/Courses";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../Layouts/Main/Main";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [{
            path: '/', element:<Home></Home>
        },
        {
            path: '/courses', element: <Courses></Courses>
        },
        {
            path: '/login', element: <Login></Login>
        },
        {
            path: '/register', element: <Register></Register>
        }

    ]
    }
])