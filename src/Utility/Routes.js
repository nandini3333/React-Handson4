import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "../Pages/Home"
import Student from "../Pages/Student"
import ContactUs from "../Pages/ContactUs"
import NewStudent from "../Pages/NewStudent"

const RouterComponent = () => {
   return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/StudentDetails" element={<Student/>}/>
        <Route path="/Contact-Us" element={<ContactUs/>}/>
        <Route path="/StudentDetails/:NewStudent" element={<NewStudent/>}/>
    </Routes>
    </BrowserRouter>
   )
}

export default RouterComponent