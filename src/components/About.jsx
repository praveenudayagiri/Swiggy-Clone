import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    return(
        <div>
            <h1>This is about Page</h1>
            <User name={"Praveen Function"}/>
            <UserClass name={"Praveen Class"}/>
        </div>
    )
};

export default About;