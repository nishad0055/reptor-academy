import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
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
            path: '/courses', element: <Courses></Courses>,
            loader: () => fetch('https://assignment-ten-server-psi.vercel.app/courses')
        },
        {
           path: '/blog', element: <Blog></Blog>
        },
        {
            path: '/login', element: <Login></Login>
        },
        {
            path: '/register', element: <Register></Register>
        },
        {
            path: '/category/:id', element: <Category></Category>,
            loader: ({params})=> fetch(`https://assignment-ten-server-psi.vercel.app/category/${params.id}`)
        },
        {
            path: '/course-details/:id', element: <CourseDetails></CourseDetails>,
            loader: ({params}) => fetch(`https://assignment-ten-server-psi.vercel.app/course-details/${params.id}`)
        },
        {
            path: '/checkout/:id', element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader:({params}) => fetch(`https://assignment-ten-server-psi.vercel.app/course-details/${params.id}`)
        }
        
    ]
    }
])