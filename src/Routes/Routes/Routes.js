import { createBrowserRouter } from "react-router-dom";
import Category from "../../components/Category/Category";
import CheckOut from "../../components/CheckOut/CheckOut";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../Layouts/Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, errorElement: <ErrorPage></ErrorPage> ,children: [{
            path: '/', element:<Home></Home>
        },
        {
            path: '/courses', element: <PrivateRoute><Courses></Courses></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/courses')
        },
        {
            path: '/login', element: <Login></Login>
        },
        {
            path: '/register', element: <Register></Register>
        },
        {
            path: '/category/:id', element: <Category></Category>,
            loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
            path: '/course-details/:id', element: <CourseDetails></CourseDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/course-details/${params.id}`)
        },
        {
            path: '/checkout', element: <CheckOut></CheckOut>
        }
        
    ]
    }
])