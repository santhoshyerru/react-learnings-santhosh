import UserClass from './UserClass';
import {Component} from 'react'
class About extends Component {
    constructor(props) {
        super(props);
     
    }
  
    render(){
        console.log("parent render");
        return (
            <div>
                <h1>This is the Food Delivery App</h1>
                <h2>We deliver fresh and Hot food to your doorstep</h2>
                <h3>Thanks For using our app</h3>
                <UserClass name="first" location="Hyderabad" contact="@santhoshyerru"/>
                <UserClass name="second" location="Hyderabad" contact="@santhoshyerru"/>
            </div>
           
        ) 
    }
}

export default About;