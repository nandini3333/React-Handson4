import "./NewStudent.css"

const NewStudent = () => {
    return(
        <>
            <div id="form">
                <form id="form-container" >
                    <div>
                        <label>Name
                            <input type="text" placeholder="Type Name" name="name"  autoComplete="off" />
                        </label>
                    </div>
                    <div>
                        <label>Age
                            <input type="number" placeholder="Type Age" name="age"  autoComplete="off" />
                        </label>
                    </div>
                    <div>
                        <label>Course
                            <input type="text" placeholder="Type Course " name="course"  autoComplete="off" />
                        </label>
                    </div>
                    <div>
                        <label>Batch
                            <input type="text" placeholder="Type Batch " name="batch"  autoComplete="off" />
                        </label>
                    </div>

                    <button type="submit">Update</button>
                    <button>Cancel</button>
                </form>

            </div>
        
    </>
    )
}

export default NewStudent