import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount(){
        console.log("Parent Mount");
    }
    render(){
        console.log("Parent Component");
           return(
        <div>
            <h1>This is about Page</h1>
            
            <UserClass name={"Child 1"}/>
            <UserClass name={"Child 2"}/>
        </div>
    )
    }
};

export default About;