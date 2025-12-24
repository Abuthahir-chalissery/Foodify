import User from "./User"
import UserClass from "./UserClass"

const About = () => {
    return(
        <div>
            <h1>This is about page</h1>
            <User name={"Abuthahir ( Function component )"}/>

            <UserClass name={"Abuthahir from class component"}/>
        </div>
    )
}

export default About