import NavBar from "../Utility/NavBar/NavBar"
import { Link } from "react-router-dom"
import "./Student.css"

const Student = () => {
    return (
        <>
            <NavBar />
            <div id="title">
                <div className="student">Student Details</div>
                <Link to={"/StudentDetails/:NewStudent"} className="button" >Add New Student</Link>
            </div>

            <table border={0} width="80%" cellPadding={20}>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                    <tr>
                        <td>Nandini</td>
                        <td>20</td>
                        <td>EEE</td>
                        <td>2016</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>Vignesh</td>
                        <td>21</td>
                        <td>CSE</td>
                        <td>2017</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>Pooja</td>
                        <td>22</td>
                        <td>ECE</td>
                        <td>2018</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>Siri</td>
                        <td>23</td>
                        <td>MEC</td>
                        <td>2019</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>Varsha</td>
                        <td>24</td>
                        <td>ITE</td>
                        <td>2020</td>
                        <td>Edit</td>
                    </tr>

                </tbody>
            </table>
        </>

    )
}

export default Student