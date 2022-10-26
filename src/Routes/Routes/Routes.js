import { createBrowserRouter } from "react-router-dom";
import Category from "../../components/Category/Category";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
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
            path: '/courses', element: <Courses></Courses>,
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
        }
        
    ]
    }
])