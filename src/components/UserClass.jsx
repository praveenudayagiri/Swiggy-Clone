import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count1:1,
            count2:2,
        };
    }
    render(){
        const {name}=this.props;
        const {count1,count2} = this.state;
            return(
                <div className="user-card">
                    <h1>Name: {name}</h1>
                    <h2>count1: {count1}</h2>
                    <h2>count2: {count2}</h2>
                    <h2>Location: AP</h2>
                    <h2>Contact: praveenudayagiri724@gmail.com</h2>
                </div>
            )
    }
}
export default UserClass;